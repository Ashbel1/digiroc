import React from "react";
import abimg1 from '../../images/slider/one.jpg'
import abimg2 from '../../images/slider/one.jpg'
import abimg3 from '../../images/slider/one.jpg'


const MissionVission = () => {
    return (
        <section className="mission-vision-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-8 col-lg-10">
                        <div className="title-area">
                            <h2>Digiroc Technologies powers enterprise growth through reliable IT distribution, cloud enablement, and infrastructure services across African markets.</h2>
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
                                <p>Enable enterprises with dependable access to hardware, software, cloud platforms, and infrastructure that keep operations secure, connected, and productive.</p>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={abimg2} alt="" />
                                </div>
                                <h3>Our Vision</h3>
                                <p>Be the most trusted enterprise IT distributor and solutions partner for organizations modernizing across Africa.</p>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={abimg3} alt="" />
                                </div>
                                <h3>Our Approach</h3>
                                <p>We combine vendor partnerships, technical expertise, and delivery excellence to provide end-to-end enterprise solutions from procurement to support.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MissionVission;