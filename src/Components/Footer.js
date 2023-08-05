import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footerMain">
                <button onClick={() => window.scrollTo(0, 0)}>
                    <i class="fa-solid fa-arrow-up"></i> Back To Top
                </button>
                <div className="logoSide">
                    <div className="logo logo-Foot">
                        <span className='verticalText'>The</span>
                        <h1> Siren</h1>
                    </div>
                    <p>The Siren is an informational website published on the World Wide Web for providing details of different category.</p>
                    <div className="socialIcons">
                        <i className="fa-brands fa-square-facebook fa-shake"></i>
                        <i className="fa-brands fa-square-twitter fa-spin"></i>
                        <i className="fa-brands fa-instagram fa-flip"></i>
                        <i className="fa-brands fa-youtube fa-beat"></i>
                    </div>
                </div>

                <div className="servRes">
                    <div className="services">
                        <h3>Services</h3>
                        <ul className='nav-menu-footer'>
                            <li className='nav-item-footer'><NavLink to="/" className='linkClass linkClass1'>Home</NavLink></li>
                            <li className='nav-item-footer'><NavLink to="/bollywood" className='linkClass linkClass1'>Bollywood</NavLink></li>
                            <li className='nav-item-footer'><NavLink to="/technology" className='linkClass linkClass1'>Technology</NavLink></li>
                            <li className='nav-item-footer'><NavLink to="/hollywood" className='linkClass linkClass1'>Hollywood</NavLink></li>
                            <li className='nav-item-footer'><NavLink to="/fitness" className='linkClass linkClass1'>Fitness</NavLink></li>
                            <li className='nav-item-footer'><NavLink to="/food" className='linkClass linkClass1'>Food</NavLink></li>
                        </ul>
                    </div>
                    <div className="resources">
                        <h3>Resources</h3>
                        <ul>
                            <li>Blog</li>
                            <li>Help Center</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
                <h2 className="ready">Get Ready to Enjoy on the Blog-Machine !!!</h2>
            </div>
        </>
    )
}

export default Footer