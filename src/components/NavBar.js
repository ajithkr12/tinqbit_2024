import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../images/logoTD.png';
import twitter from '../icons/twitter.png';
import facebook from '../icons/facebook.png';
import instagram from '../icons/instagram.png';
import linkedin from '../icons/linkedin.png';


const NavBar = () =>  {
 
	const [open, setOpen] = useState(false);
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)



  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<div className="navarea">
			<nav className={navbar ? "navbar-active" : "navbar"}>
				<Link to="/" className="nav-logo">
					<img src={Logo} alt="Logo"/>
				</Link>
				<div onClick={handleClick} className="nav-icon">
					{open ? <FiX /> : <FiMenu />}
				</div>
				<ul className={open ? 'nav-links active' : 'nav-links'}>
					<li className="nav-item">
						<a href="#hero-section" className="nav-link" onClick={closeMenu}>
							Home
						</a>
					</li>
					<li className="nav-item">
						<Link to="/about" className="nav-link" onClick={closeMenu}>
							About
						</Link>
					</li>
					<li className="nav-item">
						<a href="#services-section" className="nav-link" onClick={closeMenu}>
							Services
						</a>
					</li>
					<li className="nav-item">
						<Link to="/projects" className="nav-link" onClick={closeMenu}>
							Projects
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/blogs" className="nav-link" onClick={closeMenu}>
							Blogs
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact" className="nav-link" onClick={closeMenu}>
							Contact
						</Link>
					</li>
				</ul>


				{/* <ul className={open ? 'nav-links-social active' : 'nav-links-social'} style={{marginRight:'2rem'}}>
					<li className="nav-item-social">
						<Link to="https://www.google.com/" className="nav-link-social" onClick={closeMenu}>
                            <img src={instagram} alt="Social" className="nav-social-icon"/>
						</Link>
					</li>
					<li className="nav-item-social">
						<Link to="https://www.google.com/" className="nav-link-social" onClick={closeMenu}>
                        <img src={twitter} alt="Social" className="nav-social-icon"/>
						</Link>
					</li>
					<li className="nav-item-social">
						<Link to="https://www.google.com/" className="nav-link-social" onClick={closeMenu}>
                        <img src={facebook} alt="Social" className="nav-social-icon"/>
						</Link>
					</li>
					<li className="nav-item-social">
						<Link to="https://www.google.com/" className="nav-link-social" onClick={closeMenu}>
                        <img src={linkedin} alt="Social" className="nav-social-icon"/>
						</Link>
					</li>
				</ul> */}
				{/* <div className='dummy'>

				</div> */}


			</nav>
		</div>
  	);}
export default NavBar;