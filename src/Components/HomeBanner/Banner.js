import React from 'react';
import './Banner.scss'
import { FaStar } from "react-icons/fa6";
import { MdOutlineStars } from "react-icons/md";
import { GiCursedStar } from "react-icons/gi";
import { PiNotionLogoFill } from "react-icons/pi";
import { GrBlog } from "react-icons/gr";

function Banner() {
    return (
        <div className='bannerWrapper'>
            <div className='container'>
                <div className='wrapper'>
                    <div className='first'>
                        <div className='iconDiv'>
                            <FaStar className='icon' />
                            <FaStar className='icon' />
                            <FaStar className='icon' />
                            <FaStar className='icon' />
                            <FaStar className='icon' />
                        </div>
                        <div className='title'> 300+ <span>Reviews</span></div>
                        <div className='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                    </div>
                    <div className='second'>
                        <div className='text'>Featured In:</div>
                        <div className='company'>
                            <div className='firstdiv'>
                                <div className='content'>
                                    <div className='logo'><PiNotionLogoFill className='icon' /></div>
                                    <div className='name'>Nedwallet</div>
                                </div>
                                <div className='content'>
                                    <div className='logo'><GrBlog className='icon' /></div>
                                    <div className='name'>MarketUp</div>
                                </div>
                            </div>
                            <div className='firstdiv'>
                                <div className='content'>
                                    <div className='logo'><MdOutlineStars className='icon' /></div>
                                    <div className='name'>StarBank</div>
                                </div>
                                <div className='content'>
                                    <div className='logo'><GiCursedStar className='icon' /></div>
                                    <div className='name'>CloudWatch</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner