import React from 'react'
import abimg from '../../images/about-2.jpg'
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
                                25 Years of <span>Experience</span>
                            </div>
                            <VideoModal />
                        </div>
                    </div>
                    <div className="col col-lg-6 order-lg-2 order-1 col-12">
                        <div className="section-title-s2">
                            <span>About Digiroc Technologies</span>
                            <h2>Empowering Growth Through Data & Technology</h2>
                        </div>
                        <div className="about-content">
                            <h4>Strategic Partner for Enterprise Transformation</h4>
                            <p>Digiroc Technologies specializes in three complementary domains that drive enterprise value: Market Research delivering competitive intelligence for strategic decision-making, Advanced Analytics unlocking hidden opportunities through data science, and IT Distribution enabling seamless technology adoption across enterprise ecosystems. We combine deep market expertise with technology enablement to help enterprises, investors, and technology vendors achieve accelerated growth and sustainable competitive advantage.</p>
                            <h5>Phone: +263718911411, Email: info@digiroc.co.zw</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;