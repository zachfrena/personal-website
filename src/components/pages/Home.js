import React from 'react';
import '../../App.css';
import About from '../About';
import Cards from '../Cards';
import TimeLine from '../TimeLine'
import HeroSection from '../HeroSection';
import Resume from '../Resume';

function Home(){

    return(
        <>
        <HeroSection />
        <About />
        <TimeLine/>
        <Resume/>
        <Cards />
        </>
    )
}

export default Home;