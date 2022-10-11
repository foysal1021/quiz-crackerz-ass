import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';
import './Home.css';

const Home = () => {
    const {status,data} = useLoaderData();
    console.log(data)
    return (
        <div>
            <Header></Header>
            <div className='Quiz-container container rounded d-flex'>
            {
                data.map( quiz => <Quiz quiz={quiz} key={quiz.id}></Quiz> )
            }
            </div>
        </div>
    );
};

export default Home;