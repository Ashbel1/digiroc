import React from 'react'

const Features = (props) => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="feature-grids clearfix">
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-sheriff"></i>
                                </div>
                                <h3>IT Distribution</h3>
                                <p>Enterprise technology distribution connecting global vendors with African markets through reliable logistics and value-added services</p>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-diamond"></i>
                                </div>
                                <h3>Market Research</h3>
                                <p>Comprehensive market intelligence and strategic insights tailored to African markets for investment and expansion decisions</p>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-idea"></i>
                                </div>
                                <h3>Data Analytics</h3>
                                <p>Advanced analytics transforming business data into actionable insights for operational optimization and growth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;