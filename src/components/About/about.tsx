import React from 'react'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const About = () => {
    return (
        <div className="about-container">
            <div className="about-description-container about-contnent">
                <p>I am a Full Stack Developer.</p>
                <p>I help companies and individuals in optimizing workflows, automating processes, developing new products and updating/fixing existing codebases.</p>
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
