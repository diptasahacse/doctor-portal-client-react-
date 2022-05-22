import React from 'react';

const HistoryTableRow = ({ payment, index }) => {
    const { price, time, treatmentName, transactionId } = payment;
    return (
        <tr>
            <th>{index}</th>
            <td>{treatmentName}</td>
            <td>{price}</td>
            <td>{transactionId}</td>
            <td>{time}</td>
        </tr>
    );
};

export default HistoryTableRow;