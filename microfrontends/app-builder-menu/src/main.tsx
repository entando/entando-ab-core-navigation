import { AppBuilderMenu } from './custom-element';
import { getHandlers } from "../mocks/handlers";

if (import.meta.env.AB_MENU_EXPOSE_MOCKS === 'true') {
  getHandlers(window.entando.mockingService.restClient).forEach(handler => {
    window.entando.mockingService.setMock(handler)
  })
}

if (import.meta.env.AB_MENU_USE_MOCKS === 'true') {
  const { worker, rest } = await import('../mocks/browser');

  getHandlers(rest).forEach(handler => {
    worker.use(handler)
  })

  await worker.start();
}

customElements.define('app-builder-menu', AppBuilderMenu);
