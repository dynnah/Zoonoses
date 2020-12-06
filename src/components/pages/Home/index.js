import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './data';

function Home() {
    return (
        <>
         <HeroSection {...homeObjOne} />
         <HeroSection {...homeObjTwo} /> 
         <HeroSection {...homeObjThree} /> 
         <HeroSection {...homeObjFour} />    
        </>
    )
}

export default Home
