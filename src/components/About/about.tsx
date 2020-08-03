import React from 'react'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const About = () => {
    return (
        <div className="about-container">
            <div className="about-description-container about-contnent">
                <p>I am a Full Stack Developer.</p>
                <p>I can develop effective and efficient software products, using best practices and cutting edge technologies. I am driven by the goal of improving human's lives through my knowledge and skills.</p>
            </div>
            <div className="about-interests-container about-contnent">
                <p>I am interested in: </p>
                <p><FontAwesomeIcon icon={faArrowRight}/>  Artificial Intelligence</p>
                <p><FontAwesomeIcon icon={faArrowRight}/>  Open Source</p>
                <p><FontAwesomeIcon icon={faArrowRight}/>  Digital Minimalism</p>
            </div>
        </div>
    )
}

export default About
