import React from 'react';

const ServiceNameCard = ({ service, onServiceChangeListener }) => {
    // console.log(service)
    const { _id, name, slots, price } = service;
    return (
        <div onClick={() => onServiceChangeListener(_id)} className="card cursor-pointer shadow hover:shadow-lg">
            <div className="card-body">
                <h2 className="card-title text-secondary flex justify-center">{name}</h2>
                <p className='flex text-primary text-lg font-medium justify-center'>{slots.length} Slots</p>
                <p className='flex text-blue-500 text-lg font-medium justify-center'>${price}</p>
            </div>
        </div>
    );
};

export default ServiceNameCard;