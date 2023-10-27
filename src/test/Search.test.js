import {render, screen, fireEvent} from '@testing-library/react';
import Search from '../components/Search';
import React from 'react';
import axios from 'axios';

jest.mock('axios');

afterEach(() => {
  jest.restoreAllMocks();
});

test('search bar exists', () => {
  render(<Search />);
  const searchBar = screen.getAllByPlaceholderText(/Search/i);
  expect(searchBar[0]).toBeInTheDocument();
});

// https://testing-library.com/docs/dom-testing-library/api-events/
// NO idea why this test fails
test('button submits search on click', () => {
  const mockSubmitSearch = jest.fn();
  render(<Search submitSearch ={mockSubmitSearch}/>);
  fireEvent.click(screen.getByText(/Submit/i));
  expect(mockSubmitSearch).toHaveBeenCalled();
});

test('search input changes update state', () => {
  // Render search returns a React object that contains a bunch of functions
  // this code uses object destructuring to just get the getbyPlaceholderText
  const {getByPlaceholderText} = render(<Search />);
  const inputElement = getByPlaceholderText('Search');
  // testing library fireEvent function changes the input's value
  fireEvent.change(inputElement, {target: {value: 'search term'}});
  expect(inputElement.value).toBe('search term');
});

test('submitSearch executes correctly', async () => {
  // Mock func for axios get
  const mockAxiosGet = jest.fn();
  jest.spyOn(axios, 'get').mockImplementation(mockAxiosGet);

  // Make sample URL
  const expectedURL = 'https://images-api.nasa.gov/search?media_type=image&page=1&q=term';

  // Render with empty submitSearch function
  const {getByText, getByPlaceholderText} =
    render(<Search submitSearch={() => {}} />);

  // Changes search input value
  const searchInput = getByPlaceholderText('Search');
  fireEvent.change(searchInput, {target: {value: 'term'}});

  // 'Click' the submit button
  fireEvent.click(getByText('Submit'));
  expect(axios.get).toHaveBeenCalledWith(expectedURL);
});
