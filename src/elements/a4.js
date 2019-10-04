import React from 'react';
import PropTypes from 'prop-types';

import ISO216 from './iso216-paper';

import Header from '../components/paper/header';
import Content from '../components/paper/content';
import Footer from '../components/paper/footer';

const A4 = ({ children }) => {
  return(
    <ISO216 pdfPreview={true} showDebug={true} paperMargins='5mm 5mm 0'>
      <Header/>
      <Content>
        {children}
      </Content>
      <Footer/>
    </ISO216>
  );
};

A4.defaultProps = {
  children: '',
};

A4.propTypes = {
  children: PropTypes.node,
};

export default A4;