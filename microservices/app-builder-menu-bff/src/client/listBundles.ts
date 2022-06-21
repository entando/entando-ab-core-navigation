import axios from 'axios';
import nock from 'nock';
import { getKeycloakToken } from './getKeycloakToken';
import { IBundle } from './response/IBundle';

const MOCKED_RESPONSE: IBundle[] = [
  {
    name: 'strapi-bundle-1',
    pbcName: 'strapi-pbc',
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

export const listBundles = async (): Promise<IBundle[]> => {
  /**
   * TODO: At the moment of this implementation ECR doesn't support the endpoint
   * we expect for this method.
   * To bypass this in a black-box way, we used nock to mock the expected response.
   * Please remove nock from this method when ECR will be finally implemented
   */
  const token = await getKeycloakToken();

  nock(`${process.env.ENTANDO_COMPONENT_MANAGER_API_URL}`)
    .get('/components')
    .reply(200, { payload: MOCKED_RESPONSE });

  const res = await axios.get(`${process.env.ENTANDO_COMPONENT_MANAGER_API_URL}/components`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  nock.cleanAll();
  
  return res.data.payload;
};
