/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly AB_MENU_USE_MOCKS: 'true' | 'false';
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
