import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data, isLoading } = useQuery('servicesname', () => fetch('http://localhost:5000/servicesname').then(res => res.json()))
    const onSubmit = async (data) => {
        console.log(data)

    };
    // console.log(data)

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='mb-5 '>
                <h2 className='text-2xl'>Add Doctor</h2>
            </div>
            <div className=''>
                <form className='w-full flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Full Name */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Doctor Name</span>
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
                            placeholder="Doctor Name"
                            className="input input-bordered w-full"
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                            {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                        </label>
                    </div>
                    {/* Email Input */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Doctor Email</span>
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
                            className="input input-bordered w-full"
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                        </label>
                    </div>

                    {/* Specialization Input */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Specialization </span>
                        </label>
                        <select {...register('specialty')} class="select select-bordered w-full">
                            {
                                data.map(serviceName => <option key={serviceName._id} value={serviceName.name}>{serviceName.name}</option> )
                            }
                            
                        </select>
                        
                    </div>
                    {/* Image Input */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Doctor Name</span>
                        </label>
                        <input
                            {...register("profileImage",
                                {
                                    required: {
                                        value: true,
                                        message: "Image is required"
                                    }
                                }
                            )}
                            type="file"
                            className="input input-bordered w-full"
                        />
                        <label className="label">
                            {errors.profileImage?.type === 'required' && <span className="label-text-alt text-red-600">{errors.profileImage.message}</span>}
                            
                        </label>
                    </div>

                    <input className='btn w-full mt-5' type="submit" value='Add Doctor' />
                </form>
            </div>

        </div>
    );
};

export default AddDoctor;