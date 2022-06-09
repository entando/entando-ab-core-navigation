import { useEffect, useState } from 'react';
import axios from 'axios';
import { MenuUI, MfeConfig } from './MenuUI';
import { MenuItem, PbcApiResponse } from '../types/api';
import { GlobalStyle } from '../styles/globalStyles';

interface Props {
  config: MfeConfig;
}

export function Menu(props: Props) {
  const { config } = props;

  const [loading, setLoading] = useState(false);

  const [dynamicMenuItems, setDynamicMenuItems] = useState<MenuItem[]>([]);

  const apiUrl = config?.api?.url;

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

  return loading ? (
    <div>{'Loading...'}</div>
  ) : (
    <>
      <GlobalStyle />
      <MenuUI config={config} dynamicMenuItems={dynamicMenuItems} />
    </>
  );
}
