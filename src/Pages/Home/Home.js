import React from 'react';
import AppointmentSection from './AppointmentSection/AppointmentSection';
import Banner from './Banner/Banner';
import ExceptionalDentalSection from './ExceptionalDentalSection/ExceptionalDentalSection';
import InfoSection from './InfoSection/InfoSection';
import ServiceSection from './ServiceSection/ServiceSection';

const Home = () => {
    return (
        <div>
            <div className='px-12 '>
                <Banner></Banner>
                <InfoSection></InfoSection>
                <ServiceSection></ServiceSection>
                <ExceptionalDentalSection></ExceptionalDentalSection>

            </div>
            <AppointmentSection></AppointmentSection>

        </div>

    );
};

export default Home;