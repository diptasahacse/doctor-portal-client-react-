import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import MyAppointmentRow from './MyAppointmentRow/MyAppointmentRow';

const MyAppointment = () => {
    const [user, loading] = useAuthState(auth);
    const [myAppointment, setMyAppointment] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/treatmentbooking?patientEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setMyAppointment(data))

    }, [user])

    if (loading) {
        return <Loading></Loading>
    }
    console.log(myAppointment)

    return (
        <div>
            <h2>My Appointment : {myAppointment.length}</h2>

            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Service</th>
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
                                myAppointment.map((appointment,index) => <MyAppointmentRow index={index} appointment={appointment} key={appointment._id}></MyAppointmentRow>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAppointment;