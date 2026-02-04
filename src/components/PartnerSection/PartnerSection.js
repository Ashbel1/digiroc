import React from "react";
import { Link } from 'react-router-dom'


const PartnerSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="cta-with-partners">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-8 col-12 text-center">
                        <div className="section-title-s2">
                            <span>Partner with Digiroc</span>
                            <h2>Need enterprise IT solutions?</h2>
                        </div>
                        <div className="cta-text">
                            <p>We deliver hardware and software distribution, cloud enablement, storage, networking, and enterprise support. Let's build a reliable, secure, and scalable IT foundation for your organization.</p>
                            <Link onClick={ClickHandler} to="/contact" className="theme-btn-s2">Get In Touch</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;
