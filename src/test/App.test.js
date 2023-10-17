import { render, screen } from '@testing-library/react';
import App from '../App';

//aim to test 80% or more of application
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Active/i);
  expect(linkElement).toBeInTheDocument();
});

//apod + another