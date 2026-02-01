import React from "react";
import abimg1 from '../../images/about/img-1.jpg'
import abimg2 from '../../images/about/img-2.jpg'
import abimg3 from '../../images/about/img-3.jpg'


const MissionVission = () => {
    return (
        <section className="mission-vision-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-8 col-lg-10">
                        <div className="title-area">
                            <h2>Digiroc Technologies drives enterprise transformation through strategic market intelligence, data-driven analytics, and optimized technology distribution across emerging African markets.</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="mission-vision-grids clearfix">
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={abimg1} alt="" />
                                </div>
                                <h3>Our Mission</h3>
                                <p>Empower enterprises and investors with strategic intelligence and technology solutions that accelerate growth, minimize risk, and unlock competitive advantages in dynamic African markets.</p>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={abimg2} alt="" />
                                </div>
                                <h3>Our Vision</h3>
                                <p>Become the leading strategic partner for enterprises, PE/VC firms, and technology vendors seeking data intelligence, market insights, and optimized IT distribution in emerging African markets.</p>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={abimg3} alt="" />
                                </div>
                                <h3>Our Approach</h3>
                                <p>Combining deep industry expertise, advanced technology platforms, and strategic partnerships to deliver integrated solutions that create measurable value and sustainable competitive advantage.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MissionVission;