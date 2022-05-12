import React from 'react';

const TestimonialCard = ({ single }) => {
    const { name, image, des, from } = single;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{des}</p>


                <div className='flex mt-5 items-center'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt='' />
                        </div>
                    </div>
                    <div className='ml-4'>
                        <h2 className="card-title">{name}</h2>
                        <p>{from}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;