import React from 'react';
import { Link } from 'gatsby';
import Styled from 'styled-components';

import Layout from '../layouts/paper';

import A4 from '../elements/a4';

import SEO from '../components/seo';

const GoBack = Styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  &, a {
    color: #fff;
  }

  @media print {
    display: none;
  }
`;

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <GoBack>
      <Link to="/">Go back to the homepage</Link>
    </GoBack>
    <A4></A4>
  </Layout>
);

export default SecondPage;