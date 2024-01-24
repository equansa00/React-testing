import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CoinFlipper from './CoinFlipper';

beforeEach(() => {
  jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(0.25)  // Simulate heads
    .mockReturnValueOnce(0.75); // Simulate tails
});

afterEach(() => {
  Math.random.mockRestore();
});

it('displays no coin image initially and updates count correctly', () => {
  const { getByText, queryByAltText } = render(<CoinFlipper />);
  expect(queryByAltText("heads")).toBeNull();
  expect(queryByAltText("tails")).toBeNull();

  const flipButton = getByText("Flip Coin");
  fireEvent.click(flipButton); // Flip to heads
  expect(queryByAltText("heads")).toBeInTheDocument();

  fireEvent.click(flipButton); // Flip to tails
  expect(queryByAltText("tails")).toBeInTheDocument();
});