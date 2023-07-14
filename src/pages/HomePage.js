import React from 'react';
import '../App.css'
import Hero from '../sections/Hero';
import About from "../sections/About";
import Services from '../sections/Services';
const HomePage = () => {
  return (
    <>
    <Hero/>
    <Services />
    <About/>

    </>
  );
};

export default HomePage;
