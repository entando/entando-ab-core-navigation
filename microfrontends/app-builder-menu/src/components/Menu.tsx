import { useEffect, useState } from 'react';
import { MenuUI } from './MenuUI';
import { IntlProvider, MessageFormatElement } from 'react-intl';

// lang imports
import en_messages from '../i18n/en.json';
import it_messages from '../i18n/it.json';
import pt_messages from '../i18n/pt.json';
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
  en: en_messages,
  it: it_messages,
  pt: pt_messages
};

export function Menu(props: Props) {
  const { config } = props;

  const [loading, setLoading] = useState(true);

  const [dynamicMenuItems, setDynamicMenuItems] = useState<MenuItem[]>([]);
  const [epcHasError, setEpcHasError] = useState(false);

  const menuOpen = sessionStorage.getItem('menu_open') || '';

  const { lang } = window.entando?.globals || {};
  const locale = lang || DEFAULT_LOCALE;

  useEffect(() => {
    const request = async () => {
      try {
        const { data } = await getPBCNav(config);

        if (!data || !Array.isArray(data.payload)) {
          setEpcHasError(true);
        } else {
          setDynamicMenuItems(data?.payload || []);
        }
      } catch (error) {
        setEpcHasError(true);
      }

      setLoading(false);
    };

    if (config) {
      request();
    }

    const removeMenuOpenSession = () => {
      sessionStorage.removeItem('menu_open');
    };

    if (menuOpen) {
      window.addEventListener('beforeunload', removeMenuOpenSession);

      return () => {
        removeMenuOpenSession();
        window.removeEventListener('beforeunload', removeMenuOpenSession);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <MenuUI
              config={config}
              dynamicMenuItems={dynamicMenuItems}
              openDefaultSubmenuId={menuOpen}
              epcHasError={epcHasError}
            />
          </>
        )}
      </ContentProvider>
    </IntlProvider>
  );
}
