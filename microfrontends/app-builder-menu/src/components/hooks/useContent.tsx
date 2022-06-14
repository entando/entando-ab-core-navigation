import React, { ReactNode, useContext } from 'react';
import { useIntl } from 'react-intl';
import { ContentType, getContent } from '../../content';

const ContentContext = React.createContext({});

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const intl = useIntl();
  const content: ContentType = getContent(intl);

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
