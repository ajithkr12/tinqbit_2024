import React,{useState,useEffect} from "react";
import { Route, Routes, Link } from "react-router-dom"

import "../App.css";

import Person from "../components/Person";
import {clients} from "../data"
import react from "../images/icons/react.png"
import ClientCard from "../components/ClientCard";

const Client = () => {

  return (

<div className="m-0 p-0 client">
      <div className="row client-container" >

        {/* <div className="col-md-12 col-sm-12 tittle-container" >  */}
          {/* <h2 className="light-blue" style={{fontWeight:'400'}}> Our</h2>
          <h2 className="dark-blue"style={{fontWeight:'600'}}> Clients</h2>         */}
                  {/* <h2 class="">Meet Our Team</h2> */}
                  {/* <h1 class="mb-4 mt-3">Small Details Make A Big <span>Impression</span></h1> */}
        {/* </div> */}

        <div className="col-md-12 col-sm-12 client-logo-container" >
        <div className="row client-logo-subcontainer p-0 m-0" >
 
        {clients.map((data, index) => (

<ClientCard img={data.img}/>

))}



        </div>
        </div>

        {/* Add more images here */}
      </div>
    </div>

  );
};

export default Client;