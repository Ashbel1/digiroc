import React from 'react';
import ContactForm from '../ContactFrom/ContactForm'
import contactImg from '../../images/slider/one.jpg'


const ContactSection = () => {

    return (
        <section className="contact-section">
            <div className="content-area">
                <div className="left-col" style={{ backgroundImage: `url(${contactImg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '799px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="contact-message" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '30px', borderRadius: '8px', textAlign: 'center' }}>
                        <h4 style={{ color: '#fff' }}>Don't hesitate to contact us. Phone: +263718911411, Email: info@digiroc.co.zw</h4>
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
