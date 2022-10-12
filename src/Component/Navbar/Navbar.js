import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className=' container justify-content-between align-items-center rounded bg-dark text-light py-4 d-lg-flex '>
            <div className='mb-3'> <h2 className=' m-0 text-center'> Programming Quiz </h2>  </div>
            <div className='nav-items'>
                <Link to='/'> Home </Link>
                <Link to='topics'> Topics </Link>
                <Link to='statistics'> Statistics </Link>
                <Link to='blog'> Blog </Link>
            </div>
        </nav>
    );
};

export default Navbar;