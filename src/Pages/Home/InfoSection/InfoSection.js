import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const InfoSection = () => {
    const infoData =[
        {
            title:'Opening Hours',
            des:"Lorem Ipsum is simply dummy text of the pri",
            logo: clock
        },
        {
            title:'Visit our location',
            des:"Brooklyn, NY 10036, United States",
            logo: marker
        },
        {
            title:'Contact us now',
            des:"+000 123 456789",
            logo: phone
        }
    ]
    return (
        <div className='px-12 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    infoData.map((info,index) => <InfoCard key={index} info={info} index={index+1}></InfoCard>)
                }

            </div>
        </div>
    );
};

export default InfoSection;