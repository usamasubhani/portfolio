import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import Hero from '../components/Hero/hero';
import About from '../components/About/about';
import Projects from '../components/Projects/projects';
import Contact from '../components/Contact/contact';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Projects />
    <Contact />
  </Layout>
);

export default IndexPage;
