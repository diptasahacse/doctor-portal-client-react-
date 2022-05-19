import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import ServiceModal from '../ServiceModal/ServiceModal';
import SlotCard from './SlotCard/SlotCard';

const AvailableServiceSlots = ({ selectedServiceObj, selectedDate, refetch }) => {
    const [user, loading, error] = useAuthState(auth);
    const { _id, name, slots } = selectedServiceObj;
    const [selectedTreatment, setSelectedTreatment] = useState({})
    const selectServiceHandler = (name, slot) => {
        setSelectedTreatment({ _id, name, slot, selectedDate })

    }

    return (
        <div className='my-20'>
            <h3 className='text-center text-secondary font-semibold text-xl'>Available slots for {name}.</h3>

            {slots.length ?
                <div className='grid grid-cols-3 gap-4'>
                    {
                        slots.map((slot, index) => <SlotCard selectServiceHandler={selectServiceHandler} key={index} name={name} slot={slot}></SlotCard>)
                    }
                </div>
                : <p className='text-center mt-3 text-red-600'>Slot is not available</p>
            }
            {
                Object.keys(selectedTreatment).length > 0 && <ServiceModal refetch={refetch} setSelectedTreatment={setSelectedTreatment} user={user} selectedTreatment={selectedTreatment}></ServiceModal>
            }


        </div>
    );
};

export default AvailableServiceSlots;