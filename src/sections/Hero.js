import React from "react";
import "../App.css";
import bgImg1 from "../images/bg_1.jpg";
const Hero = () => {
  return (
    <section id="hero-section" class="hero">
      <h3 class="vr">Welcome to DigiLab</h3>
      <div class="home-slider">
      <div class="slider-item ">
          <div class="container-fluid p-0">
            <div class="row no-gutters slider-text align-items-center flex-nowrap m-0">

              <div class="one-third order-md-last img " style={{ backgroundImage: `url("${bgImg1}")`,}}>
              
              </div>
              <div class="one-forth d-flex align-items-center ">
                <div class="text">
                  <span class="subheading">Welcome to the digilab</span>
                  <h1 class="mb-4 mt-3">
                    Small Details Make A Big <span>Impression</span>
                  </h1>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country.
                  </p>
                    <a href="www.google.com" class="btn btn-primary mt-3 btn">
                      Get in touch
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom__line"></div>
      </div>
    </section>
  );
};

export default Hero;
