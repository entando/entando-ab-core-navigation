import {
  render,
  waitForElementToBeRemoved,
  screen
} from '@testing-library/react';

import { Menu } from './Menu';

describe('Menu Test', () => {
  it('must be rendered', async () => {
    render(
      <Menu
        config={{
          systemParams: {
            api: {
              navigation: {
                url: 'http://localhost:8080'
              }
            }
          }
        }}
      />
    );

    await waitForElementToBeRemoved(screen.queryByText('Loading...'));

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});
