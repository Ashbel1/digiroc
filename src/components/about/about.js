import React from 'react'
import { motion } from 'framer-motion'
import abimg from '../../images/about-2.jpg'
import { fadeInLeft, fadeInRight, zoomIn } from '../../utils/animations'


const About = (props) => {
    return (
        <section className="about-section-s2">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 order-lg-1 order-2 col-12">
                        <motion.div 
                            className="img-holder"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInLeft}
                        >
                            <motion.img 
                                src={abimg} 
                                alt=""
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.div 
                                className="experience-text"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                Enterprise-Ready <span>IT Distribution</span>
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="col col-lg-6 order-lg-2 order-1 col-12">
                        <motion.div 
                            className="section-title-s2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInRight}
                        >
                            <span>About Digiroc Technologies</span>
                            <h2>Powering Enterprises With Technology</h2>
                        </motion.div>
                        <motion.div 
                            className="about-content"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInRight}
                            transition={{ delay: 0.2 }}
                        >
                            <h4>IT Distribution & Enterprise Solutions Partner</h4>
                            <p>Digiroc Technologies delivers end-to-end enterprise technology solutions across Africa. We specialize in IT distribution for hardware and software, enterprise platforms like Azure, AWS, and Microsoft 365, and data storage and infrastructure services. Our mission is to ensure reliable technology supply, secure deployment, and long-term lifecycle support for enterprises, institutions, and technology partners.</p>
                            <h5>Phone: +263718911411, Email: info@digiroc.co.zw</h5>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;