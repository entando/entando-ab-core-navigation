/// <reference types="vite/client" />

import { rest } from "msw";

interface ImportMetaEnv {
  readonly AB_MENU_USE_MOCKS: 'true' | 'false';
  readonly AB_MENU_EXPOSE_MOCKS: 'true' | 'false';
}

declare global {
  interface Window {
    entando: {
      mockingService: {
        setMock: (handler) => void,
        restClient: typeof rest
      }
    }
  }
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
