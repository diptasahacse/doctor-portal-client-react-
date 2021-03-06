import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../../shared/Loading/Loading';

const UserRow = ({ userData, index, refetch }) => {
    const { email } = userData;
    const [user, loading, error] = useAuthState(auth);



    if (loading) {
        <Loading></Loading>
    }
    const removeAdminHandler = () => {
        // https://pacific-dawn-42363.herokuapp.com/user/removeadmin/:email

        fetch(`https://pacific-dawn-42363.herokuapp.com/user/removeadmin/${email}`, {
            method: "PUT",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast(`Successfully removed an admin for ${email}`)

                }
            })

    }

    const makeAdminHandler = () => {
        fetch(`https://pacific-dawn-42363.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
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
            <td className={user.email === email && 'text-primary font-bold'}>{user.email === email ? email + " (You)" : email}  </td>
            <td><button onClick={makeAdminHandler} disabled={userData?.role} className="btn btn-primary btn-xs">Create Admin</button></td>
            <td><button onClick={removeAdminHandler} disabled={user.email === email || !userData?.role} className="btn btn-error btn-xs">Remove Admin</button></td>


        </tr>
    );
};

export default UserRow;