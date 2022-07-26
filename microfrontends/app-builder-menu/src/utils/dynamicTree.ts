import { DynamicMenuItem, MenuItem } from '../types/api';

const EXTERNAL_MFE_TARGET_NAME = 'external';
const SAFE_REL = 'noopener noreferrer';
export const TARGET_BLANK = '_blank';

export const generateDynamicMenuItems = (
  items: MenuItem[]
): DynamicMenuItem[] => {
  const uniqueEpcs = [...new Set(items.map(item => item.pbcName))];
  return uniqueEpcs.map(pbc => ({
    parent: pbc,
    children: items
      .filter(item => item.pbcName === pbc)
      .map(item => ({
        ...item,
        ...(item.target === EXTERNAL_MFE_TARGET_NAME
          ? {
              url: item.addr,
              hrefTarget: TARGET_BLANK,
              rel: SAFE_REL
            }
          : {
              // removes any number of slashes from the beginning of the url and only leaves 1 slash present
              url: `/${item.bundleCode}/${item.addr}`.replace(
                /(https?:\/\/)|(\/)+/g,
                '$1$2'
              )
            })
      }))
  }));
};
