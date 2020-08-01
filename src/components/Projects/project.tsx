import React from 'react'
import Img from "gatsby-image"
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
                    <a href={link}>Link</a>
                    <a href={code}>Code</a>
                </div>
            </div>
            
        </div>
    )
}

export default Project
