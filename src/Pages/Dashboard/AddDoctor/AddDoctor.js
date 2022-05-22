import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../shared/Loading/Loading';

const AddDoctor = () => {

    /*
    3 way to store image
    1. third party storage (imgbb) // free open public storage is ok for practice

    2. own storage in my server // professional
    3. database: Mongodb // professional
    

    Image / file validate
    YAP: it is use to validate file
    
    */
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imgStorageKey = '7f72d87979e17c6504f5811b2f68d7d4'
    const { data, isLoading } = useQuery('servicesname', () => fetch('https://pacific-dawn-42363.herokuapp.com/servicesname').then(res => res.json()))
    const [infoUploadLoading, setInfoUploadLoading] = useState(false)
    const onSubmit = async (data) => {
        setInfoUploadLoading(true)
        const formData = new FormData();
        const img = data.profileImage[0];
        formData.append('image', img)

        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {

            method: "POST",
            body: formData


        })
            .then(res => res.json())
            .then(result => {
                if (result.status) {
                    const imgLink = result.data.url;
                    const doctorName = data.name
                    const doctorEmail = data.email
                    const specialty = data.specialty;


                    const doctorInfo = {
                        imgLink,
                        doctorName,
                        doctorEmail,
                        specialty

                    }
                    fetch('https://pacific-dawn-42363.herokuapp.com/addDoctors', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctorInfo)
                    })
                        .then(res => res.json())
                        .then(result => {
                            // console.log(result)
                            if (result.insertedId) {
                                toast('Doctors added Successfully')
                                setInfoUploadLoading(false)
                                reset()

                            }
                            else {
                                toast.error('Doctors added Faild')
                            }

                        })
                    // console.log(doctorInfo)




                }
            })

    };



    // console.log(data)

    if (isLoading || infoUploadLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='mb-5 '>
                <h2 className='text-2xl'>Add Doctor</h2>
            </div>
            <div className=''>
                <form className='w-full flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
                    {/* Full Name */}
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
                        <select {...register('specialty')} className="select select-bordered w-full">
                            {
                                data.map(serviceName => <option key={serviceName._id} value={serviceName.name}>{serviceName.name}</option>)
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