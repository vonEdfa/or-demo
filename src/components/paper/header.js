import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const HeaderWrapper = Styled.header`
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

const BuzzWords = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-height: 50%;
`;

const ContactInfo = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  max-height: 50%;
`;

const Name = Styled.div`
  position: absolute;
  bottom: 0;
`;

const FirstName = Styled.h1`
  padding: 0;
  margin: 0;
  line-height: 1em;
  position: absolute;
  top: -10%;
  left: 1%;
`;

const SurName = Styled.h1`
  padding: 0;
  margin: 0;
  font-size: 70pt !important;
  line-height: 0.75em;
`;

const Header = () => {
  return(
    <HeaderWrapper>
      <BuzzWords>
        <p>Foo.</p>
        <p>Bar.</p>
        <p>Baz.</p>
      </BuzzWords>
      <ContactInfo>
        <p>Me</p>
        <p>Moi</p>
      </ContactInfo>
      <Name>
        <FirstName>Pre</FirstName>
        <SurName>Header</SurName>
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