import { format } from 'date-fns';
import React from 'react';

const ServiceModal = ({ selectedTreatment }) => {
    const { name, slot, selectedDate } = selectedTreatment;
    return (
        <div>
            <input type="checkbox" id="service-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="service-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">{name}</h3>

                    <div className='mt-5'>
                        <input type="text" disabled value={format(selectedDate, 'PP')} class="input my-2 input-bordered input-sm  w-full" />
                        <input type="text" disabled value={slot} class="input my-2 input-sm input-bordered w-full " />
                        <input type="text" placeholder='Enter Full Name' class="input my-2 input-sm input-bordered w-full " />
                        <input type="phone" placeholder='Phone' class="input my-2 input-sm input-bordered w-full " />
                        <input type="email" placeholder='Email' class="input my-2 input-sm input-bordered w-full " />
                        <button className='btn my-2 w-full btn-primary'>Submit</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceModal;