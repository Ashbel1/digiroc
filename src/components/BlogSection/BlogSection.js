import React from "react";
import blogs from '../../api/blogs'
import { Link } from "react-router-dom";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = () => {
    return (
        <section className="blog-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-s2">
                            <span>Insights</span>
                            <h2>IT Distribution & <br/>Enterprise Updates</h2>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-text">
                            <p>Stay informed on hardware availability, enterprise platforms, cloud adoption, storage, and infrastructure best practices across African markets.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="blog-grids clearfix">
                            {blogs.map((blog, bl) => (
                                <div className="grid" key={bl}>
                                    <div className="entry-media">
                                        <img src={blog.screens} alt="" />
                                    </div>
                                    <div className="entry-date">
                                        <h4>{blog.create_day}</h4>
                                        <span>{blog.create_month} <br/>{blog.create_year}</span>
                                    </div>
                                    <h3><Link onClick={ClickHandler} to={`/article/${blog.slug}`}>{blog.title}</Link></h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;