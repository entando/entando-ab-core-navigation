import { rest } from 'msw';

export function getHandlers(restClient: typeof rest) {
  return [
    rest.get('http://localhost:8080/api/nav', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          payload: [
            {
              pbcName: 'strapi',
              bundleName: 'strapi-bundle',
              mfeName: 'strapi-content-template',
              label: {
                it: 'Content Templates',
                en: 'Content Templates'
              },
              target: 'app-builder',
              addr: 'content-template',
              organization: 'entando'
            },
            {
              pbcName: 'strapi',
              bundleName: 'strapi-bundle',
              mfeName: null,
              label: {
                it: 'Backoffice',
                en: 'Backoffice'
              },
              target: 'external',
              addr: 'https://strapi.com/...',
              organization: 'entando'
            }
          ]
        })
      );
    })
  ];
}
