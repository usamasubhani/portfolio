import React from 'react'
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const About = () => {
    return (
        <div className="about-container">
            <div className="about-description-container about-contnent">
                <p>I am a Full Stack Developer<span className="red">.</span></p>
                <p>I can develop effective and efficient software products<span className="red">,</span> using cutting edge technologies and best practices<span className="red">.</span></p>
                <p>Driven by the goal of improving human's lives through technology<span className="red">,</span> I am committed to life long learning and hard work to build a better future<span className="red">.</span></p>
            </div>
            <div className="about-interests-container about-contnent">
                <p>I am interested in<span className="red">:</span> </p>
                <p><FontAwesomeIcon icon={faArrowRight}/>  Artificial Intelligence</p>
                <p><FontAwesomeIcon icon={faArrowRight}/>  Open Source</p>
                <p><FontAwesomeIcon icon={faArrowRight}/>  Digital Minimalism</p>
            </div>
        </div>
    )
}

export default About
