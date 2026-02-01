import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'
import hero3 from '../../images/slider/slide-3.jpg'


const Hero = () => {
    return (

        <section className="hero-slider hero-style-1">
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                        <div className="container">
                            <div className="slide-title">
                                <h2>Transform Data Into Strategic Intelligence</h2>
                            </div>
                            <div className="slide-text">
                                <p>Digiroc Technologies delivers actionable market insights and enterprise IT solutions that drive profitable growth and competitive advantage.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="slide-btns">
                                <Link to="/contact" className="theme-btn">Explore Our Solutions<span></span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container">
                            <div className="slide-title">
                                <h2>Enterprise IT Distribution & Logistics</h2>
                            </div>
                            <div className="slide-text">
                                <p>Optimized supply chain solutions connecting technology vendors with enterprise customers across Africa.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="slide-btns">
                                <Link to="/contact" className="theme-btn">Explore Opportunities<span></span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                        <div className="container">
                            <div className="slide-title">
                                <h2>Data-Driven Market Research & Analytics</h2>
                            </div>
                            <div className="slide-text">
                                <p>Deep market intelligence and predictive analytics that unlock growth opportunities and mitigate investment risks.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="slide-btns">
                                <Link to="/contact" className="theme-btn">Learn More<span></span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </section>
    )
}

export default Hero;