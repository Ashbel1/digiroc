import React from "react";
import { Link } from 'react-router-dom'
import Services from '../../api/service'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection = () => {
    return (
        <section className="services-section-s2">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div className="section-title-s3">
                            <span>About Digiroc</span>
                            <h2>Strategic Technology & Intelligence Partner</h2>
                            <p>Digiroc Technologies partners with enterprises, investors, and technology vendors to accelerate growth through data-driven insights, optimized IT distribution, and strategic market intelligence. We unlock competitive advantage by transforming complex data into actionable insights and enabling seamless technology adoption.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="services-grids clearfix">
                            {Services.map((service, srv) => (
                                <div className="grid" key={srv}>
                                    <div className="icon">
                                        <i className={`fi ${service.icon}`}></i>
                                    </div>
                                    <h3><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></h3>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;