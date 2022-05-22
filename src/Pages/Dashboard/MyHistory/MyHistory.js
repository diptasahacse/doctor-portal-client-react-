import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import HistoryTableRow from './HistoryTableRow/HistoryTableRow';

const MyHistory = () => {
    const [paymentInfo, setPaymentInfo] = useState([])
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        fetch(`https://pacific-dawn-42363.herokuapp.com/payment/${user.email}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setPaymentInfo(data)
            })

    }, [user.email])
    console.log(paymentInfo)
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='mb-5 '>
                <h2 className='text-2xl'>My History</h2>
            </div>

            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Treatment Name</th>
                                <th>Price</th>
                                <th>Transaction Id</th>
                                <th>Payment Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paymentInfo.map((payment, index) => <HistoryTableRow key={payment._id} index={index} payment={payment}></HistoryTableRow>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyHistory;