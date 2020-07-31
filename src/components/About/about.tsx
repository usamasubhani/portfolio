import React from 'react'
import './about.css'
const About = () => {
    return (
        <div className="about-container">
            <div className="about-description-container about-contnent">
                <p>This is my new portfolio. It is built using TypeScript, Gatsby and Contentful</p>
                <p>I am a Full Stack Software Developer.</p>
                <p>I help companies and individuals in optimizing workflows, automating processes, developing new products and updating/fixing existing codebases.</p>
            </div>
            <div className="about-interests-container about-contnent">
                <p>I am interested in: </p>
                <p>>  Artificial Intelligence</p>
                <p>>  Open Source</p>
                <p>>  Digital Minimalism</p>
            </div>
        </div>
    )
}

export default About
