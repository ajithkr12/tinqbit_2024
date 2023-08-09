import React,{useState} from "react";
import "../App.css";
import bgImg1 from "../images/bg_2.jpg"
import iot from "../images/services/iot.jpg"
import icon from "../icons/facebook.png"
import { services } from '../data';

const ServicesA = () => {
  const [activeDiv, setActiveDiv] = useState(1);
  const handleButtonClick = (divNumber) => {
    setActiveDiv(divNumber);
  };

  return (
    <section id="services-section" class="services">
            {/* <div class="services-container"> */}

      <div className="container m-0 p-0" style={{maxWidth:'3200px'}}>
        <div className="row m-0 p-0">

        {/* <div className="col-md-12 service-heading">
            <h1>Our Services</h1>
        </div> */}

        <div className="col-md-12 p-0 flex-nowrap m-0" style={{display:'flex',flexDirection:"row-reverse"}}>
        <div className="col-md-6"style={{display:'flex',flexWrap:"wrap",justifyContent:'center',alignItems:'center',padding:'48px 16px',}}>

        {services.map((data, index) => (

          <div className="col-md-4" style={{padding:'8px 0px',display:'flex',justifyContent:'center',alignItems:'center'}} onMouseEnter={() => handleButtonClick(index+1)}>
          <div className="" style={{backgroundColor: index % 2 === 0 ? '#A2DFF2' : '#A2DFF2', padding:'16px',borderRadius:'8px',width:'96%',height:'240px'}}>
            <img src={data.icon} style={{width:'60px',marginBottom:"8px"}}/>
            <h2 style={{fontWeight:400,margin:'0px',lineHeight:'40px',fontSize:'22px'}}>{data.title} </h2>
            <div style={{display:'flex',flexWrap:"wrap"}}>
            {data.tech.map((items, index) => (

              <div style={{backgroundColor:'#FFFFFF',margin:'2px 3px 2px 0px',borderRadius:"4px"}}>
                <p style={{margin:'2px 10px',fontSize:'16px'}}>{items}</p>
              </div>
        ))}

            </div>

          </div>
          </div>

        ))}


        </div>

        {/* <div className="col-md-2 p-0">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link px-4" id="v-pills-1-tab" onMouseEnter={() => handleButtonClick(1)}><span class="mr-3 flaticon-ideas"></span> Business Strategy</a>
                <a class="nav-link px-4" id="v-pills-2-tab" onMouseEnter={() => handleButtonClick(2)}><span class="mr-3 flaticon-flasks"></span> Research</a>
                <a class="nav-link px-4" id="v-pills-3-tab" onMouseEnter={() => handleButtonClick(3)}><span class="mr-3 flaticon-analysis"></span> Data Analysis</a>
                <a class="nav-link px-4" id="v-pills-4-tab" onMouseEnter={() => handleButtonClick(4)}><span class="mr-3 flaticon-web-design"></span> UI Design</a>
                <a class="nav-link px-4" id="v-pills-4-tab" onMouseEnter={() => handleButtonClick(5)}><span class="mr-3 flaticon-ux-design"></span> Ux Design</a>
                <a class="nav-link px-4" id="v-pills-5-tab" onMouseEnter={() => handleButtonClick(6)}><span class="mr-3 flaticon-innovation"></span> Technology</a>
                <a class="nav-link px-4" id="v-pills-6-tab" onMouseEnter={() => handleButtonClick(7)}><span class="mr-3 flaticon-idea"></span> Creative</a>
              </div>

          </div> */}
<div className="col-md-6" style={{padding:'48px 0px'}}>

          {services.map((data, index) => (

          <div className= {`${activeDiv === index+1 ? 'service-details' : 'service-details-hide'}`} style={{ backgroundImage: `url("${data.img}")`,height:'100%'}}>
            {/* <h2>{data.title}</h2>
            <p>{data.description}</p> */}
              <h2  style={{fontWeight:600,fontSize:'64px'}}>Our Services</h2>
              <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. VPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

          </div>

      ))}
          </div>



</div>
        </div>

      </div>

      {/* </div> */}

    </section>
  );
};

export default ServicesA;
