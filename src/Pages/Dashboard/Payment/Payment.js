import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2GtBH4xRKtT9akcROYTxJculEA4djz5Nkl8BsEcEl1pZ7xpj59v4upPW1FucmR6WMBa5htyMeJI3gBZTLSnXNz005mbyDun0');
const Payment = () => {
    const { id } = useParams();
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch(`http://localhost:5000/treatmentbooking/${id}`, {
            method: "GET",
            headers: { 'authorization': `Bearer ${localStorage.getItem('accessToken')}` }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    // console.log(data)

    const { patientName, date, price, slot, treatmentName } = data;
    return (
        <div>
            <div className='mb-5 '>
                <h2 className='text-2xl'>Payment</h2>



                <div className='mt-10'>
                    <div class="card bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Hi <span className='text-primary'>{patientName},</span></h2>
                            <p>Your Appointment: <span className='text-primary'>{date}</span> at <span className='text-primary'>{slot}</span></p>
                            <p>Treatment Name: {treatmentName}</p>
                            <p>Total Price: ${price}</p>

                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <div class="card bg-base-100 shadow-xl">
                        <div class="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm appointmentInfo={data} />
                            </Elements>

                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Payment;