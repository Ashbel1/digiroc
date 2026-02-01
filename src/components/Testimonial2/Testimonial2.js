import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
};

const Testimonial2 = () => {

    return (
        <section className="testimonials-section-s2 section-padding">
            <h2 className="hidden">Testimonials</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-8 col-lg-10">
                        <div className="testimonial-slider">
                            <Slider {...settings}>
                                <div className="testimonials-area">
                                    <p>Digiroc's market intelligence and analytics capabilities have been instrumental in our investment decisions across emerging African markets. Their team delivers actionable insights that directly impact our portfolio performance and risk management strategies.</p>
                                    <span className="quoter">Investment Director, PE Firm</span>
                                </div>
                                <div className="testimonials-area">
                                    <p>The IT distribution and supply chain solutions from Digiroc have streamlined our technology procurement process significantly. Their expertise in African markets and strong vendor relationships deliver real value to our operations.</p>
                                    <span className="quoter">CTO, Enterprise Technology Company</span>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial2;