import React from 'react';
import '../App.css'
import Hero from '../sections/Hero';
import About from "../sections/About";
import ServicesB from '../sections/ServicesB';
import ServicesA from '../sections/ServicesA';
import Services from '../sections/Services';
import Client from '../sections/Client';
import Project from '../sections/Project';
import Contact from '../sections/Contact';
const HomePage = () => {
  return (
    <>
    <Hero/>
    <About/>
    {/* <ServicesA /> */}
    <ServicesB />
    <Project />
    <Client />
    {/* <Services /> */}
    {/* <Project /> */}

    <Contact />

    </>
  );
};

export default HomePage;
