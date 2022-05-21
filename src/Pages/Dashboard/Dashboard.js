import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="my-dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-slate-300 p-10">
                {/* <!-- Page content here --> */}
                {/* <h2 className='text-3xl font-bold'>Hello <span className='text-primary'>{user.displayName}</span>, Welcome in your Dashboard</h2> */}
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='/dashboard/myreview'>My Review</Link></li>
                    <li><Link to='/dashboard/myhistory'>My History</Link></li>
                    <li><Link to='/dashboard/allusers'>All Users</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;