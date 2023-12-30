import React from 'react';
import TopRatedMovieList from '../components/TopRatedMovieList';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';

const TopRatedPage = () => {
    return (
        <div>
            <Header />
            <Searchbar />
            <TopRatedMovieList />
            <Footer />
        </div>
    );
};

export default TopRatedPage;