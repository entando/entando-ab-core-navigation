import { rest } from 'msw';

export interface EntandoGlobals {
  userPermissions: string[];
  lang: string;
  systemReport: {
    contentSchedulerPluginInstalled: boolean;
  };
  adminConsoleUrl: string;
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
