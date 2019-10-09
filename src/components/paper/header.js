import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StylizedName from './stylized-name';

const HeaderWrapper = styled.header`
  width: 100%;
  flex-grow: 0;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin: 0;
    padding: 0;
  }

  background-color: #232526;
  color: #e6e6e6;
`;

const HeaderTop = styled.div`
  width: 100%;
  flex-grow: 0;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    margin: 0;
    padding: 0;
  }
`;

const BuzzWords = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-height: 50%;
  text-transform: uppercase;
  font-family: 'Arimo', sans-serif;
  font-weight: bold;
  font-size: 12pt;

  p:first-child {
    font-family: 'Roboto Slab', serif;
    font-weight: normal;
    font-size: 14pt;
  }
  p:after {
    content: '.'
  }
  p {
    padding-bottom: 0.25em;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  max-height: 50%;
  font-family: 'Arimo', sans-serif;
  font-weight: normal;
  font-size: 10pt;
  color: #a0a5a7;

  p, a {
    padding-bottom: 0.5em;
  }
`;

const Header = () => {

  return(
    <HeaderWrapper>
      <HeaderTop>
        <BuzzWords>
          <p>Foo</p>
          <p>Bar</p>
          <p>Baz</p>
        </BuzzWords>
        <ContactInfo>
          <p>@tweetMe</p>
          <p>contact@example.com</p>
        </ContactInfo>
      </HeaderTop>
      <StylizedName/>
    </HeaderWrapper>
  );
};

Header.defaultProps = {
  minimal: false,
};

Header.propTypes = {
  minimal: PropTypes.bool,
};

export default Header;