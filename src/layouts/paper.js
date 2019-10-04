/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import './paper.css';

const BodyWrapper = Styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgb(40,40,40);
  padding: 100px;

  & > div {
    margin: 0 auto;
  }

  @media print {
    width: initial;
    min-height: initial;
    background-color: initial;
    padding: initial;

    & > div {
      margin: initial;
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <BodyWrapper>
      {children}
    </BodyWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
