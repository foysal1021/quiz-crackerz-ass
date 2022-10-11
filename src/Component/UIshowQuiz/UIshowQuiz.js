import React from 'react';
import Answer from '../Anaswer/Answer';
import './UIshowQuiz.css';

const UIshowQuiz = ({Quizdata}) => {
    const {question,options}=Quizdata;
    console.log(Quizdata)

    return (
        <div className='  w-50 container border my-3 rounded p-4'>

            <div className=' text-center d-flex justify-content-between'>
                <h5 className='fw-bold'> <span className=' text-info'>Quiz</span> : {question} </h5>
                <h5> eya</h5>
            </div>

            <div className=' row '>
                { 
                    options.map( option => <Answer   option={option}></Answer> )
                }
            </div>
        </div>
    );
};

export default UIshowQuiz;