import React from 'react';
import Banner from './Banner/Banner';
import InfoSection from './InfoSection/InfoSection';
import ServiceSection from './ServiceSection/ServiceSection';

const Home = () => {
    return (
        <div className='px-12 '>
            <Banner></Banner>
            <InfoSection></InfoSection>
            <ServiceSection></ServiceSection>
        </div>
    );
};

export default Home;