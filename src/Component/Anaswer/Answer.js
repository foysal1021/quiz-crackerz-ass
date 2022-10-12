import React, { useState } from 'react';
import './Answer.css';
import Swal from 'sweetalert2';

const Answer = (props) => {
    const {option,correctAnswer}=props;

    let optonValue;
    const click = (rcv)=> {
        optonValue=rcv;
        if(correctAnswer===optonValue){
            Swal.fire(
                'Good job!',
                'corret Answer!',
                'success'
              )
        }else{
            Swal.fire({
                icon: 'error',
                text: 'incorret',
    
              })
        }
    }

    return (
        <div className=' col-6 text-center'>
            <div className=' bg-warning m-1 p-3 rounded'>
            <label className=''>
            <input  onClick={ ()=> click(option) } type="radio" value="Male" name="gender" /> {option}
            </label>
            </div>
        </div>
    );
};

export default Answer;