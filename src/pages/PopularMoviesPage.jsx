import React from 'react';
import PopularMovieList from '../components/PopularMovieList';
import Searchbar from '../components/Searchbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MoviesPage = () => {
    return (
        <div>
            <Header />
            <Searchbar />
            <PopularMovieList />
            <Footer />
        </div>
    );
};

export default MoviesPage;
