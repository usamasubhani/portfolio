import React from 'react'
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
type Props = {
    name: string,
    image: any
    link: string,
    code: string,
    // ImageUrl: String
}
const Project: React.FC<Props> = ({name, image, link, code}) => {
    return (
        <div className="project">
            <Img fluid={image} />
            <div className="project-details-container">
                <h4>{name}</h4>
                <div className="links-container" >
                    <a href={link}>
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                    <a href={code}>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Project
