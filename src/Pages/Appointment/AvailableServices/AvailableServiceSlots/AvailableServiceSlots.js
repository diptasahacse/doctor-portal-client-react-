import React from 'react';
import SlotCard from './SlotCard/SlotCard';

const AvailableServiceSlots = ({ selectedServiceObj }) => {

    const { name, slots } = selectedServiceObj
    console.log(slots)
    return (
        <div className='my-20'>
            <h3 className='text-center text-secondary font-semibold text-xl'>Available slots for {name}.</h3>

            <div className='grid grid-cols-3 gap-4'>
                {
                    slots.map((slot, index) => <SlotCard key={index} name={name} slot={slot}></SlotCard>)
                }
            </div>


        </div>
    );
};

export default AvailableServiceSlots;