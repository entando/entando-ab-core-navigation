import { useEffect, useState } from 'react';
import { MenuUI } from './MenuUI';
import { IntlProvider, MessageFormatElement } from 'react-intl';

// lang imports
import en_messages from '../i18n/en.json';
import { ContentProvider } from './hooks/useContent';
import { MenuItem } from '../types/api';
import { MfeConfig } from '../types/globals';
import { GlobalStyle } from '../styles/globalStyles';
import { DEFAULT_LOCALE } from '../content';
import { getPBCNav } from '../api/getPBCNav';

interface Props {
  config: MfeConfig;
}

interface MessageMap {
  [key: string]:
    | Record<string, string>
    | Record<string, MessageFormatElement[]>;
}

const messages: MessageMap = {
  en: en_messages
};

export function Menu(props: Props) {
  const { config } = props;

  const [loading, setLoading] = useState(true);

  const [dynamicMenuItems, setDynamicMenuItems] = useState<MenuItem[]>([]);

  const { lang } = window.entando?.globals || {};
  const locale = lang || DEFAULT_LOCALE;

  useEffect(() => {
    const request = async () => {
      const { data } = await getPBCNav(config);

      setDynamicMenuItems(data?.payload || []);
      setLoading(false);
    };

    if (config) {
      request();
    }
  }, []);

  return (
    <IntlProvider
      locale={locale}
      defaultLocale="en"
      messages={messages[locale]}
    >
      <ContentProvider>
        {loading ? (
          <div>{'Loading...'}</div>
        ) : (
          <>
            <GlobalStyle />
            <MenuUI config={config} dynamicMenuItems={dynamicMenuItems} />
          </>
        )}
      </ContentProvider>
    </IntlProvider>
  );
}
