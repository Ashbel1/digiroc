import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import rv1 from '../../images/slider/one.jpg'
import rv2 from '../../images/slider/one.jpg'



const ProductTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }



    return (
        <div className="row">
            <div className="col col-xs-12">
                <div className="product-info">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                               Description
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >

                            Review
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <div id="Schedule">
                                    <p>Digiroc Technologies provides enterprise IT distribution and solutions across Africa, delivering hardware, software, cloud platforms, and infrastructure services with reliable logistics and support.</p>
                                    <p>We work closely with enterprise customers to ensure secure deployment, licensing compliance, and long‑term lifecycle support across all environments.</p>
                                    </div>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                        <div className="row">
                            <div className="col col-lg-10 col-12">
                                <div className="client-rv">
                                    <div className="client-pic">
                                        <img src={rv1} alt=""/>
                                    </div>
                                    <div className="details">
                                        <div className="name-rating-time">
                                            <div className="name-rating">
                                                <div>
                                                    <h4>Jenefar Willium</h4>
                                                </div>
                                                <div className="product-rt">
                                                    <span>25 Sep 2021</span>
                                                    <div className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p>Digiroc delivered our hardware rollout on time with excellent support and smooth procurement coordination.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-rv">
                                    <div className="client-pic">
                                         <img src={rv2} alt=""/>
                                    </div>
                                    <div className="details">
                                        <div className="name-rating-time">
                                            <div className="name-rating">
                                                <div>
                                                    <h4>Maria Bannet</h4>
                                                </div>
                                                <div className="product-rt">
                                                    <span>28 Sep 2021</span>
                                                    <div className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p>Great vendor access and reliable delivery. Their cloud enablement support accelerated our Microsoft 365 deployment.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col col-lg-12 col-12 review-form-wrapper">
                                <div className="review-form">
                                    <h4>Add a review</h4>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                    <form onSubmit={SubmitHandler}>
                                        <div className="give-rat-sec">
                                            <p>Your rating *</p>
                                            <div className="give-rating">
                                                <label>
                                                    <input type="radio" name="stars" value="1" />
                                                    <span className="icon">★</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="stars" value="2" />
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="stars" value="3" />
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="stars" value="4" />
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="stars" value="5" />
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" placeholder="Name *"
                                                required/>
                                        </div>
                                        <div>
                                            <input type="email" className="form-control" placeholder="Email *"
                                                required/>
                                        </div>
                                        <div>
                                            <textarea className="form-control"
                                                placeholder="Review *"></textarea>
                                        </div>
                                        <div className="rating-wrapper">
                                            <div className="submit">
                                                <button type="submit" className="theme-btn-s2">Post
                                                    review</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
    );
}

export default ProductTabs;