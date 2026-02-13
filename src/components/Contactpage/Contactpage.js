import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return (
        <section className="contact-pg-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-8">
                        <div className="section-title-s3">
                            <span>Contact us</span>
                            <h2>Talk to our enterprise team</h2>
                            <p>Tell us what hardware, software, or cloud solutions you need.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="contact-form">
                            <ContactForm />
                        </div>
                        <div className="contact-info clearfix">
                            <div>
                                <div className="icon">
                                    <i className="ti-email"></i>
                                </div>
                                <h5>Email</h5>
                                <p>info@digiroc.com</p>
                            </div>
                            <div>
                                <div className="icon">
                                    <i className="ti-mobile"></i>
                                </div>
                                <h5>Phone</h5>
                                <p>+263718911411</p>
                            </div>
                            <div>
                                <div className="icon">
                                    <i className="ti-location-arrow"></i>
                                </div>
                                <h5>Address</h5>
                                <p>Digiroc Technologies</p>
                                 <p>59 Ridgeway North</p>
                                  <p>Highlands</p>
                                   <p>Harare, Zimbabwe</p>
                            </div>
                        </div>

                        <div className="contact-map">
                            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.0726366347877!2d31.064726315024847!3d-17.79333368782515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a53e6b8e6b37%3A0x7d1c8f6e1a2b3c4d!2s59%20Ridgeway%20North%2C%20Highlands%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2s!4v1738416000000!5m2!1sen!2s" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Contactpage;
