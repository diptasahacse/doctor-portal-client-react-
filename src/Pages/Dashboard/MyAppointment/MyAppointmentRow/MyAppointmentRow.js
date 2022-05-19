import React from 'react';

const MyAppointmentRow = ({ appointment, index }) => {
    const { patientName, treatmentName, slot } = appointment;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{patientName}</td>
            <td>{treatmentName}</td>
            <td>{slot}</td>
        </tr>
    );
};

export default MyAppointmentRow;