export type INav = {
  label: { [key: string]: string }
  target: string
  url: string
};

export type IBundleNavInfo = {
  descriptorExt: {
    nav: INav[]
  } | null, // null when bundle is deployed but not installed
  labels?: {
    pbcNames?: string[]
  }
}

export type IBundle = {
  bundleId: string
  bundleCode: string
} & IBundleNavInfo;

export type IBundleWidget = {
  bundleId: string
  widgetName: string
} & IBundleNavInfo;
