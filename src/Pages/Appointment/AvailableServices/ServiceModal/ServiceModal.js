import { format } from 'date-fns';
import React, { useRef } from 'react';
import { toast } from 'react-toastify';

const ServiceModal = ({ selectedTreatment, user, setSelectedTreatment, refetch }) => {
    const { displayName, email } = user
    const { _id, name, slot, selectedDate } = selectedTreatment;

    const phoneRef = useRef('')


    // console.log(format(selectedDate, 'pp'))

    const serviceSubmitHandler = (event) => {
        event.preventDefault()
        const formatDate = format(selectedDate, 'PP');

        const bookingObj = {
            treatmentId: _id,
            treatmentName: name,
            patientName: displayName,
            patientEmail: email,
            slot,
            date: formatDate,
            phone: phoneRef.current.value
        }
        // console.log(bookingObj)
        fetch('http://localhost:5000/treatmentbooking', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bookingObj)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // if (data.acknowledged) {
                //     setSelectedTreatment({})

                // }

                if (data.success) {
                    toast('Appointment Successfully stored..')
                    setSelectedTreatment({})
                    refetch();
                    

                }
                else {
                    toast.error(`Already Appointed on ${data?.booking?.date} at ${data?.booking?.slot} same service`)
                }
            })

    }
    // console.log()
    return (
        <div>
            <input type="checkbox" id="service-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="service-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={serviceSubmitHandler} className='mt-5'>

                        <input type="text" disabled value={format(selectedDate, 'PP')} className="input my-2 input-bordered input-sm  w-full" />
                        <input type="text" disabled value={slot} className="input my-2 input-sm input-bordered w-full " />
                        <input type="text" disabled value={displayName} className="input my-2 input-sm input-bordered w-full " />
                        <input type="email" disabled value={email} className="input my-2 input-sm input-bordered w-full " />
                        <input type="tel" ref={phoneRef} required placeholder='Phone' className="input my-2 input-sm input-bordered w-full " />

                        <input type="submit" className='btn my-2 w-full btn-primary' value="Submit" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default ServiceModal;