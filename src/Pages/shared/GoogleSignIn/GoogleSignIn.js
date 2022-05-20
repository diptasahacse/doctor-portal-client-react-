import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../Loading/Loading';

const GoogleSignIn = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let location = useLocation();
    const [token] = useToken(gUser);
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        // For google user
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
    let gErrorMessage;

    if (gLoading) {
        <Loading></Loading>

    }

    if (gError) {
        gErrorMessage = <p className='text-red-500 mb-4'>{gError?.message}</p>

    }

    return (
        <div>
            {
                gErrorMessage && gErrorMessage
            }
            <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full btn-accent">Continue with google</button>
        </div>
    );
};

export default GoogleSignIn;