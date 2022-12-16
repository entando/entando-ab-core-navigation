import {
  render,
  waitForElementToBeRemoved,
  screen,
  fireEvent
} from '@testing-library/react';
import { Menu } from '../Menu';

test('Check toggling secondary menu', async () => {
  window.entando.globals = {
    ...window.entando.globals,
    userPermissions: ['managePages']
  };

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

  expect(screen.getByText('Pages')).toBeInTheDocument();
  // Check that secondary menu is not visible
  expect(screen.queryByText('Management')).not.toBeInTheDocument();
  fireEvent.click(screen.getByText('Pages'));
  // Check that secondary menu is visible
  expect(screen.getByText('Management')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Dashboard'));
  // Check that secondary menu is not visible
  expect(screen.queryByText('Management')).not.toBeInTheDocument();
  expect(window.entando.router.push).toHaveBeenCalledWith('/dashboard');
});
