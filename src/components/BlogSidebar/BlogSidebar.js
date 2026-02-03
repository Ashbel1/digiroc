import React from 'react';
import { Link } from 'react-router-dom'
import Services from '../../api/service';
import about from '../../images/slider/one.jpg'
import blogs from '../../api/blogs'

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col col-lg-3 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget about-widget">
                    <h3>About us</h3>
                    <div className="img-holder">
                        <img src={about} alt="" />
                    </div>
                    <p>Digiroc Technologies delivers enterprise IT distribution, cloud enablement, and infrastructure services across Africa.</p>
                    <Link onClick={ClickHandler} to="/about">More about us</Link>
                </div>
                <div className="widget category-widget">
                    <h3>Post Categories</h3>
                    <ul>
                        {Services.slice(0, 6).map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} to={`/solution/${service.slug}`}>{service.sTitle}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.map((blog, bl) => (
                            <div className="post" key={bl}>
                                <div className="img-holder">
                                    <img src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} to={`/article/${blog.slug}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/articles">IT Distribution</Link></li>
                        <li><Link onClick={ClickHandler} to="/articles">Cloud</Link></li>
                        <li><Link onClick={ClickHandler} to="/articles">Microsoft 365</Link></li>
                        <li><Link onClick={ClickHandler} to="/articles">Azure</Link></li>
                        <li><Link onClick={ClickHandler} to="/articles">AWS</Link></li>
                        <li><Link onClick={ClickHandler} to="/articles">Storage</Link></li>
                        <li><Link onClick={ClickHandler} to="/articles">Networking</Link></li>
                        <li><Link onClick={ClickHandler} to="/articles">Security</Link></li>
                        <li><Link onClick={ClickHandler} to="/articles">Enterprise</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
