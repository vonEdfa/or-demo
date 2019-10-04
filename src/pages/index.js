import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import Paper from '../elements/iso216-paper';
import A4 from '../elements/a4';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Paper
      showDebug={true}
    >
      <p>Test</p>
    </Paper>
    <A4>
      <p>A4</p>
    </A4>
  </Layout>
);

export default IndexPage;
