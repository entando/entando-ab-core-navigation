export interface MENU_ITEM {
  pbcName: string;
  bundleName: string;
  mfeName: string;
  label: Record<string, string>;
  target: string;
  addr: string;
  // @TODO Marco is this how we receive this metadata? (organization, pbc-id submenu menu-item-id)
  epcData?: EPC_DATA;
}

export interface PBC_API_RESPONSE {
  data: {
    items: MENU_ITEM[];
  };
}

export interface EPC_DATA {
  organization?: string;
  'epc-id'?: string;
  submenu?: string;
  'menu-item-id'?: string;
}

export interface MODIFIED_DYNAMIC_MENU_ITEM extends MENU_ITEM {
  url?: string;
  externalHref?: string;
}

export interface DYNAMIC_MENU_ITEM {
  parent: string;
  children: MODIFIED_DYNAMIC_MENU_ITEM[];
}
