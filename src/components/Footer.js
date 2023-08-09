import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logoTL.png';

const Footer = () =>  {
  return (
    <footer className="footer section">
        <div className="footer-top">
            <div className="container-fluid">
                <div className="inner-content">
                    <div className="row">

                        <div className="col-lg-9 col-md-6 col-12">
                            <div className="single-footer f-about">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={Logo}alt="#"/>
                                    </Link>
                                </div>
                            </div>
                           
                        </div>


                        <div className="col-lg-3 col-md-6 col-12">
                           
                            <div className="single-footer f-about">
                                <ul className="social" style={{justifyContent:"space-between",display:'flex'}}>
                                    <li><a href="https://www.tinqbit.com/"><i className="bi bi-facebook"></i></a></li>
                                    <li><a href="https://www.tinqbit.com/"><i className="bi bi-instagram"></i></a></li>
                                    <li><a href="https://www.tinqbit.com/"><i className="bi bi-twitter"></i></a></li>
                                    <li><a href="https://www.tinqbit.com/"><i className="bi bi-linkedin"></i></a></li>
                                    <li><a href="https://www.tinqbit.com/"><i className="bi bi-youtube"></i></a></li>
                                </ul>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container-fluid">
                <div className="inner-content">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <p className="copyright-text">© 2023 tinQbit - All Rights Reserved</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <p className="copyright-owner">Designed and Developed by <a href="https://www.tinqbit.com/"rel="nofollow" target="_blank">tinQbit</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );}
export default Footer;