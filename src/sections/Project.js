import React,{useState,useEffect} from "react";
import { Route, Routes, Link } from "react-router-dom"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../App.css";

import Person from "../components/Person";
import {projects} from "../data"
import react from "../images/icons/react.png"
import ProjectCard from "../components/ProjectCard";
const Project = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false,
        autoplay:true,
        autoplaySpeed: 5000,
        verticalSwiping:true,
      
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };


  return (
    <section id="project-section" class="project">
 


<div class="project-container">
          <div class="container-fluid p-0" style={{height:'100%'}}>
            <div class="project-subcontainer row no-gutters align-items-center flex-wrap m-0 " style={{height:'100%',position:'relative'}}>

              <div className="col-md-12 heading-container " >
                <div className="heading">
                <h1 class="mb-4 mt-3">Our<span> Projects</span> </h1>

                </div>

              </div>

            <div style={{padding:'0% 2%',marginBottom:'8%'}} className="col-md-12">
                  <Slider {...settings}>

                  {projects.map((data, index) => (

<ProjectCard img={data.img} title={data.title} description={data.description} clientName={data.clientName}/>

))}


    </Slider>



                  </div>


            </div> 
            </div> 
             </div> 




    </section>
  );
};

export default Project;