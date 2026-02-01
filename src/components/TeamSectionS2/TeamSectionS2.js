import React from 'react'
import { Link } from 'react-router-dom'
import Team from '../../api/team'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSectionS2 = (props) => {

    return (
        <div className={`team-section section-padding ${props.tmClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-s2">
                            <span>Team members</span>
                            <h2>See our passionate <br />team members</h2>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                        <div className="title-text">
                            <p>Our experienced team combines deep industry expertise in market research, data analytics, and IT distribution to deliver strategic solutions that drive measurable business outcomes for enterprises and investors across Africa.</p>
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
                                        <h5><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.name}</Link></h5>
                                        <span>{team.title}</span>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSectionS2;