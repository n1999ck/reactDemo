import {render, screen} from '@testing-library/react';
import React from 'react';
import ErrorNotFound from '../components/ErrorNotFound';
import {useRouteError} from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useRouteError: jest.fn(() => ({
    message: 'Sorry, an unexpected error has occurred.',
  })),
}));


// Test that error statement appears on page
test('Renders error statement', () => {
  render(<ErrorNotFound />);
  const pageText =
    screen.getByText(/Sorry, an unexpected error has occurred./i);
  expect(pageText).toBeInTheDocument();
});

test('errors log to console', () => {
  // spies on /pretends to be console.error
  // Mock implementation here - does nothing, means no error output
  const consoleErrorSpy = jest.spyOn(
      console, 'error').mockImplementation(() => {});

  // See whether console.error gets called when component renders
  render(<ErrorNotFound />);
  expect(consoleErrorSpy).toHaveBeenCalled();

  consoleErrorSpy.mockRestore(); // cleans up from messing w/errors
});

// Testing what happens when error is undefined.
// Covers branch of code in the <i> element where error evaluates false
test('error statement when error is undefined', () => {
  // Mock an undefined error
  useRouteError.mockReturnValue(undefined);
  render(<ErrorNotFound />);
  const defaultErrorText = screen.getByText(
      /Sorry, an unexpected error has occurred./i);
  // See whether page loads regular text
  expect(defaultErrorText).toBeInTheDocument();
});

// Testing what happens when error is undefined.
// Covers branch of code in the <i> element where error evaluates false
test('error message renders', () => {
  // Mock some specific error
  const specificError = {message: 'Hey look an error message'};
  useRouteError.mockReturnValue(specificError);
  render(<ErrorNotFound />);
  const specificErrorText = screen.getByText(
      /Hey look an error message/i);
  // See whether page loads regular text
  expect(specificErrorText).toBeInTheDocument();
});
