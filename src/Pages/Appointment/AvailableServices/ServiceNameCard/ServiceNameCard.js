import React from 'react';
import useServices from '../../../../hooks/useServices';

const ServiceNameCard = ({ service, onServiceChangeListener }) => {
    return (
        // <label className='my-2 p-2 flex items-center border-2 border-secondary rounded-md' htmlFor={service._id}>

        //     <input onClick={() => onServiceChangeListener(service._id)} type="radio" name="option" id={service._id} />
        //     <p className='ml-2 text-2xl'>{service.name}</p>

        // </label>

        <div onClick={() => onServiceChangeListener(service._id)} className="card cursor-pointer shadow hover:shadow-lg">
            <div className="card-body">
                <h2 className="card-title text-secondary flex justify-center">{service.name}</h2>
            </div>
        </div>
    );
};

export default ServiceNameCard;