import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()

    let location = useLocation();
    let signInError;
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // For Error
    if (gError || error) {
        signInError = <p className='text-red-500 mb-4'>{gError?.message || error?.message}</p>

    }
    // For Loading
    if (gLoading || loading) {

        return <Loading></Loading>
    }


    // console.log(gError)

    // For email and google User
    if (user || gUser) {
        // if email is verified
        if (user) {
            // if he login with email 
            if (user.user.emailVerified) {
                navigate(from, { replace: true });
            }
            else {
                signInError = <p className='text-red-500 mb-4'>Email is not verified.. please verify it</p>
            }

        }
        else {
            // if he login with google 
            navigate(from, { replace: true });
        }

    }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)

        console.log(data)
    };
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title flex justify-center">Login</h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Email Input */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register("email",
                                        {
                                            required: {
                                                value: true,
                                                message: "Email is required"
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide valid email'
                                            }
                                        }
                                    )}
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                </label>
                            </div>

                            {/* Password Input */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register("password",
                                        {
                                            required: {
                                                value: true,
                                                message: "Password is required"
                                            },
                                            minLength: {
                                                value: 8,
                                                message: 'Provide provide at least 8 characters'
                                            }
                                        }
                                    )}
                                    type="password"
                                    placeholder="Your Password"
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                </label>
                            </div>
                            {
                                signInError && signInError
                            }
                            <input className='btn w-full max-w-xs' type="submit" value='Login' />
                        </form>
                        <p className='text-center mt-2'><small>New to doctor's portal..? <Link className='text-primary' to='/register'>Register</Link> </small></p>
                    </div>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent">Continue with google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;