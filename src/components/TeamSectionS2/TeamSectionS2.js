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
                            <h2>Meet the Digiroc <br />delivery team</h2>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                        <div className="title-text">
                            <p>Our team delivers enterprise IT distribution, cloud enablement, and infrastructure services with reliable logistics and support.</p>
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
    )
}

export default TeamSectionS2;