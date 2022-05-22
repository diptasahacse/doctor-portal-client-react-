import React from 'react';
import { toast } from 'react-toastify';

const DoctorsTableRow = ({ doctor, index, refetch }) => {
    const { _id, doctorEmail, doctorName, imgLink, specialty } = doctor;
    const doctorRemoveHandler = (id) => {
        fetch(`https://pacific-dawn-42363.herokuapp.com/alldoctors/${id}`, {
            method: "DELETE",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
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
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={imgLink} alt='' />
                    </div>
                </div>
            </td>
            <td>{doctorName}</td>

            <td>{doctorEmail}</td>
            <td>{specialty}</td>
            <td>
                <button onClick={() => { doctorRemoveHandler(_id) }} className="btn btn-sm btn-error btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
        </tr>
    );
};

export default DoctorsTableRow;