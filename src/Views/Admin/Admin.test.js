import Admin from './Admin';
import { render } from '@testing-library/react';
test('checking for admin component', async () => {
  const { container } = await render(<Admin />);
  expect(container).toMatchSnapshot();
});
