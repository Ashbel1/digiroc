import React from "react";
import { Link } from 'react-router-dom'
import Services from '../../api/service'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSectionS2 = (props) => {
    return (
        <section className={`services-section section-padding ${props.sClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div className="section-title-s3">
                            <span>Services</span>
                            <h2>Best services</h2>
                            <p>Digiroc Technologies delivers strategic market intelligence, advanced analytics, and enterprise IT solutions designed to drive business growth and optimize operational efficiency across African markets.</p>
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

export default ServiceSectionS2;