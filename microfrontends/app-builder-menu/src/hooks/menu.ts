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
    const origHistory = { ...window.history };
    const historyStateMethods: Array<keyof Pick<History, 'pushState' | 'replaceState'>>
      = ['pushState', 'replaceState'];

    // Intercept `history` method calls to handle `activeMenuItem` update
    // since there seems to be no other agnostic way of "listening" to location changes
    historyStateMethods.forEach((event) => {
      window.history[event] = new Proxy(window.history[event], {
        apply: (target, thisArg, argArray) => {
          const [,, path] = argArray;
          setActiveMenuItem(getMenuItemFromPath(path));
          return target.apply(thisArg, argArray as any);
        },
      });
    });

    return () => {
      window.history = origHistory;
    };
  }, []);

  return {
    activeMenuItem,
    setActiveMenuItem,
  }
};
