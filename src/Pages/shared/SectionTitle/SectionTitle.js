import React from 'react';

const SectionTitle = ({ align, title, subTitle,subTitleColor }) => {
    
    return (
        <div className={`pb-3 ${align}`}>
            <h4 className='font-bold text-xl text-secondary'>{title}</h4>
            <p className={`text-4xl ${subTitleColor}`}>{subTitle}</p>

        </div>
    );
};

export default SectionTitle;