import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../shared/PrimaryButton/PrimaryButton';

const ExceptionalDentalSection = () => {
    return (
        <div className="hero min-h-screen py-12 pb-0">
            <div className="hero-content flex-col gap-20 lg:flex-row">
                <img src={treatment} className="max-w-sm w-full max-w-xs rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalDentalSection;