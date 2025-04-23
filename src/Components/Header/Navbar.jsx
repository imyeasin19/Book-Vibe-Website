import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {

    const Links  = <div className='flex gap-4 items-center'>
         <Link to='/'><button className="btn btn-outline btn-accent">Home</button></Link>
        <Link to='/About'>Listed Books</Link>
        <Link>Pages to Read</Link>
    </div>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Links}
                        </ul>
                    </div>
                    <h1 className='text-3xl font-bold'>Book Vibe</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                <button className="btn btn-info">Sign in</button>
                <button className="btn btn-success">Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;