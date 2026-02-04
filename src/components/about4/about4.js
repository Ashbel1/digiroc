import React from 'react'
import { Link } from 'react-router-dom'
import abimg from '../../images/about/ab2.png'

const ClickHandler = (props) => {
    window.scrollTo(10, 0);
}


const About4 = (props) => {
    return (
        <section className="wpo-about-section-s4 section-padding pb-120">
            <div className="container">
                <div className="wpo-about-inner">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <h4>Welcome To Digiroc</h4>
                                <h2>Your trusted enterprise IT distribution partner.</h2>
                                <p>Digiroc Technologies provides hardware and software distribution, cloud enablement, and infrastructure services across Africa. We help enterprises deploy reliable, secure, and scalable technology.</p>
                                <div className="text-sub-wrap">
                                    <div className="text-sub-item">
                                        <i className="fi flaticon-tax"></i>
                                        <h5>End‑to‑end enterprise supply
                                            and deployment support.</h5>
                                    </div>
                                </div>
                                <Link onClick={ClickHandler} className="theme-btn" to="/solutions">Our Solutions</Link>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-wrap">
                                <div className="wpo-about-img">
                                    <div className="inner-img">
                                        <img src={abimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-ab"></div>
        </section>
    )
}

export default About4;