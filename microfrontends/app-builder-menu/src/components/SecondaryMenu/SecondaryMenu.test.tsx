import renderer from 'react-test-renderer';

import { SecondaryMenu } from './SecondaryMenu';

test('renders SecondaryMenu visible', () => {
  const tree = renderer
    .create(<SecondaryMenu isOpen title="Secondary Menu" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders SecondaryMenu non-visible', () => {
  const tree = renderer
    .create(<SecondaryMenu isOpen={false} title="Secondary Menu" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
