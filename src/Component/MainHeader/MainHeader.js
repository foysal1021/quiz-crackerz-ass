import React from 'react';
import { Link } from 'react-router-dom';
import './MainHeader.css';

const MainHeader = () => {
    return (
        <div className='Main-header container d-lg-flex  p-0 my-3 rounded  justify-content-between align-items-center'>

            <div className=' text-center py-2 text-lg-start ms-3'>
                <h3> Esy Learn </h3>
                <h3> Devlop you programming skill </h3>
                <button className=' btn btn-warning fw-bold'> <Link to='/topics'> Start Quiz </Link> </button>
            </div>

            <div>
                <img className=' rounded' src='https://i.ibb.co/4s3GThD/pexels-christina-morillo-1181263.jpg'></img>
            </div>

        </div>
    );
};

export default MainHeader;