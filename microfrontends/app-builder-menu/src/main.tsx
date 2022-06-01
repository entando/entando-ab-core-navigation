import { AppBuilderMenu } from './custom-element';

if (import.meta.env.AB_MENU_USE_MOCKS === 'true') {
  const { worker } = await import('../mocks/browser');

  await worker.start();
}

customElements.define('app-builder-menu', AppBuilderMenu);
