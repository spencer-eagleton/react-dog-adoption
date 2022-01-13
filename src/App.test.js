import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Max text', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Max/i);
  expect(linkElement).toBeInTheDocument();
});
