import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import Services from '../../api/service'
import { fadeInUp, fadeInDown, staggerContainer } from '../../utils/animations';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection = () => {
    return (
        <section className="services-section-s2">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <motion.div 
                            className="section-title-s3"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInDown}
                        >
                            <span>About Digiroc</span>
                            <h2>Enterprise IT Distribution & Solutions</h2>
                            <p>Digiroc Technologies supplies hardware, software, and enterprise platforms across Africa. We enable secure deployment of Azure, AWS, Microsoft 365, storage, networking, and security solutions with reliable logistics and lifecycle support.</p>
                        </motion.div>
                    </div>
                </div>
                <motion.div 
                    className="row"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    <div className="col col-xs-12">
                        <div className="services-grids clearfix">
                            {Services.map((service, srv) => (
                                <motion.div 
                                    className="grid" 
                                    key={srv}
                                    variants={fadeInUp}
                                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                >
                                    <div className="icon">
                                        <i className={`fi ${service.icon}`}></i>
                                    </div>
                                    <h3>
                                        <Link onClick={ClickHandler} to={`/solution/${service.slug}`}>
                                            {service.sTitle}
                                        </Link>
                                    </h3>
                                    <p>{service.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default ServiceSection;