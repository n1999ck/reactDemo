import {render, screen} from '@testing-library/react';
<<<<<<< HEAD
import Search from '../src/components/Search';
import React from 'react';

test('renders learn react link', () => {
=======
import Search from '../components/Search';
import React from 'react';

test('search bar exists', () => {
>>>>>>> 28e660479dac16178d871e92297e3cac04440a8d
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