import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UIshowQuiz from '../UIshowQuiz/UIshowQuiz';


const ShowQuiz = () => {
const {data} = useLoaderData();
// console.log(data.questions)
    return (
        <div className='Quiz-container'>
            {
                data.questions.map( Quizdata => <UIshowQuiz Quizdata={Quizdata} key={Quizdata.id}></UIshowQuiz> )
            }
        </div>
    );
};

export default ShowQuiz;