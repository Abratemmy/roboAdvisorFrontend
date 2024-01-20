import React from 'react';
import './Footer.scss';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import bgElement from '../../Images/bgElement.png'

function Footer() {
    return (
        <div className='footerContainer'>
            <div className='image'>
                <img src={bgElement} alt="" />
            </div>
            <div className='container'>

                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='contentWrapperFirst'>
                            <div className='pageLogo'>Robo<span>Advisor</span></div>
                            <div className='text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                            <div className='socialUrl'>
                                <span><a href="https://github.com/Abratemmy/roboAdvisorFrontend"><FaGithub className='icon' /></a> </span>
                                <span><a href="https://www.linkedin.com/in/temitope-adeniyi-olasode-863a30141/"><FaLinkedinIn className='icon' /></a> </span>
                                <span><a href="https://facebook.com"><FaFacebookF className='icon' /></a> </span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='contentWrapper'>
                            <div className='footerTitle'>Quick Links</div>

                            <div className='footerLink'>
                                <span><NavLink className='footer-nav' to="/privacy_policy">Privacy Policy</NavLink> </span>
                                <span><NavLink className='footer-nav' to="/solutions">Solutions</NavLink> </span>
                                <span><NavLink className='footer-nav' to="/how_to_use">How to Use</NavLink> </span>
                                <span><NavLink className='footer-nav' to="/data_security">Data Security</NavLink> </span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='contentWrapper'>
                            <div className='footerTitle'>Other Pages</div>

                            <div className='footerLink'>
                                <span><NavLink className='footer-nav' to="/">Home</NavLink> </span>
                                <span><NavLink className='footer-nav' to="/about">About Us</NavLink> </span>
                                <span><NavLink className='footer-nav' to="/service">Services</NavLink> </span>
                                <span><NavLink className='footer-nav' to="/contact">Contact</NavLink> </span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className='contentWrapper'>
                            <div className='footerTitle'>Company</div>

                            <div className='contact'>
                                <div className='content'>
                                    <span><FaPhone className='icon' /> </span>
                                    <div className='title'>Phone Number
                                        <div className='text'>+2348038444774</div>
                                    </div>
                                </div>

                                <div className='content'>
                                    <span><FaEnvelope className='icon' /> </span>
                                    <div className='title'>Email Us
                                        <div className='text'><a href='mailto:temitopeopeyemi2016@gmail.com' target='_blank' rel='noreferrer'>support@trustfund.com</a></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer