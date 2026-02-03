import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Team from '../../api/team'
import { ShimmerList } from '../Shimmer/Shimmer'
import { fadeInUp, fadeInDown, staggerContainer, imageHover } from '../../utils/animations'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <section className="cta-with-team-section section-padding">
                <div className="container">
                    <div className="team-section">
                        <div className="row">
                            <div className="col col-xs-12">
                                <div className="team-grids clearfix">
                                    <ShimmerList count={4} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="cta-with-team-section section-padding">
            <div className="bg"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-8 col-lg-10">
                        <motion.div 
                            className="cta-content"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInDown}
                        >
                            <h3>We deliver enterprise IT distribution, cloud enablement, and infrastructure services across Africa</h3>
                        </motion.div>
                    </div>
                </div>
                <div className="team-section">
                    <div className="row">
                        <div className="col col-lg-6 col-12">
                            <motion.div 
                                className="section-title-s4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                            >
                                <span>Team members</span>
                                <h2>Meet the Digiroc <br />delivery team</h2>
                            </motion.div>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <motion.div 
                                className="title-text"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: 0.2 }}
                            >
                                <p>Our team brings hands-on expertise in IT distribution, enterprise platforms, storage, networking, and deployment support to keep your organization running reliably.</p>
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
                            <div className="team-grids clearfix">
                                {Team.map((team, aitem) => (
                                    <motion.div 
                                        className="grid" 
                                        key={aitem}
                                        variants={fadeInUp}
                                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                    >
                                        <motion.div 
                                            className="img-holder"
                                            whileHover={imageHover}
                                            style={{ overflow: 'hidden', borderRadius: '8px' }}
                                        >
                                            <img src={team.tImg} alt="" />
                                        </motion.div>
                                        <div className="details">
                                            <h5><Link onClick={ClickHandler} to={`/team-member/${team.slug}`}>{team.name}</Link></h5>
                                            <span>{team.title}</span>
                                        </div>
                                    </motion.div>
                                ))}

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection;