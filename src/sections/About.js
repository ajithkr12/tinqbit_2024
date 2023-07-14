import React,{useState,useEffect} from "react";
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
          <div class="container-fluid p-0">
            <div class="row no-gutters align-items-center flex-nowrap m-0">
              <div className="col-md-6 " >
                <h2>The flex items are laid out in a single line which may cause the flex container to overflow. The cross-start is either equivalent to start or before depending on the flex-direction value. This is the default value.</h2>

              </div>

              <div className="col-md-6">
              <h2>The flex items are laid out in a single line which may cause the flex container to overflow. The cross-start is either equivalent to start or before depending on the flex-direction value. This is the default value.</h2>

</div>

            </div> </div> </div> 

      <div class="top__line"></div>

    </section>
  );
};

export default About;
