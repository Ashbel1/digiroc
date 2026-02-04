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
            >     <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container">
                            <div className="slide-title">
                                <h2>Enterprise IT Distribution & Supply</h2>
                            </div>
                            <div className="slide-text">
                                <p>Authorized distribution of laptops, desktops, servers, networking, storage, and software across Africa.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="slide-btns">
                                <Link to="/contact" className="theme-btn">Explore Solutions<span></span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                        <div className="container">
                            <div className="slide-title">
                                <h2>Enterprise Solutions & Cloud Enablement</h2>
                            </div>
                            <div className="slide-text">
                                <p>Azure, AWS, Microsoft 365, security, and data storage solutions delivered with expert integration and support.</p>
                            </div>
                            <div className="clearfix"></div>
                            <div className="slide-btns">
                                <Link to="/contact" className="theme-btn">Talk to an Expert<span></span></Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
           
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero3})` }}>
                        <div className="container">
                            <div className="slide-title">
                                <h2>Data & Infrastructure Intelligence</h2>
                            </div>
                            <div className="slide-text">
                                <p>Performance insights that optimize procurement, inventory, and enterprise IT operations.</p>
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