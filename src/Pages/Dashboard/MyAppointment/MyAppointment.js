import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import MyAppointmentRow from './MyAppointmentRow/MyAppointmentRow';


const MyAppointment = () => {
    const [user, loading] = useAuthState(auth);
    const [myAppointment, setMyAppointment] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://pacific-dawn-42363.herokuapp.com/treatmentbooking?patientEmail=${user.email}`, {
            method: "GET",
            headers: { 'authorization': `Bearer ${localStorage.getItem('accessToken')}` },
            body: JSON.stringify()

        })
            .then(res => {
                // console.log(res)
                if (res.status === 401 || res.status === 403) {

                    // If forbidden and unauthorized token
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    navigate('/')

                }
                return res.json()
            })
            .then(data => {
                // console.log(data)
                setMyAppointment(data)
            })

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