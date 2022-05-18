import React from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    // Initialize
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sendEmailVerification, sending, verifivationError] = useSendEmailVerification(auth);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let signUpError;
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);





    // For Error
    if (gError || error || updateError || verifivationError) {
        signUpError = <p className='text-red-500 mb-4'>{gError?.message || error?.message || updateError?.message || verifivationError?.message}</p>

    }
    // For Loading
    if (gLoading || loading || updating || sending) {

        return <Loading></Loading>
    }
    // For google user
    if (gUser) {
        navigate(from, { replace: true });
    }

    // console.log(user)


    const onSubmit = async (data) => {
        const displayName = data.name;
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName })
        await sendEmailVerification();
        toast("Verification link sent your email");



    };
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title flex justify-center">Register</h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Email Full Name */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input
                                    {...register("name",
                                        {
                                            required: {
                                                value: true,
                                                message: "Email is required"
                                            },
                                            minLength: {
                                                value: 5,
                                                message: 'Min length at least 5'
                                            }
                                        }
                                    )}
                                    type="text"
                                    placeholder="Your Full Name"
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                                    {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                                </label>
                            </div>
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
                                signUpError && signUpError
                            }
                            <input className='btn w-full max-w-xs' type="submit" value='Register' />
                        </form>
                        <p className='text-center mt-2'><small>Already have an account.? <Link className='text-primary' to='/login'>Login</Link> </small></p>
                    </div>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent">Continue with google</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Register;