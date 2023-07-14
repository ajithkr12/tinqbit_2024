import React,{useState} from "react";
import "../App.css";
import bgImg1 from "../images/bg_2.jpg"
import iot from "../images/services/iot.jpg"
import { services } from '../data';

const Services = () => {
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

        <div className="col-md-12 p-0 flex-nowrap m-0" style={{display:'flex',flexDirection:'row'}}>
        <div className="col-md-3 p-0 service-heading">
        <h1 style={{fontWeight:400}}>Our </h1>
        <h1 style={{fontWeight:600}}>Services</h1>

        </div>

        <div className="col-md-2 p-0">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a class="nav-link px-4" id="v-pills-1-tab" onMouseEnter={() => handleButtonClick(1)}><span class="mr-3 flaticon-ideas"></span> Business Strategy</a>
                <a class="nav-link px-4" id="v-pills-2-tab" onMouseEnter={() => handleButtonClick(2)}><span class="mr-3 flaticon-flasks"></span> Research</a>
                <a class="nav-link px-4" id="v-pills-3-tab" onMouseEnter={() => handleButtonClick(3)}><span class="mr-3 flaticon-analysis"></span> Data Analysis</a>
                <a class="nav-link px-4" id="v-pills-4-tab" onMouseEnter={() => handleButtonClick(4)}><span class="mr-3 flaticon-web-design"></span> UI Design</a>
                <a class="nav-link px-4" id="v-pills-4-tab" onMouseEnter={() => handleButtonClick(5)}><span class="mr-3 flaticon-ux-design"></span> Ux Design</a>
                <a class="nav-link px-4" id="v-pills-5-tab" onMouseEnter={() => handleButtonClick(6)}><span class="mr-3 flaticon-innovation"></span> Technology</a>
                <a class="nav-link px-4" id="v-pills-6-tab" onMouseEnter={() => handleButtonClick(7)}><span class="mr-3 flaticon-idea"></span> Creative</a>
              </div>
          </div>

          {services.map((data, index) => (


          <div className= {`col-md-7  ${activeDiv === index+1 ? 'service-details' : 'service-details-hide'}`} style={{ backgroundImage: `url("${data.img}")`}}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
      ))}

</div>
        </div>

      </div>
      <div class="top__line"></div>

      <div class="bottom__line"></div>

      {/* </div> */}

    </section>
  );
};

export default Services;
