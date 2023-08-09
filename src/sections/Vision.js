import React,{useState,useEffect} from "react";
import { Route, Routes, Link } from "react-router-dom"

import "../App.css";
import { FiStar } from 'react-icons/fi'; // Example icon from react-icons library
import bgImg1 from "../images/bg_1.jpg";
import vision from "../icons/web.png"

const Vision = () => {




  return (
    <section id="vision-section" class="vision">
 


<div class="vision-container">
          <div class="container-fluid p-0" style={{height:'100%'}}>
            <div class="vision-subcontainer row no-gutters align-items-center flex-wrap m-0 " >

              {/* <div className="col-md-12 heading-container" >
              <span class="subheading">Welcome to the digilab</span>
                  <h1 class="mb-4 mt-3">
                    Small Details Make A Big <span>Impression</span>
                  </h1>

</div> */}
<div className="col-md-5 heading-container" >
                  <h1 class="mb-4 mt-3" style={{fontSize:'120px'}}>
                    Vision & <br/> &nbsp; &nbsp; Mission
                  </h1>

</div>
{/* style={{ backgroundImage: `url("${bgImg1}")`,}} */}
<div className="col-md-7 description-container" > 
<div className="col-md-5 description-subcontainer des-mb" >
{/* <img src={vision} style={{width:'60px',marginBottom:"8px"}}/> */}

<h1>Vision</h1>
<p>                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country.</p>

</div>
<div className="col-md-5 description-subcontainer des-mt" >
<h1>Mission</h1>
<p>                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country.</p>
</div>

</div>



            </div> </div> </div> 




    </section>
  );
};

export default Vision;