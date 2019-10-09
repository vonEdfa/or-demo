import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OuterWrapper = styled.div`
  position: relative;
  
  &:nth-child(2) {
    margin-top: ${props => props.extraPadding ? '3.5em' : '2.5em'};
  }
`;

const FirstName = styled.h1`
  padding: 0;
  margin: 0;
  line-height: 1em;
  position: absolute;
  top: ${props => props.extraPadding ? '-1.2em' : '-0.2em'};
  left: 0;
  text-transform: uppercase;
  font-family: 'Arimo', sans-serif;
  font-weight: normal;
  font-size: 12pt !important;
  color: #a0a5a7;
  z-index: 10;
`;

const SurName = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 70pt !important;
  line-height: 0.74em;
  font-family: 'Roboto Slab', serif;
  font-weight: normal;
  font-size: 72pt;
  position: relative;
  left: -0.01em; /* <- visually align the first letter with the smaller fonts */
`;

const StylizedName = ({ firstName, surName }) => {
  const surNameStartsWithCapitalLetter = `${surName}`.slice(0, 1).toUpperCase() === `${surName}`.slice(0, 1);
  return (
    <OuterWrapper
      extraPadding={surNameStartsWithCapitalLetter}
    >
      <FirstName
        extraPadding={surNameStartsWithCapitalLetter}
      >
        {firstName.toString()}
      </FirstName>
      <SurName>
        {surName.toString()}
      </SurName>
    </OuterWrapper>
  );
};

StylizedName.defaultProps = {
  firstName: 'Name',
  surName: 'Surname',
};

StylizedName.propTypes = {
  firstName: PropTypes.string,
  surName: PropTypes.string,
};

export default StylizedName;