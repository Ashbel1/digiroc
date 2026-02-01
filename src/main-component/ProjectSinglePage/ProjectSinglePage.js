import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom'
import Projects from '../../api/project'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo-2.png'
import { Link } from "react-router-dom";

const ProjectSinglePage = (props) => {

    const { slug } = useParams()

    const projectDetails = Projects.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Fragment>
            <Navbar hclass={'header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={projectDetails.title} pagesub={'Project'} />
            <section className="project-sigle-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="project-single-content">
                                <div className="img-holder">
                                    <img src={projectDetails.pImg} alt="" />
                                </div>
                                <div className="content-area">
                                    <div className="project-info">
                                        <ul>
                                            <li><span>Client:</span> Themegeniuslab</li>
                                            <li><span>Location:</span> Dreem city hold street</li>
                                            <li><span>Status:</span> Completed</li>
                                            <li><span>Duration:</span> 1 Month</li>
                                            <li><span>Tags:</span> Consulting, Business</li>
                                        </ul>
                                    </div>
                                    <h2>Enterprise Market Intelligence Project</h2>
                                    <p>Digiroc executed a comprehensive market intelligence and analytics engagement for a leading technology distributor expanding into emerging African markets. The project combined deep market research, competitive analysis, and data-driven insights to support strategic market entry decisions and investment planning across multiple jurisdictions.</p>
                                    <p>Our team delivered actionable intelligence on market sizing, competitive landscapes, regulatory environments, and consumer behavior patterns. The insights enabled our client to optimize their go-to-market strategy, identify high-potential partnerships, and make data-driven investment decisions that minimized risk while maximizing market opportunity.</p>

                                    <div className="challange-solution-section">
                                        <div className="theme-accordion-s1">
                                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                                <AccordionSummary
                                                    expandIcon={""}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                >
                                                    <Typography>The Challange Was</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        <p>Our client needed comprehensive market intelligence across five African markets to support a major expansion initiative. They required deep understanding of competitive dynamics, regulatory requirements, consumer preferences, and distribution infrastructure in each target market to inform strategic investment decisions.</p>
                                                        <ul>
                                                            <li><i className="ti-check"></i>Multi-market competitive analysis required</li>
                                                            <li><i className="ti-check"></i>Complex regulatory landscape assessment needed</li>
                                                        </ul>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                                <AccordionSummary
                                                    expandIcon={""}
                                                    aria-controls="panel2bh-content"
                                                    id="panel2bh-header"
                                                >
                                                    <Typography>Our Solutions Was</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                    <p>Digiroc deployed a comprehensive research methodology combining primary and secondary research, stakeholder interviews, and advanced analytics. We delivered detailed market reports, competitive intelligence dashboards, and strategic recommendations that enabled confident market entry and investment decisions.</p>
                                                            <ul>
                                                                <li><i className="ti-check"></i>Data-driven market opportunity assessment delivered</li>
                                                                <li><i className="ti-check"></i>Actionable strategic recommendations provided</li>
                                                            </ul>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                    </div>
                                    <div className="prev-next-project">
                                        <div>
                                            <Link onClick={ClickHandler} to={'/project-single/Investment-planning'}>
                                                <div className="icon">
                                                    <i className="fi flaticon-back"></i>
                                                </div>
                                                <span>Previous project</span>
                                                <h5>Busines consulting Project</h5>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link onClick={ClickHandler} to={'/project-single/Financial-Advices'}>
                                                <div className="icon">
                                                    <i className="fi flaticon-next"></i>
                                                </div>
                                                <span>Next project</span>
                                                <h5>Busines consulting Project</h5>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectSinglePage;
