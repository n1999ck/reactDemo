import { render, screen } from '@testing-library/react';
import ErrorNotFound from '../components/ErrorNotFound';

jest.mock('react-router-dom', () => ({
    useRouteError: jest.fn()
}))

test('renders errorNotFound', () => {
  const increment = jest.fn();
  render(<ErrorNotFound />);
  const linkElement = screen.getByText(/an unexpected error has occurred./i);
  expect(linkElement).toBeInTheDocument();
});