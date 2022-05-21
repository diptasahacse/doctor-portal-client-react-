import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading';
import UserRow from './UserRow/UserRow';

const AllUsers = () => {
    const { isLoading, error, data, refetch } = useQuery('user', () =>
        fetch('http://localhost:5000/user', {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>

    }
    // console.log(data)
    return (
        <div>
            <div className='mb-5 '>
                <h2 className='text-2xl'>All Users</h2>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Add Admin</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((user, index) => <UserRow index={index} refetch={refetch} key={user._id} user={user}></UserRow>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;