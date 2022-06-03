import { createContext } from 'react';

export interface MenuUIContextInterface {
  activeListGroupItemId: string;
  setActiveListGroupItemId: (id: string) => void;
  activeSecondaryMenuItemId: string;
  setActiveSecondaryMenuItemId: (id: string) => void;
  secondaryMenuOpen: boolean;
  setSecondaryMenuOpen: (open: boolean) => void;
  activeTertiaryMenuItemId: string;
  setActiveTertiaryMenuItemId: (id: string) => void;
  tertiaryMenuOpen: boolean;
  setTertiaryMenuOpen: (open: boolean) => void;
}

const MenuUIContext = createContext<MenuUIContextInterface>({
  activeListGroupItemId: '',
  setActiveListGroupItemId: (value: string) => {},
  activeSecondaryMenuItemId: '',
  setActiveSecondaryMenuItemId: (value: string) => {},
  secondaryMenuOpen: false,
  setSecondaryMenuOpen: (value: boolean) => {},
  activeTertiaryMenuItemId: '',
  setActiveTertiaryMenuItemId: (value: string) => {},
  tertiaryMenuOpen: false,
  setTertiaryMenuOpen: (value: boolean) => {}
});

export default MenuUIContext;
