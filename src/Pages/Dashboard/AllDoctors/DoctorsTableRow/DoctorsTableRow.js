import React from 'react';
import { toast } from 'react-toastify';

const DoctorsTableRow = ({ doctor, index, refetch }) => {
    const { _id, doctorEmail, doctorName, imgLink, specialty } = doctor;
    const doctorRemoveHandler = (id) => {
        fetch(`http://localhost:5000/alldoctors/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('Successfully Deleted');
                    refetch()

                }

            })

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-14 rounded-full">
                        <img src={imgLink} />
                    </div>
                </div>
            </td>
            <td>{doctorName}</td>

            <td>{doctorEmail}</td>
            <td>{specialty}</td>
            <td>
                <button onClick={() => { doctorRemoveHandler(_id) }} class="btn btn-sm btn-error btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default DoctorsTableRow;