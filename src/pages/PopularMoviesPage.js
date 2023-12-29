import React from 'react';
import PopularMovieList from '../components/PopularMovieList';
import Searchbar from '../components/Searchbar';
import Header from '../components/Header';

const MoviesPage = () => {
    return (
        <div>
            <Header />
            <Searchbar />
            <PopularMovieList />
        </div>
    );
};

export default MoviesPage;
