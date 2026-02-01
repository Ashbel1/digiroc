import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';


const ServiceTab = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="service-single-tab">
            <ul className="nav">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Research Methodology
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >

                            Market Intelligence
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >

                            Specializations
                        </NavLink>
                    </NavItem>
                </Nav>
            </ul>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <p>Our research methodology combines quantitative and qualitative approaches to deliver comprehensive market intelligence. We leverage primary research through stakeholder interviews and surveys, complemented by secondary research from industry databases and proprietary sources. Advanced analytics and data visualization tools transform raw data into actionable insights that support strategic decision-making.</p>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <p>Digiroc delivers market intelligence that goes beyond surface-level data. We provide deep competitive analysis, consumer behavior insights, regulatory landscape assessment, and emerging trend identification. Our intelligence supports investment due diligence, market entry strategies, competitive positioning, and portfolio optimization for PE/VC firms and enterprises.</p>
                </TabPane>
                <TabPane tabId="3">
                    <p>Our specialized research capabilities cover multiple industries including technology, telecommunications, financial services, consumer goods, and healthcare. We have deep expertise in African market dynamics, emerging market assessment, cross-border commerce, digital transformation trends, and regulatory environments. Each research engagement is customized to address specific client objectives and strategic questions.</p>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default ServiceTab;