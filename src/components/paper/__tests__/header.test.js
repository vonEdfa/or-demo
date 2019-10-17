import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import 'jest-styled-components';
import TestRenderer from 'react-test-renderer';

import Header from '../header';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Header', () => {
  it('renders correctly', () => {
    const withCamelCaseSurname = TestRenderer.create(<Header/>);
    expect(withCamelCaseSurname.toJSON()).toMatchSnapshot();
  });
});