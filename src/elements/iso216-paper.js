import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const iso216AspectRatio = 1.4142; // 1:1.4142
const paperSizes = {
  'A4': { width: '210mm', height: '297mm'},
};
const supportedSizes = Object.keys(paperSizes);
const defaultPaperMargin = '2.54cm';

const AspectRatioWrapper = styled.div`
  position: relative;
  /* border: solid 1px rgba(14, 14, 14, 0.14); */
  box-shadow: 0px 0px 20px rgb(14, 14, 24);
  overflow: hidden;

  background-color: #e6e6e6;
  color: #232526;
  font-family: 'Roboto Slab', Georgia, 'Times New Roman', Times, serif; /* TODO: Make/use font variables instead */

  @media print {
    border: initial;
    box-shadow: initial;
    width: 100%;
    height: 100vh;
  }

  ${props => props.pdfPreview ? css({
    width: paperSizes[props.paperSize].width,
    height: paperSizes[props.paperSize].height,
    fontSize: '12pt',

    h1: {
      fontSize: '24pt',
    }
  }) : css({
    width: '100%',
    paddingTop: `${100 * iso216AspectRatio}%`,
  })}
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;

  > div {
    padding: ${props => props.paperMargins};
    /* padding-right: 2.54cm; */
    padding-top: 0;
    padding-bottom: 0;
  }
  > header, > div:first-child {
    padding: ${props => props.paperMargins};
    padding-bottom: 0;
  }
  > footer, > div:last-child {
    padding: ${props => props.paperMargins};
    padding-top: 0;
  }
`;

const Debug = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 100;
  padding: 0 !important;
  transition-duration: 0.2s;

  @media print {
    display: none;
  }

  &:active {
    pointer-events: none;
  }

  > div {
    padding: 5px 10px 5px 10px !important;
    margin: 0;
    background-color: black;
    color: white;
    opacity: 0.6;
    font-size: 12px;
    line-height: 1.3em;
    font-family: 'Source Code Pro', 'Courier New', Courier, monospace;
    display: flex;
    align-items: center;
    border-radius: 5px;
    position: relative;
    pointer-events: none;
    transition-duration: 0.2s;
    transition-delay: 2s;
  }

  &:hover > div, &:active > div, &:focus > div {
    opacity: 0.1;
    transition-delay: 0s;
  }
  &:active > div {
    pointer-events: none;
    opacity: 0;
  }

  > div p, > div div {
    margin: 0;
    padding: 0;
    pointer-events: none;
    user-select: none;
  }
  > div p.size {
    margin-right: 10px;
    font-size: 1.5em;
  }
`;

class PaperLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actualSize: {
        height: 0,
        width: 0,
      }
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.calculateActualSize);
    this.calculateActualSize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateActualSize);
  }

  calculateActualSize = () => {
    if (!this.paperElement) {
      return;
    }

    const actualSize = { 
      height: this.paperElement.clientHeight,
      width: this.paperElement.clientWidth,
      heightMm: this.calculatePxToMm(this.paperElement.clientHeight),
      widthMm: this.calculatePxToMm(this.paperElement.clientWidth)
    };
    this.setState({ actualSize });
  }

  calculatePxToMm = (px) => {
    if (!this.calcMm) {
      return 0;
    }
    return Math.round(px / (this.calcMm.clientWidth / 100));
  }

  render() {
    const {
      children,
      paperSize,
      paperMargins,
      pdfPreview,
      showDebug,
    } = this.props;

    const { actualSize } = this.state;

    // TODO: Cleanup!
    // if (fitWidth) {
    //   outerElementStyle.width = width;
    //   outerElementStyle.paddingTop = `${100 * iso216AspectRatio}%`;
    // } else {
    //   outerElementStyle.height = height;
    //   outerElementStyle.width = `calc(${height} * ${1 / iso216AspectRatio})`;
    // }

    return (
      <AspectRatioWrapper
        ref={ (paperElement) => this.paperElement = paperElement }
        paperSize={ paperSize }
        pdfPreview={ pdfPreview }
      >
        <ContentWrapper
          paperMargins={paperMargins}
        >
          {showDebug && (
            <Debug>
              <div>
                {pdfPreview && <p className='size'>{paperSize}</p>}
                <p>
                  W: {actualSize.width}px ({actualSize.widthMm}mm)
                  <br/>
                  H: {actualSize.height}px ({actualSize.heightMm}mm)
                </p>
              </div>
              <div ref={ (calcMm) => this.calcMm = calcMm } style={{ width: '100mm', visibility: 'hidden', position: 'absolute' }} />
            </Debug>
          )}
          {children}
        </ContentWrapper>
      </AspectRatioWrapper>
    );
  }
}

PaperLayout.defaultProps = {
  children: '',
  landscape: false, // TODO: Implement
  paperMargins: defaultPaperMargin,
  paperSize: 'A4',
  pdfPreview: false,
  showDebug: false,
};

PaperLayout.propTypes = {
  children: PropTypes.node,
  landscape: PropTypes.bool,
  paperMargins: PropTypes.string,
  paperSize: PropTypes.oneOf(supportedSizes),
  pdfPreview: PropTypes.bool,
  showDebug: PropTypes.bool,
};

export default PaperLayout;