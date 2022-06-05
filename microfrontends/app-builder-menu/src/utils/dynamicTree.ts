import { DYNAMIC_MENU_ITEM, MENU_ITEM } from '../types/api';

const EXTERNAL_MFE_TARGET_NAME = 'external';

export const generateDynamicMenuItems = (
  items: MENU_ITEM[]
): DYNAMIC_MENU_ITEM[] => {
  const uniquePbcs = [...new Set(items.map(item => item.pbcName))];
  return uniquePbcs.map(pbc => ({
    parent: pbc,
    children: items
      .filter(item => item.pbcName === pbc)
      .map(item => ({
        ...item,
        ...(item.target === EXTERNAL_MFE_TARGET_NAME
          ? { externalHref: item.addr }
          : { uri: `/${item.pbcName}/${item.bundleName}/${item.addr}` })
      }))
  }));
};
