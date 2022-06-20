import { useEffect, useState } from 'react';
import axios from 'axios';
import { MenuUI, MfeConfig } from './MenuUI';
import { IntlProvider, MessageFormatElement } from 'react-intl';

// lang imports
import en_messages from '../i18n/en.json';
import { ContentProvider } from './hooks/useContent';
import { MenuItem, PbcApiResponse } from '../types/api';
import { GlobalStyle } from '../styles/globalStyles';
import { DEFAULT_LOCALE } from '../content';

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

  const [loading, setLoading] = useState(false);

  const [dynamicMenuItems, setDynamicMenuItems] = useState<MenuItem[]>([]);

  const apiUrl = config?.api?.url;

  const { lang } = window.entando?.globals || {};
  const locale = lang || DEFAULT_LOCALE;

  useEffect(() => {
    const request = async () => {
      setLoading(true);

      const { data } = await axios.get<PbcApiResponse>(apiUrl);

      setDynamicMenuItems(data?.data?.items || []);
      setLoading(false);
    };
    if (apiUrl) {
      request();
    }
  }, [apiUrl]);

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
