export const LIST_BUNDLES_RESPONSE = [
  {
    name: 'strapi-bundle-1',
    pbcName: 'strapi-pbc',
    organization: 'entando',
    description: 'Layout capabilities of App-builder',
    global: {
      nav: [
        {
          label: {
            it: 'Backoffice',
            en: 'Backoffice',
          },
          target: 'external',
          addr: 'https://www.strapi.com',
        },
      ],
    },
    microfrontends: [
      {
        name: 'strapi-content-template',
        stack: 'react',
        type: 'app-builder',
        slot: 'content',
        customElement: 'strapi-content-template',
        group: 'free',
        paths: ['/content-template'],
        apiClaims: [
          {
            name: 'my-service-claim',
            type: 'internal',
            serviceId: 'my-service',
          },
          {
            name: 'ext-service-claim',
            type: 'external',
            bundleId: 'some-bundle',
            serviceId: 'a-service',
          },
        ],
        nav: [
          {
            label: {
              it: 'Content Template',
              en: 'Content Template',
            },
            target: 'app-builder',
            addr: '/content-template',
          },
        ],
      },
    ],
  },
];

export const LIST_NAVS_RESPONSE = [
  {
    name: 'strapi-bundle-1',
    pbcName: 'strapi-pbc',
    organization: 'entando',
    label: {
      it: 'Backoffice',
      en: 'Backoffice'
    },
    target: 'external',
    addr: 'https://www.strapi.com'
  },
  {
    name: 'strapi-bundle-1',
    pbcName: 'strapi-pbc',
    organization: 'entando',
    label: {
      it: 'Content Template',
      en: 'Content Template'
    },
    target: 'app-builder',
    addr: '/content-template'
  }
];
