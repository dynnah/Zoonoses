import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjThree } from './data';

function Home() {
    return (
        <>
         <HeroSection {...homeObjThree} />    
        </>
    )
}

export default Home
