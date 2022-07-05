import {rest} from "msw";

export interface MenuItem {
  pbcName: string;
  bundleName: string;
  mfeName: string;
  label: Record<string, string>;
  target: string;
  addr: string;
  organization: string;
}

export interface PbcApiResponse {
  data: {
    items: MenuItem[];
  };
}

export interface EpcData {
  'data-organization'?: string;
  'data-epc-id'?: string;
  'data-submenu'?: string;
  'data-menu-item-id'?: string;
}

export interface ModifiedDynamicMenuItem extends MenuItem {
  url: string;
  hrefTarget?: string;
  rel?: string;
}

export interface DynamicMenuItem {
  parent: string;
  children: ModifiedDynamicMenuItem[];
}

export interface EntandoGlobals {
  userPermissions: string[];
  lang: string;
  systemReport: {
    contentSchedulerPluginInstalled: boolean;
  };
  adminConsoleUrl: string;
}

declare global {
  interface Window {
    entando: {
      globals: EntandoGlobals;
      router: {
        push: (route: string) => void;
      };
      mockingService: {
        setMock: (handler: any) => void,
        restClient: typeof rest
      };
    };
  }
}
