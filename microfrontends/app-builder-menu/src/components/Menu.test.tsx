import {
  render,
  waitForElementToBeRemoved,
  screen
} from '@testing-library/react';

import { Menu } from './Menu';

describe('Menu Test', () => {
  it('must be rendered', async () => {
    render(<Menu />);

    await waitForElementToBeRemoved(screen.queryByText('Loading...'));

    expect(screen.getByText('hello world')).toBeInTheDocument();
  });
});
