import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Team from '../../api/team'
import ModalVideo from 'react-modal-video'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {

    const [isOpen, setOpen] = useState(false)

    return (
        <section className="cta-with-team-section section-padding">
            <div className="bg"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-8 col-lg-10">
                        <div className="cta-content">
                            <div className="video-holder">
                                <button className="btn-wrap" onClick={() => setOpen(true)}><i className="fi flaticon-video-player" aria-hidden="true"></i><span>See how Digiroc delivers</span></button>
                            </div>
                            <h3>We deliver enterprise IT distribution, cloud enablement, and infrastructure services across Africa</h3>
                        </div>
                    </div>
                </div>
                <div className="team-section">
                    <div className="row">
                        <div className="col col-lg-6 col-12">
                            <div className="section-title-s4">
                                <span>Team members</span>
                                <h2>Meet the Digiroc <br />delivery team</h2>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-12">
                            <div className="title-text">
                                <p>Our team brings hands-on expertise in IT distribution, enterprise platforms, storage, networking, and deployment support to keep your organization running reliably.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="team-grids clearfix">
                                {Team.map((team, aitem) => (
                                    <div className="grid" key={aitem}>
                                        <div className="img-holder">
                                            <img src={team.tImg} alt="" />
                                        </div>
                                        <div className="details">
                                            <h5><Link onClick={ClickHandler} to={`/team-member/${team.slug}`}>{team.name}</Link></h5>
                                            <span>{team.title}</span>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7e90gBu4pas" onClose={() => setOpen(false)} />
        </section>
    )
}

export default TeamSection;