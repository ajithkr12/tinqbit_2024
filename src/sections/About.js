import React,{useState,useEffect} from "react";
import { Route, Routes, Link } from "react-router-dom"

import "../App.css";
import { FiStar } from 'react-icons/fi'; // Example icon from react-icons library
import bgImg1 from "../images/bg_1.jpg";


const About = () => {




  return (
    <section id="about-section" class="about">
    {/* <div className="about-container">
      {iconPosition.map((data,index) => {

        const iconStyle = { top: `${data.top}%`, left: `${data.left}%` };
        return (
          <div key={index} className="icon-container" style={iconStyle}>
            <img src={data.icon} className="icon"/>
          </div>
        );
})}
    </div> */}


<div class="about-container">
          <div class="container-fluid p-0" style={{height:'100%'}}>
            <div class="about-subcontainer row no-gutters align-items-center flex-wrap m-0 ">
              {/* <div class="first-one col-md-3" >
                <h2 style={{fontSize:'80px',fontWeight:'400',marginLeft:'4%'}}> Us</h2>
                <h2 style={{fontSize:'80px',fontWeight:'600',marginLeft:'4%'}}>About</h2>


              </div> */}

              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 second-container" >
              <span class="subheading">Welcome to the digilab</span>
                  <h1 class="mb-4 mt-3">
                    Small Details Make A Big <span>Impression</span>
                  </h1>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country.A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.




                  </p>
                  <Link to="/about">

                    <a class="btn btn-primary mt-3 btn">
                      Read More
                    </a>
                    </Link>
</div>

            </div> </div> </div> 

      <div class="dark-line-top"></div>
      <div class="dark-line-bottom"></div>


    </section>
  );
};

export default About;
