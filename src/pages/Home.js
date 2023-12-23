import React from 'react';
import DataFetcher from '../components/Carousel';
import MovieList from '../components/MovieList';
import TVList from '../components/TVList';

const Home = () => {
    return (
        <div>
            < DataFetcher />
            < MovieList />
            < TVList />
        </div>
    );
};

export default Home;