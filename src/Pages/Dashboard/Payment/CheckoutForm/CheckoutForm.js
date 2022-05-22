import React, { useEffect, useState } from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { async } from '@firebase/util';
import Loading from '../../../shared/Loading/Loading';


const CheckoutForm = ({ appointmentInfo }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const { _id, patientName, date, price, slot, treatmentName, patientEmail } = appointmentInfo;

    const intPrice = Number(price)
    console.log(appointmentInfo)


    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(
                { "price": intPrice }
            )
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)

                }
            })

    }, [intPrice])


    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error ? error.message : '')


        // Confirm card payment
        setIsLoading(true)
        setSuccess('')
        const { paymentIntent, error: intentCardError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patientEmail
                    },
                },
            },
        );
        if (intentCardError) {
            setIsLoading(false)

            setCardError(intentCardError.message)

        }
        else {

            setCardError('')
            console.log(paymentIntent)
            setTransactionId(paymentIntent.id)
            setSuccess('Your payment is completed')

            // store payment on database
            const payment = {
                appointmentId: _id,
                transactionId: paymentIntent.id,
                patientEmail
            }

            fetch(`http://localhost:5000/treatmentbooking/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsLoading(false)
                })
        }



    }
    if (isLoading) {
        return <Loading></Loading>
    }
    // console.log(cardError)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='mt-5'>
                    <button className='btn btn-xs btn-primary' type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </div>
            </form>
            {cardError && <p className='text-red-500'>{cardError}</p>}
            {success && <p className='text-green-500'>{success}</p>}
            {transactionId && <p className='text-green-500'>Your Transaction id: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;