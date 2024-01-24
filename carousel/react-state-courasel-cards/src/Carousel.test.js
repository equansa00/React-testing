import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";
import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';
import renderer from 'react-test-renderer';

// Smoke Test
it('renders without crashing', () => {
  const photos = [{ src: "test1.jpg", caption: "Test 1" }, { src: "test2.jpg", caption: "Test 2" }];
  render(<Carousel photos={photos} />);
});

// Snapshot Test
it('matches snapshot', () => {
  const photos = [{ src: "test1.jpg", caption: "Test 1" }, { src: "test2.jpg", caption: "Test 2" }];
  const tree = renderer
    .create(<Carousel photos={photos} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it('moves to the previous image when the left arrow is clicked', () => {
  const photos = [{ src: "test1.jpg", caption: "Test 1" }, { src: "test2.jpg", caption: "Test 2" }];
  const { getByText, queryByAltText } = render(<Carousel photos={photos} />);

  // Move to the second image
  const rightArrow = getByText('Next');
  fireEvent.click(rightArrow);

  // Move back to the first image
  const leftArrow = getByText('Previous');
  fireEvent.click(leftArrow);

  expect(queryByAltText("Test 1")).toBeInTheDocument();
});

it('hides the left arrow on the first image and the right arrow on the last image', () => {
  const photos = [{ src: "test1.jpg", caption: "Test 1" }, { src: "test2.jpg", caption: "Test 2" }];
  const { getByText, queryByText } = render(<Carousel photos={photos} />);

  // Left arrow should not be visible on the first image
  expect(queryByText('Previous')).toBeNull();

  // Move to the second (last) image
  const rightArrow = getByText('Next');
  fireEvent.click(rightArrow);

  // Right arrow should not be visible on the last image
  expect(queryByText('Next')).toBeNull();
});