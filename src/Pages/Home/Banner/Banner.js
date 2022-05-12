import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../shared/PrimaryButton/PrimaryButton';
import bg from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <div style={{backgroundImage:`url(${bg})`}} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm w-full rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;