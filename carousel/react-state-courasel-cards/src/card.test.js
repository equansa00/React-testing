import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Card from './Card';

it('renders without crashing', () => {
  render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={3} />);
});


it('matches snapshot', () => {
    const tree = renderer
      .create(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={3} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });