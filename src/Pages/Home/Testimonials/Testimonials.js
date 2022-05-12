import React from 'react';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import quotes from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard/TestimonialCard';


const Testimonials = () => {
    const testimonialData = [
        {
            des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: 'Winson Herry',
            image: people1,
            from: "California"
        },
        {
            des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: 'Dipta Saha',
            image: people2,
            from: "Bangladesh"
        },
        {
            des: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: 'Jon Abraham',
            image: people3,
            from: "Yow York"
        }
    ];
    return (
        <div className='py-12'>

            <div className='bg-right bg-no-repeat bg-contain' style={{ backgroundImage: `url(${quotes})` }}>
                <SectionTitle align='text-left' title="Testimonial" subTitle='What Our Patients Says'></SectionTitle>
            </div>
            <div className='mt-5 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    testimonialData.map((single,index) => <TestimonialCard key={index} single={single}></TestimonialCard>)
                }

            </div>

        </div>
    );
};

export default Testimonials;