import Home from './Home';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
test('checking for max dog', async () => {
  const { container } = await render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  await screen.findByText('Max');
  expect(container).toMatchSnapshot();
});
