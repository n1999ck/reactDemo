import {render, screen} from '@testing-library/react';
import Search from '../components/Search';
import React from 'react';

test('search bar exists', () => {
  render(<Search />);
  const searchBar = screen.getAllByPlaceholderText(/Search/i);
  expect(searchBar).toBeInTheDocument();
})

test('renders title', () => {
  render(<Search searchInput='horse' />);
  const title = screen.getByText(/Benefit from NASA/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders description', () => {
  render(<Search searchInput='horse' />);
  const text = screen.getByText(/Power Pads/i);
  expect(text).toBeInTheDocument();
});