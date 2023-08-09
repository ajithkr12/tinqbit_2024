import React from "react";
import {useForm }from "react-hook-form";

import Slider from "react-slick";
import react from "../images/icons/react.png"
import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { MdLocationPin} from 'react-icons/md';


import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import "../pages/Test.css"

const Contact = () => {
  const {register,handleSubmit,formState: { errors },} = useForm();


  return (
    <section id="contact-section" class="contact">
      <div className="contact-container">
        <div className="row m-0 p-0">
          <div className="col-lg-6 col-md-6 col-sm-12 contact-info-container" >
            <div className="contact-title-container">
              <h1>Get a Quote</h1>
              <p>dd lorem ipsum text fast to a page with this lorem ipsum HTML generator for paragraphs, <br/>ordered lists, unordered lists, and more!</p>
            </div>
            <div className="contact-details-container">
                <div className="contact-widget-block">
                    <BiSolidPhoneCall className="icon"/>
                    <p>+919495993895</p>
                </div>
                <div className="contact-widget-block">
                    <MdEmail className="icon"/>
                    <p>tinqbit@gmail.com</p>
                </div>
                <div className="contact-widget-block">
                    <MdLocationPin className="icon"/>
                    <p>Room No B206 Department of EI CE kidangoor</p>
                </div>
            </div>
            <div className="contact-social-container">
              <div className="social-icons" style={{justifyContent:"space-between",display:'flex',alignItems:"flex-start"}}>
                <BiLogoTwitter className="social-icon"/>
                <BiLogoFacebook className="social-icon"/>
                <BiLogoInstagram className="social-icon"/>
                <BiLogoLinkedin className="social-icon"/>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 contact-form-container">
          <div className="contact-form">
                        <h3 className="form-title">Leave a message here</h3>
                        <form className="form" onSubmit={handleSubmit((data) => console.log(data))}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Name" {...register('Name', { required: true,minLength: 2})} />
                                        {errors.Name && errors.Name.type === "required" && <p className="red">Name is required.</p>}
                                        {errors.Name && errors.Name.type === "minLength" && (<p className="red">Your name must be at least 2 characters.</p>)}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Email" {...register('email', { required: true,pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} />
                                        {errors.email && errors.email.type === "required" && <p className="red">Email is required.</p>}
                                        {errors.email && errors.email.type === "pattern" && (<p className="red">Invalid Email Address</p>)}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Subject" {...register('subject', { required: true,maxLength:50})} />
                                        {errors.subject && errors.subject.type === "required" && <p className="red">Subject is required.</p>}
                                        {errors.subject && errors.subject.type === "maxLength" && (<p className="red">more content</p>)}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="form-group">
                                        <input type="tel" placeholder="Mobile Number" {...register('Mobile', { required: true,minLength: 6, maxLength: 12})} />
                                        {errors.Mobile && errors.Mobile.type === "required" && <p className="red">Mobile is required.</p>}
                                        {errors.Mobile && errors.Mobile.type === "minLength" && errors.Mobile.type === "maxLength" &&(<p className="red">Invalid Mobile Number</p>)}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Message" id="message-area"{...register('message', { required: true})}/>
                                        {errors.message && errors.message.type === "required" && <p className="red">Message is required.</p>}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="button">
                                        <button type="submit" className="btn ">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
