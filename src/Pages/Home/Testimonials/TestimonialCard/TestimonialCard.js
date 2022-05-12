import React from 'react';

const TestimonialCard = ({ single }) => {
    const { name, image, des, from } = single;
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{des}</p>


                <div className='flex mt-5 items-center'>
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <div className='ml-4'>
                        <h2 class="card-title">{name}</h2>
                        <p>{from}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;