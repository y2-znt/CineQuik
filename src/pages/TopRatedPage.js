import React from 'react';
import TopRatedMovieList from '../components/TopRatedMovieList';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';

const TopRatedPage = () => {
    return (
        <div>
            <Header />
            <Searchbar />
            <TopRatedMovieList />
        </div>
    );
};

export default TopRatedPage;