import React from 'react';

const ServiceNameCard = ({ service, onServiceChangeListener }) => {
    return (
        <div onClick={() => onServiceChangeListener(service._id)} className="card cursor-pointer shadow hover:shadow-lg">
            <div className="card-body">
                <h2 className="card-title text-secondary flex justify-center">{service.name}</h2>
            </div>
        </div>
    );
};

export default ServiceNameCard;