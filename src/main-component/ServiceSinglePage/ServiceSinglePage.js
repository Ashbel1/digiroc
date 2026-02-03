import React, { Fragment, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom'
import Services from '../../api/service'
import Logo from '../../images/logo.png'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault()
}


const ServiceSinglePage = (props) => {

    const { slug } = useParams()

    const ServiceDetails = Services.find(item => item.slug === slug)
    const [activeService, setActiveService] = useState(slug)
    const [fadeIn, setFadeIn] = useState(true)

    const handleServiceClick = (e, serviceSlug) => {
        e.preventDefault()
        setFadeIn(false)
        setTimeout(() => {
            setActiveService(serviceSlug)
            setFadeIn(true)
        }, 300)
    }

    const currentService = Services.find(item => item.slug === activeService) || ServiceDetails

    return (
        <Fragment>
            <Navbar hclass={'header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={ServiceDetails.sTitle} pagesub={'Services'} />

            <section className="service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-9 order-lg-2 order-1 col-12">
                            <div className={`service-single-content ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                                <div className="service-pic">
                                    <img src={currentService.sImg} alt="" />
                                </div>
                                <h2>{currentService.sTitle}</h2>
                                <p>{currentService.description}</p>
                                <p>{currentService.des2}</p>

                                <h3>Enterprise Delivery Capabilities</h3>
                                <p>{currentService.des3}</p>
                                <div className="service-features">
                                    <ul>
                                        <li><i className="ti-check-box"></i>Vendor sourcing & procurement</li>
                                        <li><i className="ti-check-box"></i>Enterprise licensing & compliance</li>
                                        <li><i className="ti-check-box"></i>Secure deployment & integration</li>
                                    </ul>
                                    <ul>
                                        <li><i className="ti-check-box"></i>Storage, backup & DR</li>
                                        <li><i className="ti-check-box"></i>Network & infrastructure services</li>
                                        <li><i className="ti-check-box"></i>Lifecycle support & warranty</li>
                                    </ul>
                                </div>

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
                                        <li className="current"><Link to="/solutions">All Solutions</Link></li>
                                        {Services.map((service, srv) => (
                                            <li key={srv} className={activeService === service.slug ? 'current' : ''}>
                                                <a href="#" onClick={(e) => handleServiceClick(e, service.slug)}>
                                                    {service.sTitle}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="widget service-features-widget">
                                    <h3>Our Service Features</h3>
                                    <ol>
                                        <li>Vendor-authorized sourcing</li>
                                        <li>Secure enterprise deployment</li>
                                        <li>Reliable logistics & delivery</li>
                                        <li>Lifecycle support & warranty</li>
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
                                        <p>Contact our team to discuss hardware, software, cloud, or infrastructure requirements.</p>
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
