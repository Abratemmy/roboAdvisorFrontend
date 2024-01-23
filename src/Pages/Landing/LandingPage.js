import React from 'react';
import './LandingPage.scss';
import newclient from '../../Images/newclients.png';
import bgElement from '../../Images/bgElement.png'
import phone1 from '../../Images/phone1.png';
import card1 from '../../Images/card1.png';
import card2 from '../../Images/card2.png';
import card3 from '../../Images/card3.png';
import card4 from '../../Images/card4.png';
import Banner from '../../Components/HomeBanner/Banner';
import RiskTolerance from '../../Components/RiskTolerance/RiskTolerance';
import { MdSafetyCheck, MdOutlineAssignmentReturn, MdOutlineScubaDiving, MdOutlinePlaylistAddCheckCircle, MdMoney } from "react-icons/md";
import { FaCcMastercard, FaCcVisa, FaCcPaypal, FaCcStripe } from "react-icons/fa";
import payment from '../../Images/payment.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';

function LandingPage() {
    return (
        <div className=''>
            <div className='LandingPageContainer'>
                <div className='container'>
                    <div className='wrapper'>
                        <div className='leftSide'>
                            <div className='bgImage'>
                                <img src={bgElement} alt="" />
                            </div>
                            <div className='pageTitle'>
                                The better way to <span>invest and grow</span> your money
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            <div className='last'>
                                <div className=''>
                                    <Link to='riskTolerance' className='pageButton' activeClassName="active" smooth={true} offset={-50} duration={300}>Get Started</Link>
                                </div>
                                <div className='image'>
                                    <img src={newclient} alt="" />
                                    <div className='text'>25k+ Active Users</div>
                                </div>
                            </div>

                        </div>

                        <div className='rightSide'>
                            <img src={card4} alt="" className='card2' />
                            <div className='top'>
                                <img className='card1' src={card1} alt="" />
                            </div>
                            <div className='phone'>
                                <img src={phone1} alt='' />
                            </div>
                            <div className="card3 ">
                                <img src={card3} alt='' className='animate__animated animate__backInLeft' />
                            </div>
                            <div className='card4'>
                                <img src={card2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* another section starts here */}
            <Banner />
            <RiskTolerance />

            {/* another section starts here */}
            <div className='WhyUsContainer'>
                <div className='container'>
                    <div className='title'>Why <span>RoboAdvisor?</span></div>
                    <div className='text'>Robo Advisor provides a secure platform for investors to grow their money with peace of mind through safe, high-yield investments.</div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='content'>
                                <div className='image animate__animated animate__backInDown'>
                                    <span ><MdSafetyCheck className='icon' /></span>
                                </div>
                                <div className='contentTitle'>Safety First</div>
                                <p className='animate__animated animate__backInUp'>Fund safety is our most important principle</p>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='content'>
                                <div className='image image2 animate__animated animate__backInDown'>
                                    <span><MdOutlineAssignmentReturn className='icon' /></span>
                                </div>
                                <div className='contentTitle'>Good Returns</div>
                                <p className='animate__animated animate__backInUp'>We achieve industry-leading returns for our customers.</p>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='content'>
                                <div className='image image3 animate__animated animate__backInDown'>
                                    <span><MdOutlineScubaDiving className='icon' /></span>
                                </div>
                                <div className='contentTitle'>Daily Dividends</div>
                                <p className='animate__animated animate__backInUp'>You accrue dividends and gains on a daily basis.</p>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div className='content'>
                                <div className='image image4 animate__animated animate__backInDown'>
                                    <span><MdMoney className='icon' /></span>
                                </div>
                                <div className='contentTitle'>Compound Gains</div>
                                <p className='animate__animated animate__backInUp'>Our compound interest model increases your yield.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* another section starts here */}
            <div className='supportPayment'>
                <div className='container'>
                    <div className='Wrapper'>
                        <div className='leftSide'>
                            <div className='pageTitle'>Support Payment From <span>Every Platform </span></div>
                            <div className='text'>
                                Sed ut perspiciatis unde omnis iste natus
                                error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </div>

                            <div className='content'>
                                <p>Supported Payment :</p>
                                <div className='image'>
                                    <span><FaCcMastercard className='icon' /></span>
                                    <span><FaCcVisa className='icon' /></span>
                                    <span><FaCcPaypal className='icon' /></span>
                                    <span><FaCcStripe className='icon' /></span>
                                </div>
                            </div>
                        </div>
                        <div className='rightSide'>
                            <ScrollAnimation animateIn="pulse" className='image'>
                                <img src={payment} alt="" />
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>

            {/* last section here */}
            <div className='LandingLastSection'>
                <div className='container'>
                    <div className='top'>
                        <div className='image'>
                            <img src={bgElement} alt="" />
                        </div>
                        <div className='pageTitle'>Investing that accounts <span>for your needs</span></div>

                    </div>
                    <div className='contentWrapper'>
                        <div className='first'>
                            <div className='content'>
                                <span><MdOutlinePlaylistAddCheckCircle className='icon' /></span>
                                <div className='text'>
                                    <div className='title'>Invest for retirement</div>
                                    <p>Traditional IRA, Roth IRA, SEP IRA, 401(k) Rollover</p>
                                </div>
                            </div>
                            <div className='content'>
                                <span><MdOutlinePlaylistAddCheckCircle className='icon' /></span>
                                <div className='text'>
                                    <div className='title'>Invest for education</div>
                                    <p>529 Account for college savings</p>
                                </div>
                            </div>
                            <div className='content'>
                                <span><MdOutlinePlaylistAddCheckCircle className='icon' /></span>
                                <div className='text'>
                                    <div className='title'>Invest for everything else</div>
                                    <p>Individual Accounts, Joint Accounts, Trust Accounts</p>
                                </div>
                            </div>
                        </div>
                        <div className='second'>
                            <div className='title'>
                                Invest even faster with the Trustfund Cash Account.
                            </div>
                            <p>Enjoy a 5.00% APY on all your cash. Pay bills, save for big purchases, or get in the market in minutes. Our technology lets you automate your paycheck and organize cash effortlessly.</p>
                            <div className='button'>
                                <NavLink to='/about' className='pageButton'>Learn More</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default LandingPage