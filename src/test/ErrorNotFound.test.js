import { render, screen } from '@testing-library/react';
import ErrorNotFound from '../components/ErrorNotFound';

jest.mock('react-router-dom', () => ({
    useRouteError: jest.fn(() => ({message: "something went wrong"}))
}))

test('renders errorNotFound', () => {
  render(<ErrorNotFound />);
  const linkElement = screen.getByText(/something went wrong/i);
  expect(linkElement).toBeInTheDocument();
});