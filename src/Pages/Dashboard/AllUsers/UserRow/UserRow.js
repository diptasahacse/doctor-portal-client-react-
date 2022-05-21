import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email } = user;

    const makeAdminHandler = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                toast(`Successfully made an admin for ${email}`)
            })

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td><button onClick={makeAdminHandler} disabled={user?.role} className="btn btn-primary btn-xs">Create Admin</button></td>
            <td><button className="btn btn-error btn-xs">Remove Admin</button></td>


        </tr>
    );
};

export default UserRow;