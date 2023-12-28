import React from 'react';
import Carousel from '../components/Carousel';
import MovieList from '../components/MovieList';
import TVList from '../components/TVList';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';

const Home = () => {
    return (
        <div>
            <Header />
            < Carousel />
            < Searchbar />
            < MovieList />
            < TVList />
        </div>
    );
};

export default Home;