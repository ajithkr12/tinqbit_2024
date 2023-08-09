import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logoTL.png';
import team1 from "../images/team/team1.png"
const Person = (props) =>  {
  const {name,position,img} = props;
  return (
        <div className="col-md-2 col-sm-6 col-6 person-container" style={{}}>
            <img src={img} />
            <h2 style={{}}>{name}</h2>
            <p style={{}}>{position}</p>
        </div>
    
  );}
export default Person;