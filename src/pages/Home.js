import React from 'react';
import Carousel from '../components/Carousel';
import PopularMovieList from '../components/PopularMovieList';
import TopRatedMovieList from '../components/TopRatedMovieList';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';

const Home = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <Searchbar />
            <PopularMovieList />
            <TopRatedMovieList />
        </div>
    );
};

export default Home;