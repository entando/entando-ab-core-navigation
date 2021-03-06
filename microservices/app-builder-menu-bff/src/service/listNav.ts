import { Request } from 'express';
import { listBundles, listBundlesWidgets } from '../client';
import { IBundleNavInfo } from '../client/response/IBundleWidget';

export type INavResponse = {
  pbcName: string
  bundleCode: string
  mfeName: string | null // mfeName is null for global nav
  label: { [key: string]: string }
  target: string
  addr: string
  organization: string
}

export const UNCATEGORIZED_PBC_NAME = 'Uncategorized'
const ORGANIZATION = 'entando'

export const listNav = async (req: Request): Promise<INavResponse[]> => {

  const navList: INavResponse[] = []
  const bundleCodesMap: Map<string, string> = new Map()

  const [bundles, widgets] = await Promise.all([listBundles(req), listBundlesWidgets(req)]);

  for (const bundle of bundles) {
    bundleCodesMap.set(bundle.bundleId, bundle.bundleCode)

    // Global nav
    navList.push(...getNavItems(bundle, bundle.bundleCode, null))
  }

  for (const widget of widgets) {
    const bundleCode = bundleCodesMap.get(widget.bundleId)!
    navList.push(...getNavItems(widget, bundleCode, widget.widgetName))
  }

  return navList;
};

function getNavItems(bundleNav: IBundleNavInfo, bundleCode: string, mfeName: string | null): INavResponse[] {
  const navList: INavResponse[] = [];
  if (bundleNav.descriptorExt && bundleNav.descriptorExt.nav && bundleNav.labels) {
    if (bundleNav.labels.pbcNames && bundleNav.labels.pbcNames.length > 0) {
      bundleNav.labels.pbcNames.map(pbcName => {
        navList.push(...getNavResponseItem(bundleNav, pbcName, bundleCode, mfeName));
      })
    } else {
      // Bundle that wasn't installed from Hub
      navList.push(...getNavResponseItem(bundleNav, UNCATEGORIZED_PBC_NAME, bundleCode, mfeName));
    }
  }
  return navList;
}

function getNavResponseItem(bundleNav: IBundleNavInfo, pbcName: string, bundleCode: string, mfeName: string | null): INavResponse[] {
  return bundleNav.descriptorExt!.nav!.map(n => {
    return {
      pbcName,
      bundleCode,
      mfeName,
      label: n.label,
      target: n.target,
      addr: n.url,
      organization: ORGANIZATION
    };
  });
}
