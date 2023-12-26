import React from 'react';
import Carousel from '../components/Carousel';
import MovieList from '../components/MovieList';
import TVList from '../components/TVList';
import Searchbar from '../components/Searchbar';

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