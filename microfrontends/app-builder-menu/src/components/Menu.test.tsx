import {
  render,
  waitForElementToBeRemoved,
  screen
} from '@testing-library/react';
import { SUPERUSER_PERMISSION } from '../utils/permissions';

import { Menu } from './Menu';

describe('Menu Test', () => {
  it('must be rendered', async () => {
    render(
      <Menu
        config={{
          userPermissions: [SUPERUSER_PERMISSION],
          lang: 'en',
          api: { url: 'http://localhost:8080/menu-be-api' },
          adminConsoleUrl: 'http://localhost:8080/admin-console',
          contentSchedulerPluginInstalled: true
        }}
      />
    );

    await waitForElementToBeRemoved(screen.queryByText('Loading...'));

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});
