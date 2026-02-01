import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/slide-3.jpg'
import hero2 from '../../images/slider/slide-2.jpg'
import hero3 from '../../images/slider/slide-1.jpg'


const Hero2 = () => {
    return (

        <section className="hero-slider hero-style-2">
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
                                <h2>Strategic Market Intelligence for Africa</h2>
                            </div>
                            <div className="slide-text">
                                <p>Empowering investment decisions with comprehensive market research and data-driven insights across African markets.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="slide-btns">
                                <Link to="/contact" className="theme-btn">Discover More<span></span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container">
                            <div className="slide-title">
                                <h2>Enterprise IT Distribution Solutions</h2>
                            </div>
                            <div className="slide-text">
                                <p>Connecting leading global technology vendors with enterprise customers across African markets through reliable logistics and value-added services.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="slide-btns">
                                <Link to="/contact" className="theme-btn">Discover More<span></span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                        <div className="container">
                            <div className="slide-title">
                                <h2>Advanced Analytics & Business Intelligence</h2>
                            </div>
                            <div className="slide-text">
                                <p>Transform your business data into actionable insights that optimize operations, reduce costs, and drive sustainable growth.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="slide-btns">
                                <Link to="/contact" className="theme-btn">Discover More<span></span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </section>
    )
}

export default Hero2;