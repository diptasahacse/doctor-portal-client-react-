import React from 'react';

const SlotCard = ({ name, slot }) => {
    return (
        // <div>
        //     <h3>{name}</h3>
        //     <p>{slot}</p>

        // </div>

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary flex justify-center">{name}</h2>
                <p className='flex justify-center'>{slot}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary text-white mt-4">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default SlotCard;