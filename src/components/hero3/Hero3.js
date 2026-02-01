import React from "react";
import { Link } from 'react-router-dom'


const Hero3 = () => {
    return (

        <section className="hero-slider hero-style-1 static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div data-swiper-parallax="300" className="slide-title">
                            <h2>Leading Technology Intelligence Partner</h2>
                        </div>
                        <div data-swiper-parallax="400" className="slide-text">
                            <p>Empowering growth through market research, advanced analytics, and enterprise IT distribution across Africa.</p>
                        </div>
                        <div className="clearfix"></div>
                        <div data-swiper-parallax="500" className="slide-btns">
                            <Link to="/contact" className="theme-btn">Discover More<span></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero3;