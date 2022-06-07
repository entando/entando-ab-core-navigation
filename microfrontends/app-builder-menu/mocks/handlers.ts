import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:8080/menu-be-api', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          items: [
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
              org: 'entando'
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
              org: 'entando'
            }
          ]
        }
      })
    );
  })
];
