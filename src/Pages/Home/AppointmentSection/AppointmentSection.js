import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../shared/PrimaryButton/PrimaryButton';


const AppointmentSection = () => {

    return (
        <div style={{ backgroundImage: `url(${appointment})` }} className='mt-20 px-12'>
            <div className="hero-content flex-col lg:flex-row p-0">
                <div className="flex-1 hidden lg:block">
                    <img src={doctor} className="rounded-lg mt-[-150px]" />
                </div>

                <div className='text-white flex-1 lg:py-0 py-12'>
                    <p className='font-bold text-2xl text-primary mb-2'>Appointment</p>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppointmentSection;