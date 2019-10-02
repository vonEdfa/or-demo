import React, { Component } from 'react';
import PropTypes from 'prop-types';

const iso216AspectRatio = 1.4142; // 1:1.4142

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
    const actualSize = { 
      height: this.paperElement.clientHeight,
      width: this.paperElement.clientWidth
    };
    this.setState({ actualSize });
  }

  render() {
    const { width, height, fitWidth, children } = this.props;

    const outerElementStyle = {
      position: 'relative',
      border: 'solid 1px rgb(240, 240, 240, 0.65)',
      boxShadow: '0px 0px 20px rgb(240, 240, 240)'
    };
    if (fitWidth) {
      outerElementStyle.width = width;
      outerElementStyle.paddingTop = `${100 * iso216AspectRatio}%`;
    } else {
      outerElementStyle.height = height;
      outerElementStyle.width = `calc(${height} * ${1 / iso216AspectRatio})`;
    }

    return (
      <div
        ref={ (paperElement) => this.paperElement = paperElement }
        style={ outerElementStyle }
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        >
          <div
            style={{
              position:'absolute',
              right: 0,
            }}
          >
            <p>
              H: {this.state.actualSize.height}
              <br/>
              W: {this.state.actualSize.width}
            </p>
          </div>
          {children}
        </div>
      </div>
    );
  }
}

PaperLayout.defaultProps = {
  children: '',
  fitWidth: true,
  width: '100%',
  height: '90vh',
};

PaperLayout.propTypes = {
  children: PropTypes.node,
  fitWidth: PropTypes.bool,
  width: PropTypes.width,
  height: PropTypes.height,
};

export default PaperLayout;