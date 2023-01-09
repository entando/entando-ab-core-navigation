import {
  render,
  waitForElementToBeRemoved,
  screen,
  fireEvent
} from '@testing-library/react';
import { Menu } from '../Menu';

const expectedResult = [
  {
    parent: 'pbc1',
    children: [
      {
        pbcName: 'pbc1',
        bundleCode: 'bundle1',
        addr: 'https://external/addr1',
        target: 'external',
        mfeName: 'name1',
        hrefTarget: '_blank',
        rel: 'noopener noreferrer',
        url: 'https://external/addr1',
        label: {
          en: 'label1'
        },
        organization: 'entando'
      },
      {
        pbcName: 'pbc1',
        bundleCode: 'bundle2',
        addr: 'addr2',
        target: 'internal',
        mfeName: 'name2',
        url: '/bundle2/addr2',
        label: {
          en: 'label2'
        },
        organization: 'entando'
      }
    ]
  },
  {
    parent: 'pbc2',
    children: [
      {
        pbcName: 'pbc2',
        bundleCode: 'bundle3',
        addr: 'addr3',
        target: 'internal',
        mfeName: 'name3',
        url: '/bundle3/addr3',
        label: {
          en: 'label3'
        },
        organization: 'entando'
      }
    ]
  }
];

jest.mock('../../utils/dynamicTree.ts', () => ({
  generateDynamicMenuItems: jest.fn(() => expectedResult)
}));

test('Check toggling tertiary menu', async () => {
  window.entando.globals = {
    ...window.entando.globals,
    userPermissions: ['superuser'],
    lang: 'en'
  };

  const { debug } = render(
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

  expect(screen.getByText('EPCs')).toBeInTheDocument();
  // Check that secondary menu is not visible
  expect(screen.queryByText('label1')).not.toBeInTheDocument();
  fireEvent.click(screen.getByText('EPCs'));
  // Check that secondary menu is visible
  expect(screen.getByText('pbc1')).toBeInTheDocument();
  fireEvent.click(screen.getByText('pbc1'));
  // Check that tertiary menu is visible
  expect(screen.getByText('label1')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Dashboard'));
  // Check that secondary menu is not visible
  expect(screen.queryByText('pbc1')).not.toBeInTheDocument();
  // Check that tertiary menu is not visible
  expect(screen.queryByText('label1')).not.toBeInTheDocument();
  expect(window.entando.router.push).toHaveBeenCalledWith('/dashboard');
});
