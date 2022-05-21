import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email } = user;

    const makeAdminHandler = () => {
        fetch(`https://pacific-dawn-42363.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make and admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast(`Successfully made an admin for ${email}`)

                }
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