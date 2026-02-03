import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import TrustIndicators from '../../components/TrustIndicators/TrustIndicators';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo.png';
import './PartnersPage.css';

const PartnersPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={'Our Partners & Certifications'} pagesub={'Partners'} />
            
            <section className="partners-content-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="partners-intro fade-in">
                                <h2>Strategic Technology Partnerships</h2>
                                <p>Digiroc maintains strategic partnerships with leading global technology vendors, ensuring our clients receive authorized products, competitive pricing, and comprehensive support. Our certifications demonstrate our commitment to excellence and technical expertise.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TrustIndicators />
            
            <section className="vendor-partnerships-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="section-title">
                                <span>Authorized Distributors</span>
                                <h2>Our Vendor Partners</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="vendor-card slide-up">
                                <div className="vendor-icon">
                                    <i className="fi flaticon-laptop"></i>
                                </div>
                                <h4>Microsoft</h4>
                                <p>Certified Partner for Azure, Microsoft 365, Windows Server, and enterprise licensing solutions.</p>
                                <ul>
                                    <li>Azure Cloud Solutions</li>
                                    <li>Microsoft 365 Licensing</li>
                                    <li>Windows Server & SQL</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="vendor-card slide-up delay-1">
                                <div className="vendor-icon">
                                    <i className="fi flaticon-cloud"></i>
                                </div>
                                <h4>AWS</h4>
                                <p>AWS Partner Network member providing cloud infrastructure, storage, and computing services.</p>
                                <ul>
                                    <li>EC2 & S3 Solutions</li>
                                    <li>Cloud Migration</li>
                                    <li>AWS Enterprise Support</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="vendor-card slide-up delay-2">
                                <div className="vendor-icon">
                                    <i className="fi flaticon-computer"></i>
                                </div>
                                <h4>Dell Technologies</h4>
                                <p>Authorized distributor of Dell servers, workstations, laptops, and enterprise storage solutions.</p>
                                <ul>
                                    <li>PowerEdge Servers</li>
                                    <li>Precision Workstations</li>
                                    <li>Storage Solutions</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="vendor-card slide-up delay-3">
                                <div className="vendor-icon">
                                    <i className="fi flaticon-desktop"></i>
                                </div>
                                <h4>HP Enterprise</h4>
                                <p>HPE partner for servers, networking, storage, and enterprise computing infrastructure.</p>
                                <ul>
                                    <li>ProLiant Servers</li>
                                    <li>Aruba Networking</li>
                                    <li>Storage & Backup</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="vendor-card slide-up delay-4">
                                <div className="vendor-icon">
                                    <i className="fi flaticon-network"></i>
                                </div>
                                <h4>Cisco</h4>
                                <p>Cisco Select Partner for networking, security, collaboration, and data center solutions.</p>
                                <ul>
                                    <li>Catalyst Switches</li>
                                    <li>Firewall & Security</li>
                                    <li>Collaboration Tools</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="vendor-card slide-up delay-5">
                                <div className="vendor-icon">
                                    <i className="fi flaticon-briefcase"></i>
                                </div>
                                <h4>Lenovo</h4>
                                <p>Authorized partner for ThinkPad, ThinkCentre, and enterprise-grade computing equipment.</p>
                                <ul>
                                    <li>ThinkPad Laptops</li>
                                    <li>ThinkCentre Desktops</li>
                                    <li>Data Center Hardware</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PartnerSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default PartnersPage;
