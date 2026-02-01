import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Team from '../../api/team'
import Logo from '../../images/logo-2.png'

const TeamSinglePage = (props) => {
    const { slug } = useParams()

    const TeamDetails = Team.find(item => item.slug === slug)

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar hclass={'header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={TeamDetails.name} pagesub='team Single' />
            <section className="team-sigle-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-12">
                            <div className="team-single-sidebar">
                                <div className="widget team-widget">
                                    <h3>Our teams</h3>
                                    <ul>
                                        {Team.map((team, aitem) => (
                                            <li key={aitem}><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.name}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-8 col-12">
                            <div className="team-single-content">
                                <div className="team">
                                    <div className="img-holder">
                                        <img src={TeamDetails.tImg} alt="" />
                                    </div>
                                    <div className="team-single-info">
                                        <div className="info">
                                            <h3>{TeamDetails.name}</h3>
                                            <span>{TeamDetails.title}</span>
                                            <ul>
                                                <li><i className="ti-mobile"></i><span>Phone: </span>+263718911411</li>
                                                <li><i className="ti-email"></i><span>Email: </span>info@digiroc.co.zw</li>
                                                <li><i className="ti-timer"></i><span>Experience: </span>11 Years</li>
                                                <li><i className="ti-location-pin"></i><span>Address: </span>45 big fella street, sweet home, Bela</li>
                                            </ul>
                                        </div>
                                        <div className="social">
                                            <ul>
                                                <li><Link onClick={ClickHandler} to="/teams-single/Michel-Troat"><i className="ti-facebook"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="/teams-single/Michel-Troat"><i className="ti-twitter-alt"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="/teams-single/Michel-Troat"><i className="ti-linkedin"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="/teams-single/Michel-Troat"><i className="ti-pinterest"></i></Link></li>
                                                <li><Link onClick={ClickHandler} to="/teams-single/Michel-Troat"><i className="ti-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-details">
                                    <h2>About Me</h2>
                                    <p>As a senior analyst at Digiroc Technologies, I specialize in market research and competitive intelligence across emerging African markets. With deep expertise in data analytics and strategic consulting, I help enterprises and investors make informed decisions through comprehensive market insights and actionable intelligence.</p>
                                    <h2>Experience</h2>
                                    <p>Over 8 years of experience in market research, business intelligence, and strategic consulting across technology, telecommunications, and financial services sectors. Proven track record of delivering high-impact research projects for PE/VC firms, multinational corporations, and technology vendors expanding into African markets.</p>
                                    <h2>Education</h2>
                                    <p>MBA in Business Analytics from top-tier business school, with specialized certifications in market research methodologies, data science, and strategic analysis.</p>
                                    <h2>Achievements</h2>
                                    <ul>
                                        <li>- Led 50+ market research projects across 15 African countries</li>
                                        <li>- Supported $200M+ in PE/VC investment decisions</li>
                                        <li>- Published thought leadership on African market dynamics</li>
                                        <li>- Industry recognition for market intelligence excellence</li>
                                    </ul>
                                    <h2>Skills</h2>
                                    <div className="skills">
                                        <div className="skill">
                                            <h6>Business</h6>
                                            <div className="progress">
                                                <div className="progress-bar"
                                                    role="progressbar" style={{ width: `85%` }}>
                                                </div>
                                                <span>85%</span>
                                            </div>
                                        </div>
                                        <div className="skill">
                                            <h6>Consulting</h6>
                                            <div className="progress">
                                                <div className="progress-bar"
                                                    role="progressbar" style={{ width: `95%` }}>
                                                </div>
                                                <span>95%</span>
                                            </div>
                                        </div>
                                        <div className="skill">
                                            <h6>Marketing</h6>
                                            <div className="progress">
                                                <div className="progress-bar"
                                                    role="progressbar" style={{ width: `92%` }}>
                                                </div>
                                                <span>92%</span>
                                            </div>
                                        </div>
                                        <div className="skill">
                                            <h6>Bankruptcy</h6>
                                            <div className="progress">
                                                <div className="progress-bar"
                                                    role="progressbar" style={{ width: `95%` }}>
                                                </div>
                                                <span>95%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h2>Contact Me</h2>
                                    <div className="contact-form">
                                        <form method="post" onSubmit={SubmitHandler}>
                                            <div>
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Name*" />
                                            </div>
                                            <div>
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Email*" />
                                            </div>
                                            <div className="fullwidth">
                                                <textarea className="form-control" name="note" id="note" placeholder="Case Description..."></textarea>
                                            </div>
                                            <div className="submit-area">
                                                <button type="submit" className="theme-btn">Submit It Now</button>
                                            </div>
                                        </form>
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
export default TeamSinglePage;
