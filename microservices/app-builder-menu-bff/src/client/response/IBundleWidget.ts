export type INav = {
  label: { [key: string]: string }
  target: string
  url: string
};

export type IBundleNavInfo = {
  descriptorExt?: {
    nav: INav[]
  }
  labels?: {
    pbcNames?: string[]
  }
}

export type IBundle = {
  bundleId: string
  bundleName: string
  bundleCode?: string // TODO: remove '?' when this will be populated by API
} & IBundleNavInfo;

export type IBundleWidget = {
  bundleId: string
  widgetName: string
} & IBundleNavInfo;
