import React from 'react';
import Carousel from '../components/Carousel';
import MovieList from '../components/MovieList';
import TVList from '../components/TVList';

const Home = () => {
    return (
        <div>
            < Carousel />
            < MovieList />
            < TVList />
        </div>
    );
};

export default Home;