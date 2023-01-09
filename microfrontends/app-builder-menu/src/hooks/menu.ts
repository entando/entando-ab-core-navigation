import { useEffect, useState } from 'react';

import { ROOT_MENU_ROUTE_MAP } from '../utils/routes';

const getMenuItemFromPath = (path: string) => 
  Object.keys(ROOT_MENU_ROUTE_MAP).find((menuItem) => {
    const route = ROOT_MENU_ROUTE_MAP[menuItem];
    let routeMatched = false;

    if (Array.isArray(route)) {
      routeMatched = route.some(r => path.includes(r));
    } else {
      routeMatched = path.includes(route);
    }

    return routeMatched;
  }) || '';

export const useActiveMenuItem = (defaultActiveMenuItem: string = '') => {
  const [activeMenuItem, setActiveMenuItem] =
    useState(defaultActiveMenuItem || getMenuItemFromPath(window.location.pathname));

  useEffect(() => {
    const unlisten = window.entando.router.listen(({ pathname }) => {
      setActiveMenuItem(getMenuItemFromPath(pathname));
    });

    return () => {
      unlisten();
    };
  }, []);

  return {
    activeMenuItem,
    setActiveMenuItem,
  }
};
