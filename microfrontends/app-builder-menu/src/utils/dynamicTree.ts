import { DynamicMenuItem, MenuItem } from '../types/api';

const EXTERNAL_MFE_TARGET_NAME = 'external';
const SAFE_REL = 'noopener noreferrer';
export const TARGET_BLANK = '_blank';

export const generateDynamicMenuItems = (
  items: MenuItem[]
): DynamicMenuItem[] => {
  const uniquePbcs = [...new Set(items.map(item => item.pbcName))];
  return uniquePbcs.map(pbc => ({
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
          : { url: `/${item.pbcName}/${item.bundleName}/${item.addr}` })
      }))
  }));
};
