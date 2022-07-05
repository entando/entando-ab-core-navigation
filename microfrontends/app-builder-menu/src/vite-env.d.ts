/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly AB_MENU_USE_MOCKS: 'true' | 'false';
  readonly AB_MENU_EXPOSE_MOCKS: 'true' | 'false';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
