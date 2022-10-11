import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';

const Topics = () => {
    const {status,data} = useLoaderData();
    return (
        <div className='d-lg-flex topic-container rounded container'>
            {
                data.map( topic => <Topic key={topic.id} topic={topic}> </Topic> )
            }
        </div>
    );
};

export default Topics;