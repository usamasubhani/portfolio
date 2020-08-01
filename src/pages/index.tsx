import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import Hero from '../components/Hero/hero';
import About from '../components/About/about';
import Projects from '../components/Projects/projects';
import Contact from '../components/Contact/contact';

// export const query = graphql`
//     query ProjectsQuery {
//         allContentfulProjects {
//         edges {
//             node {
//             name
//             link
//             code
//             image {
//                 file {
//                 url
//                 }
//             }
//             }
//         }
//         }
//     }
// `;

export const query = graphql`
query ProjectsQuery {
  allContentfulProjects {
  edges {
      node {
        id
        name
        link
        code
        image {
            fluid {
              ...GatsbyContentfulFluid
          }
        }
      }
  }
  }
}
`;

const IndexPage = ({data}:any) => {
  const projects = data.allContentfulProjects.edges;
  console.log(projects)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
      <Projects projectsList={projects}/>
      <Contact />
    </Layout>
  );
}

export default IndexPage;
