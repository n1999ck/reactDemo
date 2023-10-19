import {render, screen} from '@testing-library/react';
import Nav from '../components/Nav';
import React from 'react';

test('renders learn react link', () => {
  render(<Nav />);
  const linkElement = screen.getByText(/APOD/i);
  expect(linkElement).toBeInTheDocument();
});
