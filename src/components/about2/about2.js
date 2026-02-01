import React from 'react'
import abimg from '../../images/slider/one.jpg'
import VideoModal from '../ModalVideo/VideoModal'


const About2 = (props) => {
    return (
        <section className={`about-section section-padding ${props.abClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-s2">
                            <span>About Digiroc Technologies</span>
                            <h2>Enterprise IT Distribution<br />& Solutions</h2>
                        </div>
                        <div className="about-content">
                            <h4>Reliable Supply. Secure Deployment.</h4>
                            <p>Digiroc Technologies delivers enterprise hardware and software distribution, cloud enablement, and infrastructure services. We help organizations deploy Microsoft, Azure, AWS, storage, and networking solutions with dependable logistics and lifecycle support.</p>
                            <h5>Phone: +263718911411, Email: info@digiroc.co.zw</h5>
                        </div>
                    </div>
                    <div className="col col-lg-6  col-12">
                        <div className="img-holder">
                            <img src={abimg} alt="" />
                            <div className="experience-text">
                                Enterprise-Ready <span>IT Distribution</span>
                            </div>
                            <VideoModal />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;