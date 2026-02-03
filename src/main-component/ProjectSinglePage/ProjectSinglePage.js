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
import Logo from '../../images/logo.png'
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
                                            <li><span>Client:</span> Enterprise Customer</li>
                                            <li><span>Location:</span> Harare, Zimbabwe</li>
                                            <li><span>Status:</span> Completed</li>
                                            <li><span>Duration:</span> 6 Weeks</li>
                                            <li><span>Tags:</span> IT Distribution, Infrastructure</li>
                                        </ul>
                                    </div>
                                    <h2>Enterprise Hardware Rollout</h2>
                                    <p>Digiroc delivered a large‑scale hardware and software rollout for a multi‑site enterprise, covering laptops, desktops, servers, networking, and storage. The project included procurement, logistics coordination, and on‑site deployment support.</p>
                                    <p>Our team ensured vendor‑authorized sourcing, compliance with enterprise standards, and a structured deployment plan that minimized downtime while improving performance and reliability.</p>

                                    <div className="challange-solution-section">
                                        <div className="theme-accordion-s1">
                                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                                <AccordionSummary
                                                    expandIcon={""}
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                >
                                                    <Typography>The Challenge Was</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        <p>The client needed a fast, secure rollout across multiple sites with strict timelines, procurement controls, and warranty coverage.</p>
                                                        <ul>
                                                            <li><i className="ti-check"></i>Coordinating multi‑site delivery and installation</li>
                                                            <li><i className="ti-check"></i>Ensuring compliance, licensing, and asset tracking</li>
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
                                                    <Typography>Our Solution Was</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                    <p>Digiroc provided vendor‑authorized sourcing, staged logistics, and a deployment team to execute the rollout with minimal disruption.</p>
                                                            <ul>
                                                                <li><i className="ti-check"></i>Hardware, software, and licensing delivered on schedule</li>
                                                                <li><i className="ti-check"></i>Post‑deployment support and warranty management</li>
                                                            </ul>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                    </div>
                                    <div className="prev-next-project">
                                        <div>
                                            <Link onClick={ClickHandler} to={'/project-single/Server-Storage-Deployment'}>
                                                <div className="icon">
                                                    <i className="fi flaticon-back"></i>
                                                </div>
                                                <span>Previous project</span>
                                                <h5>Server & Storage Deployment</h5>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link onClick={ClickHandler} to={'/project-single/Microsoft-365-Enablement'}>
                                                <div className="icon">
                                                    <i className="fi flaticon-next"></i>
                                                </div>
                                                <span>Next project</span>
                                                <h5>Microsoft 365 Enablement</h5>
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
