import {render, screen} from '@testing-library/react';
import Search from '../src/components/Search';


test('renders learn react link', () => {
  render(<Search />);
  const linkElement = screen.getByText(/Active/i);
  expect(linkElement).toBeInTheDocument();
});
