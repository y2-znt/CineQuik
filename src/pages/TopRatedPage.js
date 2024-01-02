import React, { Suspense } from 'react';

const Header = React.lazy(() => import('../components/Header'));
const Searchbar = React.lazy(() => import('../components/Searchbar'));
const TopRatedMovieList = React.lazy(() => import('../components/TopRatedMovieList'));
const Footer = React.lazy(() => import('../components/Footer'));

const TopRatedPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <Searchbar />
                <TopRatedMovieList />
                <Footer />
            </Suspense>
        </div>
    );
};

export default TopRatedPage;
