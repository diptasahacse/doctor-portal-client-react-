import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import MyAppointmentRow from './MyAppointmentRow/MyAppointmentRow';

const MyAppointment = () => {
    const [user, loading] = useAuthState(auth);
    const [myAppointment, setMyAppointment] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/treatmentbooking?patientEmail=${user.email}`, {
            method: "GET",
            headers: { 'authorization': `Bearer ${localStorage.getItem('accessToken')}` },
            body: JSON.stringify()

        })
            .then(res => res.json())
            .then(data => setMyAppointment(data))

    }, [user])

    if (loading) {
        return <Loading></Loading>
    }
    // console.log(myAppointment)

    return (
        <div>
            <div className='mb-5 '>
                <h2 className='text-2xl'>My Appointment</h2>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Service</th>
                                <th>Date</th>
                                <th>Time</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            {/* <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr> */}
                            {
                                myAppointment.map((appointment, index) => <MyAppointmentRow index={index} appointment={appointment} key={appointment._id}></MyAppointmentRow>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAppointment;