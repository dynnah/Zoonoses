import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjThree } from './Data';

function Home() {
    return (
        <>
         <HeroSection {...homeObjThree} />    
        </>
    )
}

export default Home
