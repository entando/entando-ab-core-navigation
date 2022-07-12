import { Request } from 'express';
import { listBundlesWidgets } from '../client';
import { IBundleWidget } from '../client/response/IBundleWidget';

export type INavResponse = {
  pbcName: string
  bundleCode: string
  mfeName: string
  label: { [key: string]: string }
  target: string
  addr: string
  organization: string
}

export const listNav = async (req: Request): Promise<INavResponse[]> => {
  const widgetsList: IBundleWidget[] = await listBundlesWidgets(req);

  const navList: INavResponse[] = []

  for (const widget of widgetsList) {
    const pbcNamesDefined = widget.labels?.pbcNames?.length
    if (pbcNamesDefined && pbcNamesDefined > 0) {
      widget.labels!.pbcNames!.map(pbcName => {
        navList.push(...getNavResponseItem(widget, pbcName))
      })
    } else {
      navList.push(...getNavResponseItem(widget, 'pbcName-placeholder'))
    }
  }

  return navList;
};

function getNavResponseItem(widget: IBundleWidget, pbcName: string): INavResponse[] {
  return widget.descriptorExt.nav.map(n => {
    return {
      pbcName,
      bundleCode: widget.bundleCode || 'bundleCode-placeholder',
      mfeName: widget.widgetName,
      label: n.label,
      target: n.target,
      addr: n.url,
      organization: 'entando'
    };
  });
}
