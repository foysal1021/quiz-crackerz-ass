import React, { useState } from 'react';
import './Answer.css';
import Swal from 'sweetalert2';

const Answer = (props) => {
    const {option,correctAnswer}=props;
    // ()=> setOption(option)
    const [Answer,setAnswer] = useState([]);
    console.log(Answer)

        if(correctAnswer ===  Answer){
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


    return (
        <div className=' col-6'>

            <label >
            <input onClick={ ()=>  setAnswer(option) } type="radio" value="Male" name="gender" /> {option}
            </label>

        </div>
    );
};

export default Answer;