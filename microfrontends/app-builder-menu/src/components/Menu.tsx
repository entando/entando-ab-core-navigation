import { useEffect, useState } from 'react';
import axios from 'axios';
import { MenuUI, MfeConfig } from './MenuUI';
import { createGlobalStyle } from 'styled-components';
import { IntlProvider, MessageFormatElement } from 'react-intl';

// lang imports
import en_messages from '../i18n/en.json';
import { ContentProvider } from './hooks/useContent';
import { MenuItem, PbcApiResponse } from '../types/api';

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
  box-sizing: border-box;
}
`;

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
  const locale = config?.lang ?? 'en';

  useEffect(() => {
    const request = async () => {
      setLoading(true);

      const { data } = await axios.get<PbcApiResponse>(apiUrl);

      setDynamicMenuItems(data.data.items);
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
          {/* @TODO remove this before final commit, since css reset should be already presented in other projects where we import this mfe */}
          <GlobalStyle />
          <MenuUI config={config} dynamicMenuItems={dynamicMenuItems} />
        </>
      )}
      </ContentProvider>
    </IntlProvider>
  );
}
