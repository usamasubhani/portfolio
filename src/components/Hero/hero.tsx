import React from 'react'
import './hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-title-container">
                <h2>
                    Hello<span className="red">,</span> <br/> I am <br/> Usama Subhani
                </h2>
            </div>
            <div className="social-icons-container">
                <a href="https://twitter.com/basedusama" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://github.com/usamasubhani" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/usamasubhani/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
        </div>
    )
}

export default Hero
