import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjFour } from './data';

function Home() {
    return (
        <>
         <HeroSection {...homeObjFour} />    
        </>
    )
}

export default Home
