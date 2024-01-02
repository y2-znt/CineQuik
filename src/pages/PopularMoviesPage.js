import React, { Suspense } from 'react';

const Header = React.lazy(() => import('../components/Header'));
const Searchbar = React.lazy(() => import('../components/Searchbar'));
const PopularMovieList = React.lazy(() => import('../components/PopularMovieList'));
const Footer = React.lazy(() => import('../components/Footer'));

const MoviesPage = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <Searchbar />
                <PopularMovieList />
                <Footer />
            </Suspense>
        </div>
    );
};

export default MoviesPage;
