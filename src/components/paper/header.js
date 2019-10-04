import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 20%;
  flex-grow: 0;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-between;

  p {
    margin: 0;
    padding: 0;
  }

  background-color: #ccc;
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
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  max-height: 50%;
  font-family: 'Arimo', sans-serif;
  font-weight: normal;
  font-size: 10pt;
`;

const Name = styled.div`
  position: absolute;
  bottom: 0;
`;

const FirstName = styled.h1`
  padding: 0;
  margin: 0;
  line-height: 1em;
  position: absolute;
  bottom: calc(0.75 * 72pt - 12pt / 2);
  left: 1%;
  text-transform: uppercase;
  font-family: 'Arimo', sans-serif;
  font-weight: normal;
  font-size: 12pt !important;
`;

const SurName = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 70pt !important;
  line-height: 0.75em;
  font-family: 'Roboto Slab', serif;
  font-weight: normal;
  font-size: 72pt;
`;

const Header = () => {
  return(
    <HeaderWrapper>
      <BuzzWords>
        <p>Foo</p>
        <p>Bar</p>
        <p>Baz</p>
      </BuzzWords>
      <ContactInfo>
        <p>Me</p>
        <p>Moi</p>
      </ContactInfo>
      <Name>
        <FirstName>Sup</FirstName>
        <SurName>preHeader</SurName>
      </Name>
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