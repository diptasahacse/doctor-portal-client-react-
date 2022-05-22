import React from 'react';
import { Link } from 'react-router-dom';

const MyAppointmentRow = ({ appointment, index }) => {
    console.log(appointment)
    const { _id, patientName, treatmentName, slot, date } = appointment;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{patientName}</td>
            <td>{treatmentName}</td>
            <td>{date}</td>
            <td>{slot}</td>
            <td>{appointment?.paid ? <span className='text-success'>Paid</span> : <Link to={`/dashboard/payment/${_id}`} className='btn btn-xs btn-success'>Pay</Link>}</td>

        </tr>
    );
};

export default MyAppointmentRow;