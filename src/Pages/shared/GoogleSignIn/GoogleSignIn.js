import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';

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


    return (
        <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent">Continue with google</button>
    );
};

export default GoogleSignIn;