/* eslint-disable no-unused-vars */
import {cleanup, fireEvent, render, act} from '@testing-library/react';
import APOD from '../components/APOD';
import React, {useEffect} from 'react';
import axios from 'axios';

jest.mock('axios');

test('image displays', () => {
  // mock response
  const sampleReturn = {
    data: {
      'title': 'Sample Title',
      'url': 'somewebsite.somewhere/someimage.somefileformat',
      'explanation': 'Hey look an image',
    },
  };
  act(() => {
    axios.get.mockResolvedValue(sampleReturn);
  });

  const {getByTestId} = render(<APOD />);

  const image = getByTestId('image');

  expect(image).toBeInTheDocument();
});

test('API call executes correctly', async () => {
// https://vhudyma-blog.eu/3-ways-to-mock-axios-in-jest/
// Make a fake return
  const sampleReturn = {
    data: {
      'title': 'Sample Title',
      'url': 'somewebsite.somewhere/someimage.somefileformat',
      'explanation': 'Hey look an image',
    },
  };
  act(() => {
    axios.get.mockResolvedValueOnce({data: sampleReturn});
  });

  // eslint-disable-next-line new-cap
  const response = await APOD();

  expect(axios.get).toHaveBeenCalled();
  expect(response).toEqual(sampleReturn);
});

test('API call errors log to console', async () => {
  const sampleError = new Error('Pretend something went wrong');
  // Sends a pretend error to the axios call
  axios.get.mockRejectedValue(sampleError);

  await render(<APOD />);// asynchronous because axios
  // You can expect on console.error
  expect(console.error).toHaveBeenCalledWith(sampleError.message);

  console.error = consoleError; // cleans up from messing w/errors
});
