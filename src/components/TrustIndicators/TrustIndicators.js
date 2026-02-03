import React from 'react';
import './TrustIndicators.css';

const TrustIndicators = () => {
    return (
        <section className="trust-indicators-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div className="section-title">
                            <span>Why Choose Digiroc</span>
                            <h2>Trusted Enterprise IT Partner</h2>
                            <p>We deliver reliable IT distribution and solutions across Africa with proven expertise, vendor partnerships, and commitment to excellence.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="trust-indicator-item">
                            <div className="icon">
                                <i className="fi flaticon-calendar"></i>
                            </div>
                            <div className="content">
                                <h3>5+</h3>
                                <p>Years of Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="trust-indicator-item">
                            <div className="icon">
                                <i className="fi flaticon-briefcase"></i>
                            </div>
                            <div className="content">
                                <h3>50+</h3>
                                <p>Enterprise Clients Served</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="trust-indicator-item">
                            <div className="icon">
                                <i className="fi flaticon-globe"></i>
                            </div>
                            <div className="content">
                                <h3>10+</h3>
                                <p>Countries Covered</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="trust-indicator-item">
                            <div className="icon">
                                <i className="fi flaticon-medal"></i>
                            </div>
                            <div className="content">
                                <h3>5+</h3>
                                <p>Vendor Certifications</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row certifications-row">
                    <div className="col-12">
                        <div className="certifications-badges">
                            <h4>Our Certifications & Partnerships</h4>
                            <div className="badges-list">
                                <div className="badge-item">
                                    <i className="fi flaticon-check"></i>
                                    <span>Microsoft Certified Partner</span>
                                </div>
                                <div className="badge-item">
                                    <i className="fi flaticon-check"></i>
                                    <span>AWS Partner Network</span>
                                </div>
                                <div className="badge-item">
                                    <i className="fi flaticon-check"></i>
                                    <span>Dell Authorized Distributor</span>
                                </div>
                                <div className="badge-item">
                                    <i className="fi flaticon-check"></i>
                                    <span>HP Enterprise Partner</span>
                                </div>
                                <div className="badge-item">
                                    <i className="fi flaticon-check"></i>
                                    <span>Cisco Select Partner</span>
                                </div>
                                <div className="badge-item">
                                    <i className="fi flaticon-check"></i>
                                    <span>ISO 9001 Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustIndicators;
