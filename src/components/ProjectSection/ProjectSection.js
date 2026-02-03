import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from '../../api/project'
import { Link } from "react-router-dom";
import { ShimmerList } from '../Shimmer/Shimmer';
import { fadeInUp, imageHover } from '../../utils/animations';

const settings = {
    dots: true,
    arrows: false,
    speed: 3000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding:'200px',
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1
            }
        }
    ]
};


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSection = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <section className={`projects-section ${props.prClass}`}>
                <div className="content-area">
                    <div className="container">
                        <ShimmerList count={3} />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={`projects-section ${props.prClass}`}>
            <div className="content-area">
                <div className="project-grids projects-slider">
                    <Slider {...settings}>
                        {Projects.slice(0, 4).map((project, prj) => (
                            <motion.div 
                                className="grid" 
                                key={prj}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                            >
                                <motion.div 
                                    className="img-holder"
                                    whileHover={imageHover}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <img src={project.pImg} alt="project" className="img img-responsive" />
                                </motion.div>
                                <div className="hover-content">
                                    <div className="top-link">
                                        <Link onClick={ClickHandler} to={`/deployment/${project.slug}`}><i className="fi flaticon-next"></i></Link>
                                    </div>
                                    <div className="details">
                                        <h3>{project.title}</h3>
                                        <p className="cat">{project.subTitle}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;