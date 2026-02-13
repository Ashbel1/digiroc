import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'


const ContactSection = () => {

    return (
        <section className="contact-section">
            <div className="content-area">
                <div className="left-col">
                    <div className="contact-message">
                        <h4>Don't hesitate to contact us. Phone: +263718911411, Email: info@digiroc.com</h4>
                    </div>
                </div>
                <div className="right-col">
                        <div className="section-title-s2">
                            <span>Contact</span>
                            <h2>Request a quote or consultation</h2>
                        </div>
                    <div className="contact-form">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ContactSection;
