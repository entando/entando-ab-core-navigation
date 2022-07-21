export interface MenuItem {
  pbcName: string;
  bundleCode: string;
  mfeName: string;
  label: Record<string, string>;
  target: string;
  addr: string;
  organization: string;
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
