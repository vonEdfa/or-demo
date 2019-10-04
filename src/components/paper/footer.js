import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => {
  return(
    <footer
      style={{
        width: '100%',
        height: '20%',
        flexGrow: 0,

        backgroundColor: '#ccc',
      }}
    >
      Footer
    </footer>
  );
};

Footer.defaultProps = {
  minimal: false,
};

Footer.propTypes = {
  minimal: PropTypes.bool,
};

export default Footer;