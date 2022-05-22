import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading';
import DoctorsTableRow from './DoctorsTableRow/DoctorsTableRow';

const AllDoctors = () => {
    // http://localhost:5000/alldoctors


    const { isLoading, error, data, refetch } = useQuery('repoData', () =>
        fetch('http://localhost:5000/alldoctors', {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        }).then(res =>
            res.json()
        )
    )

    // console.log(data)


    if (isLoading) {
        return <Loading></Loading>

    }

    return (
        <div>
            <div className='mb-5 '>
                <h2 className='text-2xl'>All Doctors</h2>
            </div>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th>#</th>

                                <th>Profile Picture</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Specialty</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((doctor, index) => <DoctorsTableRow doctor={doctor} refetch={refetch} index={index} key={doctor._id} ></DoctorsTableRow>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllDoctors;