import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className=' d-lg-flex header-container container rounded my-2 border justify-content-between align-items-center'>
            <img className='' src='https://i.ibb.co/xSH5L3y/360-F-219905201-MHbx-G8-Hpmg9ag-Ans-Pf2-RPT7kb-EA5aw9m.jpg'></img>
            <h2 className='p-3 rounded text-white text-center'> Are You redy for Quiz?</h2>
            </div>
        </div>
    );
};

export default Header;