import React from 'react'
import './hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-title-container">
                <h1>
                    Hello, <br/> I am <br/> Usama Subhani
                </h1>
            </div>
            <div className="social-icons-container">
            <a href="https://twitter.com/basedusama" target="_blank">twitter</a>
            <a href="https://github.com/usamasubhani" target="_blank">github</a>
            <a href="https://www.linkedin.com/in/usamasubhani/" target="_blank">linkedin</a>
            </div>
        </div>
    )
}

export default Hero
