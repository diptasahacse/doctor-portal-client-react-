import React from 'react';
import UserAdminCreateModal from './UserActionModal/UserAdminCreateModal';

const UserRow = ({ user, index }) => {
    const { email } = user;

    const makeAdminHandler = () => {

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td><label onClick={makeAdminHandler} htmlFor="my-modal" class="btn btn-primary btn-xs">Create Admin</label></td>
            <td><button class="btn btn-error btn-xs">Remove Admin</button></td>
            <UserAdminCreateModal></UserAdminCreateModal>

        </tr>
    );
};

export default UserRow;