import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import 'jest-styled-components';
import TestRenderer from 'react-test-renderer';

import StylizedName from '../stylized-name';

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

describe('StylizedName', () => {
  it('renders with or without props', () => {
    act(() => {
      render(<StylizedName />, container);
    });
    expect(container.textContent).toBe('Name' + 'Surname');

    act(() => {
      render(<StylizedName firstName="Hello" />, container);
    });
    expect(container.textContent).toBe('Hello' + 'Surname');

    act(() => {
      render(<StylizedName surName="World" />, container);
    });
    expect(container.textContent).toBe('Name' + 'World');

    act(() => {
      render(<StylizedName firstName="Hello" surName="World" />, container);
    });
    expect(container.textContent).toBe('Hello' + 'World');
  });

  it('renders correctly', () => {
    act(() => {
      render(<StylizedName />, container);
    });
    expect(pretty(container.innerHTML)).toMatchSnapshot();

    act(() => {
      render(<StylizedName firstName="Hello" surName="World" />, container);
    });
    expect(pretty(container.innerHTML)).toMatchSnapshot();

    act(() => {
      render(<StylizedName firstName="Hello" surName="world" />, container);
    });
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('uses the correct styles', () => {
    const withCapitalSurname = TestRenderer.create(<StylizedName firstName="Name" surName="Surname" />);
    expect(withCapitalSurname.toJSON).toMatchSnapshot();
    expect(withCapitalSurname.toTree().rendered.props.extraPadding).toBe(true);

    const withCamelCaseSurname = TestRenderer.create(<StylizedName firstName="Name" surName="von Surname" />);
    expect(withCamelCaseSurname.toJSON()).toMatchSnapshot();
    expect(withCamelCaseSurname.toTree().rendered.props.extraPadding).toBe(false);
  });
});
