import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjFour } from './Data';

function Home() {
    return (
        <>
         <HeroSection {...homeObjFour} />    
        </>
    )
}

export default Home
