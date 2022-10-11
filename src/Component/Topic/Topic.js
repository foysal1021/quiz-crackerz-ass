import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({topic}) => {


    const {id,logo,name,total} = topic;

    return (
        <div className='topic-info border p-3 m-2 rounded'>
            <div><img className='rounded bg-black' src={logo}></img></div>
            <div className='d-flex align-items-center justify-content-between py-2'>
                <p className='m-0 fw-bolder fs-5'> {name}</p>
                <p className='m-0 fw-bolder fs-5'> {total} </p>
                <button className='btn btn-warning fw-bold'> <Link to={`/Quiz/${id}`}> Start Quiz </Link>  </button>
            </div>
        </div>
    );
};

export default Topic;