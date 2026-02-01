import React from 'react'

const WorkProcess = (props) => {
    return (
        <section className="work-process-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div className="section-title">
                            <span>Our work process</span>
                            <h3>From market research to implementation, Digiroc delivers end-to-end solutions that transform data into strategic advantage and enable seamless technology adoption for enterprise growth.</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col col-lg-10 offset-lg-1">
                        <div className="work-process-grids clearfix">
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-idea"></i>
                                </div>
                                <h3>01. Discover & Analyze</h3>
                                <p>Deep market research and data analysis to identify opportunities and challenges</p>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-diamond"></i>
                                </div>
                                <h3>02. Strategic Planning</h3>
                                <p>Develop actionable strategies based on data-driven insights and market intelligence</p>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-sheriff"></i>
                                </div>
                                <h3>03. Execute & Deliver</h3>
                                <p>Expert implementation and ongoing support to ensure measurable results</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkProcess;