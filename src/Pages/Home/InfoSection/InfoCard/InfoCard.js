import React from 'react';


const InfoCard = ({ info, index }) => {
    const { title, des, logo } = info;
    return (
        <div className={`card lg:card-side text-white ${index % 2 == 0 ? 'bg-accent' : 'bg-gradient-to-r from-secondary to-primary'} shadow-xl`}>
            <figure className='mt-10 lg:mt-0 ml-0 lg:ml-10'><img src={logo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{des}</p>

            </div>
        </div>
    );
};

export default InfoCard;