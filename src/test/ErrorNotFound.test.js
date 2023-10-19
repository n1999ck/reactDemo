import {render, screen} from '@testing-library/react';
import React from 'react';
import ErrorNotFound from '../components/ErrorNotFound';

test('Renders error statement', () => {
  render(<ErrorNotFound />);
  const pageText =
    screen.getByText(/Sorry, an unexpected error has occurred./i);
  expect(pageText).toBeInTheDocument();
});
