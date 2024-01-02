import React, { Suspense } from 'react';
const Carousel = React.lazy(() => import('../components/Carousel'));
const PopularMovieList = React.lazy(() => import('../components/PopularMovieList'));
const TopRatedMovieList = React.lazy(() => import('../components/TopRatedMovieList'));
const Header = React.lazy(() => import('../components/Header'));
const Searchbar = React.lazy(() => import('../components/Searchbar'));
const Footer = React.lazy(() => import('../components/Footer'));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Carousel />
        <Searchbar />
        <PopularMovieList />
        <TopRatedMovieList />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
