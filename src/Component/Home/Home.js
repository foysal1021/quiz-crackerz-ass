import React from 'react';
import Header from '../Header/Header';
import MainHeader from '../MainHeader/MainHeader';
import Topics from '../Topics/Topics';

const Home = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <Header></Header>
            <Topics></Topics>
        </div>
    );
};

export default Home;