import { rest } from 'msw';

export const handlers = [
  // Handles a GET request
  rest.get('/your-endpoint', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'hello world'
      })
    );
  }),
  rest.get('/menu-endpoint', (req, res, ctx) => {
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
              addr: 'content-template'
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
              addr: 'https://strapi.com/...'
            }
          ]
        }
      })
    );
  })
];
