import { ContentProvider, useContent } from './useContent';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import en_messages from '../i18n/en.json';

const MOCKED_CONTENT = {
  'app-builder-menu': {
    id: '1',
    title: 'App Builder Menu'
  }
};

jest.mock('../../content.ts', () => ({
  getContent: jest.fn(() => MOCKED_CONTENT)
}));

const TestComponent = () => {
  const content = useContent();
  return <div>{JSON.stringify(content)}</div>;
};

const TestComponentWrapper = () => {
  return (
    <IntlProvider locale="en" defaultLocale="en" messages={en_messages}>
      <ContentProvider>
        <TestComponent />
      </ContentProvider>
    </IntlProvider>
  );
};

describe('useContent', () => {
  it('must render a correct content object', async () => {
    render(<TestComponentWrapper />);
    expect(
      screen.getByText(JSON.stringify(MOCKED_CONTENT))
    ).toBeInTheDocument();
  });
});
