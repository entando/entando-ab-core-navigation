import { rest } from 'msw';

export interface AppBuilderMenuItemEntry {
  id: string;
  labelId?: string;
  defaultLabel: string;
  href: string;
  requiredPermission: string;
}

export interface AppBuilderMenuGroup {
  'appBuilderMenu.hook': string;
  'appBuilderMenu.items': AppBuilderMenuItemEntry[];
  'appBuilderMenu.pluginId'?: string;
  'appBuilderMenu.pluginLabel'?: string;
}

export interface EntandoGlobals {
  userPermissions: string[];
  lang: string;
  systemReport: AppBuilderMenuGroup[];
  adminConsoleUrl: string;
  advancedSearchOn: boolean;
  disableContentMenu: boolean;
  rootPageCode: string;
}

export interface MfeConfig {
  systemParams: {
    api: {
      navigation: {
        url: string;
      };
    };
  };
}

declare global {
  interface Window {
    entando: {
      globals: EntandoGlobals;
      router: {
        push: (route: string) => void;
        replace: (newRoute: string) => void;
        listen: (listener: (location: Location) => void) => Function;
      };
      mockingService: {
        setMock: (handler: any) => void;
        restClient: typeof rest;
      };
      keycloak: {
        token: string;
      };
    };
  }
}
