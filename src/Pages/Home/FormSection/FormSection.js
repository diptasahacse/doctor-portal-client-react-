import React from 'react';
import PrimaryButton from '../../shared/PrimaryButton/PrimaryButton';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import appointment from '../../../assets/images/appointment.png'

const FormSection = () => {
    return (
        <div className='py-12' style={{ backgroundImage: `url(${appointment})` }}>
            <SectionTitle align='text-center' title='Contact Us' subTitle='Stay connected with us' subTitleColor='text-white'></SectionTitle>

            <div className='flex justify-center'>
                <div class="card w-full max-w-sm ">
                    <div class="card-body">
                        <div class="form-control">

                            <input type="email" placeholder="Enter Email" class="input input-bordered" />
                        </div>
                        <div class="form-control">

                            <input type="text" placeholder="Subject" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <textarea name="" id="" placeholder="Message" className='input h-40 input-bordered' cols="30" rows="10"></textarea>
                        </div>
                        <div class="form-control mt-4">
                            <button class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FormSection;