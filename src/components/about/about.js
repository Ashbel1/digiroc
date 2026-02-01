import React from 'react'
import abimg from '../../images/slider/one.jpg'
import VideoModal from '../ModalVideo/VideoModal'


const About = (props) => {
    return (
        <section className="about-section-s2">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 order-lg-1 order-2 col-12">
                        <div className="img-holder">
                            <img src={abimg} alt="" />
                            <div className="experience-text">
                                Enterprise-Ready <span>IT Distribution</span>
                            </div>
                            <VideoModal />
                        </div>
                    </div>
                    <div className="col col-lg-6 order-lg-2 order-1 col-12">
                        <div className="section-title-s2">
                            <span>About Digiroc Technologies</span>
                            <h2>Powering Enterprises With Technology</h2>
                        </div>
                        <div className="about-content">
                            <h4>IT Distribution & Enterprise Solutions Partner</h4>
                            <p>Digiroc Technologies delivers end-to-end enterprise technology solutions across Africa. We specialize in IT distribution for hardware and software, enterprise platforms like Azure, AWS, and Microsoft 365, and data storage and infrastructure services. Our mission is to ensure reliable technology supply, secure deployment, and long-term lifecycle support for enterprises, institutions, and technology partners.</p>
                            <h5>Phone: +263718911411, Email: info@digiroc.co.zw</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;