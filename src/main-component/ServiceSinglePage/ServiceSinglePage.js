import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom'
import Services from '../../api/service'
import ServiceTab from './ServiceTab';
import Logo from '../../images/logo-2.png'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault()
}


const ServiceSinglePage = (props) => {

    const { slug } = useParams()

    const ServiceDetails = Services.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar hclass={'header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={ServiceDetails.sTitle} pagesub={'Project'} />

            <section className="service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-9 order-lg-2 order-1 col-12">
                            <div className="service-single-content">
                                <div className="service-pic">
                                    <img src={ServiceDetails.sImg} alt="" />
                                </div>
                                <h2>Market Research service</h2>
                                <p>Digiroc's market research services deliver comprehensive intelligence that drives strategic decision-making for enterprises, investors, and technology vendors. We combine quantitative analysis with qualitative insights to provide deep understanding of market dynamics, competitive landscapes, consumer behavior, and emerging opportunities across African markets.</p>
                                <p>Our research methodologies are designed specifically for the unique characteristics of emerging markets, ensuring accuracy and actionable insights that support investment decisions, market entry strategies, and portfolio optimization for private equity and venture capital firms.</p>

                                <h3>Comprehensive Research Capabilities</h3>
                                <p>Our market research encompasses competitive analysis, consumer insights, industry trends, market sizing, and investment due diligence to support strategic business decisions and minimize investment risks.</p>
                                <div className="service-features">
                                    <ul>
                                        <li><i className="ti-check-box"></i>Market opportunity analysis</li>
                                        <li><i className="ti-check-box"></i>Competitive intelligence</li>
                                        <li><i className="ti-check-box"></i>Consumer behavior insights</li>
                                    </ul>
                                    <ul>
                                        <li><i className="ti-check-box"></i>Investment due diligence</li>
                                        <li><i className="ti-check-box"></i>Industry trend forecasting</li>
                                        <li><i className="ti-check-box"></i>Market entry strategies</li>
                                    </ul>
                                </div>

                                <ServiceTab />

                                <div className="request-service">
                                    <h3>Request this service</h3>
                                    <form method="post" onSubmit={SubmitHandler}>
                                        <div>
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Your Name*" />
                                        </div>
                                        <div>
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email*" />
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone*" />
                                        </div>
                                        <div className="submit-area">
                                            <button type="submit">Submit Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 order-lg-1 order-2 col-12">
                            <div className="service-sidebar">
                                <div className="widget service-list-widget">
                                    <ul>
                                        <li className="current"><Link to="/services">All Service</Link></li>
                                        {Services.map((service, srv) => (
                                            <li key={srv}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.sTitle}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="widget service-features-widget">
                                    <h3>Our Service Features</h3>
                                    <ol>
                                        <li>Quality service guarantee</li>
                                        <li>100% safe work</li>
                                        <li>Money back guarantee</li>
                                        <li>100% satisfied client</li>
                                    </ol>
                                </div>
                                <div className="widget download-widget">
                                    <ul>
                                        <li><Link onClick={ClickHandler} to='/contact'><i className="ti-file"></i>Download Brochure</Link></li>
                                    </ul>
                                </div>
                                <div className="widget contact-widget">
                                    <div>
                                        <h4>Need help?</h4>
                                        <p>Contact our team to discuss your market research needs and how we can support your strategic objectives.</p>
                                        <p>Phone: +263718911411</p>
                                        <p>Email: info@digiroc.co.zw</p>
                                        <Link onClick={ClickHandler} to='/contact'>Contact With Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;
