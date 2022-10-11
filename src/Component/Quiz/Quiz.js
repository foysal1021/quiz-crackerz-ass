import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';
const Quiz = ({quiz}) => {
    const {id,logo,name,total} = quiz;

    const startBtn = ()=>{
       console.log(id)
    }
    return (
        <div className='Quiz-info rounded border m-2 p-2'>
            <div><img className=' border rounded-4' src={logo}></img></div>
            <div className='  justify-content-between d-flex align-items-center'>
                <p className=' fw-bolder mt-3'> {name} </p>
                <p className=' fw-bolder mt-3'> {total} </p>
                <button onClick={startBtn} className=' btn bg-info '> <Link to={id}> Start Partis </Link> </button>
            </div>
        </div>
    );
};

export default Quiz;