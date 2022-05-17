import { format } from 'date-fns';
import React from 'react';

const ServiceModal = ({ selectedTreatment }) => {
    const { name, slot, selectedDate } = selectedTreatment;
    return (
        <div>
            <input type="checkbox" id="service-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="service-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <div className='mt-5'>
                        <input type="text" disabled value={format(selectedDate, 'PP')} className="input my-2 input-bordered input-sm  w-full" />
                        <input type="text" disabled value={slot} className="input my-2 input-sm input-bordered w-full " />
                        <input type="text" placeholder='Enter Full Name' className="input my-2 input-sm input-bordered w-full " />
                        <input type="phone" placeholder='Phone' className="input my-2 input-sm input-bordered w-full " />
                        <input type="email" placeholder='Email' className="input my-2 input-sm input-bordered w-full " />
                        <button className='btn my-2 w-full btn-primary'>Submit</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceModal;