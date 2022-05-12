import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, des, logo } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure  className='mt-10 ml-0 lg:ml-10'><img src={logo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{des}</p>
                
            </div>
        </div>
    );
};

export default ServiceCard;