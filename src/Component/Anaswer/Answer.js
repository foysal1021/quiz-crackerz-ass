import React from 'react';
import './Answer.css';
const Answer = (props) => {
    return (
        <div className=' col-6'>
            <div  className='text-center answer-info my-1 p-3 rounded'>
            {props.option}
            </div>
        </div>
    );
};

export default Answer;