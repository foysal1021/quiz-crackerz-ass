import React, { useState } from 'react';
import Answer from '../Anaswer/Answer';
import './UIshowQuiz.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import Swal from 'sweetalert2';


const UIshowQuiz = ({Quizdata}) => {
    const {question,options,correctAnswer}=Quizdata;
    const clickEye = ()=> {
        Swal.fire(
            'Correct Answer is ',
            `${correctAnswer}`,
          )
    }

    return (
        <div className='  container border my-3 rounded p-4'>

            <div className=' text-center d-flex justify-content-between'>
                <div className=' col-11'><h5 className='fw-bold'> <span className=' text-info'>Quiz</span> : {question} </h5></div>
                <div onClick={ clickEye } className=' col-1'><EyeIcon className="eyeIcon"/></div>
                    
               
            </div>

            <div className=' row p-3'>
                { 
                    options.map( option => <Answer  correctAnswer={correctAnswer}  option={option}></Answer> )
                }
            </div>
        </div>
    );
};

export default UIshowQuiz;