import React, { useState } from 'react';
import "./Navbar.scss";
import { NavLink } from 'react-router-dom';
import { MdClose } from "react-icons/md"
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-scroll';

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);

    const [scrolled, setScrolled] = useState(false);
    const changeBackground = () => {
        // the 200 below means where you want the background to change when scroll
        // it is advisable to put the background at the height of the navbar
        if (window.scrollY >= 300) {
            setScrolled(true);
        } else {
            setScrolled(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <div>
            <div className={scrolled ? 'navbar scrolled' : 'navbar'}>
                <div className="container">
                    <div className='navbar-container'>
                        <NavLink to="/" exact style={{ textDecoration: 'none' }}>
                            <div className='pageLogo'>Robo<span>Advisor</span></div>
                        </NavLink>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink to="/" exact className="nav-link" onClick={handleClick}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" onClick={handleClick}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/bond" className="nav-link" onClick={handleClick}>Bond</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to="/automated" className="nav-link" onClick={handleClick}>Investing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" onClick={handleClick}>Contact</NavLink>
                            </li>

                        </ul>

                        <div className='rightHanded'>
                            <div className="nav-icon" onClick={handleClick}>
                                {click === true ? <div>
                                    <span className="" onClick={handleClick} > <MdClose className="nav-cancel" />   </span>
                                </div> : <div>
                                    <span className="" onClick={handleClick} > <AiOutlineMenu />   </span>
                                </div>
                                }
                            </div>
                            <div className='navButton'>
                                <Link to='riskTolerance' activeClassName="active" smooth={true} offset={-50} duration={300} className="pageButton">Risk Tolerance</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar 