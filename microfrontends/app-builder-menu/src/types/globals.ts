import { rest } from 'msw';

export interface AppBuilderMenuItem {
  'appBuilderMenu.id': string;
  'appBuilderMenu.labelId': string;
  'appBuilderMenu.defaultLabel': string;
  'appBuilderMenu.href': string;
  'appBuilderMenu.requiredPermission': string;
}

export interface EntandoGlobals {
  userPermissions: string[];
  lang: string;
  systemReport: AppBuilderMenuItem[];
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
