import {render} from '@testing-library/react';
import App from '../App';
import React from 'react';


test('Renders contents', () => {
  const page = render(<App />);
  expect(page).not.toBeNull();
});
