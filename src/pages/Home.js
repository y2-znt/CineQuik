import React from 'react';
import Carousel from '../components/Carousel';
import PopularMovieList from '../components/PopularMovieList';
import TopRatedMovieList from '../components/TopRatedMovieList';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <Searchbar />
            <PopularMovieList />
            <TopRatedMovieList />
            <Footer />
        </div>
    );
};

export default Home;