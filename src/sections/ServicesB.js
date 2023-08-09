import React,{useState} from "react";
import "../App.css";
import bgImg1 from "../images/bg_2.jpg"
import iot from "../images/services/iot.jpg"
import icon from "../icons/facebook.png"
import { services } from '../data';

const ServicesB = () => {
  const [activeDiv, setActiveDiv] = useState(1);
  const handleButtonClick = (divNumber) => {
    setActiveDiv(divNumber);
  };

  return (
    <section id="services-section" class="services">
      <div className="container m-0 p-0" style={{maxWidth:'3200px'}}>
        <div className="row m-0 p-0">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-4" style={{padding:'48px 24px 48px 24px',backgroundColor:'white',display:'flex',justifyContent:'center'}}>

            <div className= "service-details" style={{ height:'100%',width:'100%'}}>
                <div className="" style={{display:'flex',flexDirection:'column',width:'100%',}}> 
                  <h2 className="" style={{fontWeight:'400',fontSize:'100px',lineHeight:'100px',color:'#000000'}}> Our </h2>
                  <h2 className=""style={{fontWeight:'600',fontSize:"100px",lineHeight:'100px',color:'#000000'}}> Services</h2>        
                </div>
                <p style={{color:'#000000'}}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. VPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </div>

          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-8"style={{display:'flex',flexWrap:"wrap",justifyContent:'center',alignItems:'center',padding:'40px 16px',}}>

            {services.map((data, index) => (

              <div className="col-md-6 col-sm-12" style={{padding:'8px 0px',display:'flex',justifyContent:'center',alignItems:'center'}} >
              <div className="service-details" style={{backgroundImage: `url("${data.img}")`, padding:'16px',borderRadius:'8px',width:'96%',height:'220px'}}>
                <h2 style={{fontWeight:400,margin:'0px',lineHeight:'40px',fontSize:'32px'}}>{data.title} </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt eu risus vitae pellentesque.</p>
              </div>
              </div>

            ))}

          </div>


        </div>

      </div>


    </section>
  );
};

export default ServicesB;
