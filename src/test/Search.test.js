import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Search from '../components/Search';
import React from 'react';

afterEach(cleanup());

test('search bar exists', () => {
  render(<Search />);
  const searchBar = screen.getAllByPlaceholderText(/Search/i);
  expect(searchBar[0]).toBeInTheDocument();
})

test('renders title', () => {
  render(<Search searchInput={'horse'} />);
  const title = screen.getByText(/Benefit from NASA/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders description', () => {
  render(<Search searchInput={'horse'} />);
  const text = screen.getByText(/Power Pads/i);
  expect(text).toBeInTheDocument();
});

it('Search bar button does something when clicked', () => {
 
});