export type INav = {
  label: { [key: string]: string }
  target: string
  url: string
};

export type IBundleWidget = {
  bundleCode?: string
  widgetName: string
  descriptorExt: {
    nav: INav[]
  }
  labels?: {
    pbcNames?: string[]
  }
};
