import React from 'react';
import AppointmentSection from './AppointmentSection/AppointmentSection';
import Banner from './Banner/Banner';
import ExceptionalDentalSection from './ExceptionalDentalSection/ExceptionalDentalSection';
import FormSection from './FormSection/FormSection';
import InfoSection from './InfoSection/InfoSection';
import ServiceSection from './ServiceSection/ServiceSection';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <InfoSection></InfoSection>
                <ServiceSection></ServiceSection>
                <ExceptionalDentalSection></ExceptionalDentalSection>
            </div>
            <AppointmentSection></AppointmentSection>
            <div>
                <Testimonials></Testimonials>
            </div>
            <FormSection></FormSection>

        </div>

    );
};

export default Home;