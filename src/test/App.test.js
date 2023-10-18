import {render} from '@testing-library/react';
import App from '../App';


test('Renders contents', () => {
  const page = render(<App />);
  expect(page).not.toBeNull();
});
