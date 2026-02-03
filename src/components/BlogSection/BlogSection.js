import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import blogs from '../../api/blogs'
import { Link } from "react-router-dom";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, imageHover } from '../../utils/animations';
import { ShimmerList } from '../Shimmer/Shimmer';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <section className="blog-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="blog-grids clearfix">
                                <ShimmerList count={3} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="blog-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <motion.div 
                            className="section-title-s2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInLeft}
                        >
                            <span>Insights</span>
                            <h2>IT Distribution & <br/>Enterprise Updates</h2>
                        </motion.div>
                    </div>
                    <div className="col col-lg-6 col-12">
                        <motion.div 
                            className="section-title-text"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInRight}
                        >
                            <p>Stay informed on hardware availability, enterprise platforms, cloud adoption, storage, and infrastructure best practices across African markets.</p>
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
                        <div className="blog-grids clearfix">
                            {blogs.map((blog, bl) => (
                                <motion.div 
                                    className="grid" 
                                    key={bl}
                                    variants={fadeInUp}
                                >
                                    <motion.div 
                                        className="entry-media"
                                        whileHover={imageHover}
                                        style={{ overflow: 'hidden', borderRadius: '8px' }}
                                    >
                                        <img src={blog.screens} alt="" />
                                    </motion.div>
                                    <div className="entry-date">
                                        <h4>{blog.create_day}</h4>
                                        <span>{blog.create_month} <br/>{blog.create_year}</span>
                                    </div>
                                    <h3><Link onClick={ClickHandler} to={`/article/${blog.slug}`}>{blog.title}</Link></h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default BlogSection;