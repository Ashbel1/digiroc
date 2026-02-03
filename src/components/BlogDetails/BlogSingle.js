import React from 'react';
import { Link } from 'react-router-dom'
import blog3 from '../../images/slider/one.jpg'
import blog4 from '../../images/slider/one.jpg'
import blog5 from '../../images/slider/one.jpg'
import blog6 from '../../images/slider/one.jpg'
import blogs from '../../api/blogs';
import { useParams } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar/BlogSidebar.js'

const BlogSingle = (props) => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <section className="blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-9 col-12 ${props.blRight}`}>
                        <div className="blog-content">
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src={BlogDetails.blogSingleImg} alt="" />
                                </div>
                                <ul className="entry-meta">
                                    <li><Link to="/article/Building-resilient-it-supply-chains-in-africa">{BlogDetails.author}</Link></li>
                                    <li><Link to="/article/Building-resilient-it-supply-chains-in-africa">{BlogDetails.create_at}</Link></li>
                                    <li><Link to="/article/Building-resilient-it-supply-chains-in-africa">{BlogDetails.comment} Comments</Link></li>
                                </ul>
                                <h2>{BlogDetails.title}</h2>
                                <p>Reliable IT supply chains are critical for enterprise operations. Digiroc Technologies ensures authorized distribution and timely delivery of hardware, software, and infrastructure solutions across African markets.</p>
                                <p>We coordinate vendor partnerships, procurement, logistics, and deployment planning so customers can scale with confidence and maintain strong security and compliance standards.</p>
                                <blockquote>
                                    Reliable distribution and enterprise platforms are the foundation of secure, productive operations.
                                    <span className="quoter">- Digiroc Delivery Team</span>
                                </blockquote>
                                <h3>Distribution, Cloud, and Infrastructure That Scale</h3>
                                <p>From laptops and servers to cloud platforms and storage, Digiroc delivers the technology foundation enterprises need to modernize and grow across Africa.</p>
                            </div>

                            <div className="tag-share">
                                <div className="tag">
                                    Tags: &nbsp;
                                    <ul>
                                        <li><Link to="/articles">IT Distribution</Link></li>
                                        <li><Link to="/articles">Cloud</Link></li>
                                        <li><Link to="/articles">Storage</Link></li>
                                        <li><Link to="/articles">Enterprise</Link></li>
                                    </ul>
                                </div>
                                <div className="share">
                                    Share: &nbsp;
                                    <ul>
                                        <li><Link to="/coming-soon"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="/coming-soon"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link to="/coming-soon"><i className="ti-linkedin"></i></Link></li>
                                        <li><Link to="/coming-soon"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="author-box">
                                <div className="author-avatar">
                                    <Link to="/article/Building-resilient-it-supply-chains-in-africa" target="_blank"><img src={blog6} alt="" /></Link>
                                </div>
                                <div className="author-content">
                                    <Link to="/article/Building-resilient-it-supply-chains-in-africa" className="author-name">Author: Digiroc Technologies</Link>
                                    <p>We share practical guidance on IT distribution, enterprise platforms, and infrastructure strategy for organizations across Africa.</p>
                                    <div className="socials">
                                        <ul className="social-link">
                                            <li><Link to="/coming-soon"><i className="ti-facebook"></i></Link></li>
                                            <li><Link to="/coming-soon"><i className="ti-twitter-alt"></i></Link></li>
                                            <li><Link to="/coming-soon"><i className="ti-linkedin"></i></Link></li>
                                            <li><Link to="/coming-soon"><i className="ti-instagram"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="more-posts">
                                <div className="previous-post">
                                    <Link to="/coming-soon">
                                        <span className="post-control-link"><i className="ti-arrow-circle-left"> </i>Previous post</span>
                                    </Link>
                                </div>
                                <div className="next-post">
                                    <Link to="/coming-soon">
                                        <span className="post-control-link">Next post <i className="ti-arrow-circle-right"></i></span>
                                    </Link>
                                </div>
                            </div>

                            <div className="comments-area">
                                <div className="comments-section">
                                    <h3 className="comments-title">Comments</h3>
                                    <ol className="comments">
                                        <li className="comment even thread-even depth-1" id="comment-1">
                                            <div id="div-comment-1">
                                                <div className="comment-theme">
                                                    <div className="comment-image"><img src={blog3} alt="" /></div>
                                                </div>
                                                <div className="comment-main-area">
                                                    <div className="comment-wrapper">
                                                        <div className="comments-meta">
                                                            <h4>John Abraham <span className="comments-date">January 12,2022
                                                                At 9.00am</span></h4>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>Great service and timely delivery from Digiroc. The rollout was smooth and well supported.</p>
                                                            <div className="comments-reply">
                                                                <Link className="comment-reply-link" to="/article/Building-resilient-it-supply-chains-in-africa"><span>Reply</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="children">
                                                <li className="comment">
                                                    <div>
                                                        <div className="comment-theme">
                                                            <div className="comment-image"><img src={blog4} alt="" /></div>
                                                        </div>
                                                        <div className="comment-main-area">
                                                            <div className="comment-wrapper">
                                                                <div className="comments-meta">
                                                                    <h4>Lily Watson <span className="comments-date">January
                                                                        12,2022 At 9.00am</span></h4>
                                                                </div>
                                                                <div className="comment-area">
                                                                    <p>Professional team and reliable logistics. Our procurement was seamless.</p>
                                                                    <div className="comments-reply">
                                                                        <Link className="comment-reply-link" to="/article/Building-resilient-it-supply-chains-in-africa"><span>Reply</span></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li className="comment">
                                                            <div>
                                                                <div className="comment-theme">
                                                                    <div className="comment-image"><img src={blog5} alt="" /></div>
                                                                </div>
                                                                <div className="comment-main-area">
                                                                    <div className="comment-wrapper">
                                                                        <div className="comments-meta">
                                                                            <h4>John Abraham <span className="comments-date">January
                                                                                12,2022 At 9.00am</span></h4>
                                                                        </div>
                                                                        <div className="comment-area">
                                                                            <p>Strong vendor access and clear communication throughout the deployment.</p>
                                                                            <div className="comments-reply">
                                                                                <Link className="comment-reply-link" to="/article/Building-resilient-it-supply-chains-in-africa"><span>Reply</span></Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="comment">
                                            <div>
                                                <div className="comment-theme">
                                                    <div className="comment-image"><img src={blog3} alt="" /></div>
                                                </div>
                                                <div className="comment-main-area">
                                                    <div className="comment-wrapper">
                                                        <div className="comments-meta">
                                                            <h4>John Abraham <span className="comments-date">January 12,2022
                                                                At 9.00am</span></h4>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>Excellent support and warranty handling on our enterprise equipment.</p>
                                                            <div className="comments-reply">
                                                                <Link className="comment-reply-link" to="/article/Building-resilient-it-supply-chains-in-africa"><span>Reply</span></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Post Comments</h3>
                                    <form onSubmit={submitHandler} id="commentform" className="comment-form">
                                        <div className="form-textarea">
                                            <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                        </div>
                                        <div className="form-inputs">
                                            <input placeholder="Website" type="url" />
                                            <input placeholder="Name" type="text" />
                                            <input placeholder="Email" type="email" />
                                        </div>
                                        <div className="form-submit">
                                            <input id="submit" value="Post Comment" type="submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
