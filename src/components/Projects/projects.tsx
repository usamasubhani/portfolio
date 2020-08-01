import React from 'react'
import { graphql } from 'gatsby'
import './projects.css'
import Project from './project'


type Props = {
    projectsList: any;
  };

const Projects = ({projectsList}: Props) => {
    console.log(projectsList)
    const projects = projectsList
    .map(edge => {
      const { id, name, link, code } = edge.node;
      const { fluid  } = edge.node.image;
    //   const { url } = edge.node.image.file
      return { id, name, fluid, link, code };
    });
    // console.log(projects)
    return (
        <div className="projects">
            <h3 style={{width:`100%`, textAlign:`center`}}>Featured Projects<span className="red">.</span></h3>
            {projects.map(node => {
                return (
                    <Project
                    key={node.id}
                    name={node.name}
                    image={node.fluid}
                    link={node.link}
                    code={node.code}
                    />
                )
            })}
            {/* <Project name={data.name} />
            <Project />
            <Project />
            <Project /> */}
        </div>
    )
}

export default Projects

