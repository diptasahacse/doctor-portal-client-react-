import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(user)
    const menuItems = <>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/about'>About</Link> </li>
        <li> <Link to='/appointment'>Appointment</Link> </li>
        <li> <Link to='/reviews'>Review</Link> </li>
        <li> <Link to='/contact'>Contact</Link> </li>
        {
            user?.emailVerified && <li> <Link to='/dashboard'>Dashboard</Link> </li>
        }
        <li> {user?.emailVerified ? <button onClick={() => signOut(auth)} className="btn btn-active btn-ghost">Sign out</button> : <Link to='/login'>Login</Link>} </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className='font-semibold normal-case text-xl' to='/'>Doctors Portal</Link>
                {/* <a className="">Doctors Portal</a> */}
            </div>
            <div className="navbar-end hidden navbar-end lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <label htmlFor="my-dashboard-drawer" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>



        </div>
    );
};

export default Header;