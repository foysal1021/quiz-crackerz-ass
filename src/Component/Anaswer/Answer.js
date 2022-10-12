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
        <div className=' col-6'>
            <label className=''>
            <input  onClick={ ()=> click(option) } type="radio" value="Male" name="gender" /> {option}
            </label>

        </div>
    );
};

export default Answer;