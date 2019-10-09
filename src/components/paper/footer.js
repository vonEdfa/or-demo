import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: '100%';
  flex-grow: 0;
  display: flex;
  flex-direction: column;
`;

const PageFooter = styled.div`
  display: flex;
  justify-content: space-between;
  color: #54595b;

  div {
    border-left: solid 1px #54595b;
    width: 0;
    overflow: visible;
    white-space: nowrap;

    &:first-child {
      margin-left: 2em;
    }
    &:last-child {
      margin-right: 2em;
    }

    p {
      font-family: "Arimo";
      font-weight: bold;
      font-size: 6pt;
      margin: 0;
      position: relative;
      top: -0.5em;
      left: 1em;
      line-height: 1em;
      padding-bottom: 2rem;
    }
  }
`;

const Footer = ({ minimal, print }) => {
  return(
    <FooterWrapper>
      {!minimal && (
        <p>Linkedin</p>
      )}
      {(!print && !minimal) && (
        <p>Get the print friendly version</p>
      )}
      <PageFooter>
        <div>
          <p>contact@example.com</p>
        </div>
        <div>
          <p>OCTOBER 2019</p>
        </div>
        <div>
          <p>n/n</p>
        </div>
      </PageFooter>
    </FooterWrapper>
  );
};

Footer.defaultProps = {
  minimal: false,
  print: false,
};

Footer.propTypes = {
  minimal: PropTypes.bool,
  print: PropTypes.bool,
};

export default Footer;