import React,{useState,useEffect} from "react";
import { Route, Routes, Link } from "react-router-dom"

import "../App.css";

import Person from "../components/Person";
import {team} from "../data"
const Team = () => {




  return (
    <section id="team-section" class="team">
 


<div class="team-container">
          <div class="container-fluid p-0" style={{height:'100%'}}>
            <div class="team-subcontainer row no-gutters align-items-center flex-wrap m-0 " >

              <div className="col-md-12 heading-container" >
              <h2 class="">Meet Our Team</h2>
                  <h1 class="mb-4 mt-3">
                    Small Details Make A Big <span>Impression</span>
                  </h1>

</div>

<div className="person-map-container row justify-content-center">
{team.map((data, index) => (

    <Person name={data.name} position={data.position} img={data.img}/>

    ))}



</div>



            </div> </div> </div> 




    </section>
  );
};

export default Team;