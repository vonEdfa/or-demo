import React from 'react';
import PropTypes from 'prop-types';

import Columns from './2col-40-60';

const Content = ({ children }) => {
  return(
    <div
      style={{
        width: '100%',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Columns>
        {children}
      </Columns>
    </div>
  );
};

Content.defaultProps = {
  children: null,
};

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;