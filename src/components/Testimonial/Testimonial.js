import React from 'react';



const Testimonial = (prop) => {

    return (
        <section className={`testimonials-section section-padding ${prop.tClass}`}>
            <h2 className="hidden">Testimonials</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-8 col-lg-10">
                        <div className="testimonials-area">
                            <p>Digiroc's market intelligence and analytics capabilities have been instrumental in our investment decisions across emerging African markets. Their team delivers actionable insights that directly impact our portfolio performance and risk management strategies.</p>
                            <span className="quoter">Thomas Calvin</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;