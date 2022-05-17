import React from 'react';

const SlotCard = ({ name, slot, selectServiceHandler }) => {
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
                    <label onClick={() => { selectServiceHandler(name, slot) }} for="service-modal" class="modal-button btn btn-primary text-white mt-4">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default SlotCard;