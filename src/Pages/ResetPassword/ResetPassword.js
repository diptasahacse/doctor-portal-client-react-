import { async } from '@firebase/util';
import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
const ResetPassword = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    const onSubmit = async (data) => {
        await sendPasswordResetEmail(data.email);
        toast("Reset link sent your email");

    };
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Reset your Password</h2>
                    <form className='mt-4' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">

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

                            <div className='mb-2'>
                                <Link to='/login' className='link text-primary'>Back to Login</Link>
                            </div>
                        </div>
                        <input className='btn w-full max-w-xs' type="submit" value='Send Reset Link' />
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;