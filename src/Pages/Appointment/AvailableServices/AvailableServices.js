import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';
import AvailableServiceSlots from './AvailableServiceSlots/AvailableServiceSlots';
import ServiceNameCard from './ServiceNameCard/ServiceNameCard';

const AvailableServices = ({ selectedDate }) => {
    const [services, setServices] = useServices()
    const [selectedServiceObj, setSelectedServiceObj] = useState({})

    // console.log(services)
    const onServiceChangeListener = (serviceId) => {

        const selectedSlot = services.find(service => service._id === serviceId)
        setSelectedServiceObj(selectedSlot)

    }
    return (
        <div>
            <h3 className='text-center text-primary font-semibold text-xl'>Available Services on  {format(selectedDate, 'PP')}</h3>

            <div className='grid my-10 grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceNameCard onServiceChangeListener={onServiceChangeListener} key={service._id} service={service}></ServiceNameCard>)
                }
            </div>
            {
                Object.keys(selectedServiceObj).length > 0 && <AvailableServiceSlots selectedServiceObj={selectedServiceObj}></AvailableServiceSlots>
            }

        </div>
    );
};

export default AvailableServices;