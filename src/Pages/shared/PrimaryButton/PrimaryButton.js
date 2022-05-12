import React from 'react';

const PrimaryButton = ({name}) => {
    return (
        <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary">{name}</button>
    );
};

export default PrimaryButton;