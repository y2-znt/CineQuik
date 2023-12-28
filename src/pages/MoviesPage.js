import React from 'react';
import MovieList from '../components/MovieList';
import Searchbar from '../components/Searchbar';
import Header from '../components/Header';

const MoviesPage = () => {
    return (
        <div>
            <Header />
            <Searchbar />
            < MovieList />
        </div>
    );
};

export default MoviesPage;
