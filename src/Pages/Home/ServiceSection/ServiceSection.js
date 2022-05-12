import React from 'react';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard/ServiceCard';

const ServiceSection = () => {
    const serviceData = [
        {
            title: 'Fluoride Treatment',
            des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            logo: fluoride
        },
        {
            title: 'Cavity Filling',
            des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            logo: cavity
        },
        {
            title: 'Teeth Whitening',
            des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            logo: whitening
        }
    ]
    return (
        <div className='py-12'>
            <SectionTitle title='our services' subTitle='Service we Provide' align='text-center'></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    serviceData.map((service, index) => <ServiceCard key={index} service={service}></ServiceCard>)

                }
            </div>

        </div>
    );
};

export default ServiceSection;