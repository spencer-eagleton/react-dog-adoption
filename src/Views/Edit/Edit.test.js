import Edit from './Edit';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
test('checking for max name', async () => {
  const { container } = await render(
    <MemoryRouter initialEntries={['/dogs/1']}>
      <Route exact path="/dogs/:id" component={Edit}></Route>
    </MemoryRouter>
  );
  await screen.findByText('Max');
  expect(container).toMatchSnapshot();
});
