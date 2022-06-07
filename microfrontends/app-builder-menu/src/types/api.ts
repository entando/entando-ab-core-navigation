export interface MenuItem {
  pbcName: string;
  bundleName: string;
  mfeName: string;
  label: Record<string, string>;
  target: string;
  addr: string;
  org: string;
}

export interface PbcApiResponse {
  data: {
    items: MenuItem[];
  };
}

export interface EpcData {
  'data-organization'?: string; // @TODO Marco tell me final answer after talk with Walter
  'data-epc-id'?: string; // pbcName
  'data-submenu'?: string; // @TODO Marco tell me final answer after talk with Nicola
  'data-menu-item-id'?: string; // we generate this
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

declare global {
  interface Window {
    appBuilderRouter: {
      push: (route: string) => void;
    };
  }
}
