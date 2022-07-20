import supertest from 'supertest';
import nock from 'nock';

/*
import {
  createMockInstance,
  activateMock,
  MockInstance,
  Mock,
  MockUser
} from 'keycloak-mock';
*/

import app from '../../../src/server';

import {
  LIST_BUNDLES_RESPONSE,
  LIST_BUNDLES_WIDGETS_RESPONSE,
  LIST_NAVS_RESPONSE,
} from './__mocks__/nav.mock';

/*
interface KeycloakTestCache {
  keycloak?: MockInstance
  user?: MockUser
  mock?: Mock
  token?: string
}

const global: KeycloakTestCache = { };

beforeAll(async () => {
  const keycloak = await createMockInstance({
    authServerURL: `${process.env.KEYCLOAK_URL}`,
    realm: `${process.env.KEYCLOAK_REALM}`,
    clientID: `${process.env.KEYCLOAK_CLIENT_ID}`,
    clientSecret: `${process.env.KEYCLOAK_CLIENT_SECRET}`,
  });

  const user = keycloak.database.createUser({
    username: 'test',
    email: 'hello@hello.com',
    credentials: [{
      value: 'mypassword',
    }],
  });

  global.mock = activateMock(keycloak);
  global.token = keycloak.createBearerToken(user.profile.id);
});
*/

afterAll(() => {
  nock.cleanAll();
  //global.mock?.instance.database.clear();
});

describe('User can list all navs', () => {
  test('tests listing all navs successfully', async () => {
    nock(`${process.env.ENTANDO_COMPONENT_MANAGER_API_URL}`, {
      reqheaders: {
        'Authorization': 'Bearer forwarded-token'
      }
    }).get('/bundles')
      .reply(200, { payload: LIST_BUNDLES_RESPONSE })
      .get(new RegExp('/bundles/all/widgets.*'))
      .reply(200, { payload: LIST_BUNDLES_WIDGETS_RESPONSE });

    const response = await supertest(app).get('/api/nav')
      .set({ 'Authorization': 'Bearer forwarded-token' })
      .expect(200);

    expect(response.body.payload).toMatchObject(LIST_NAVS_RESPONSE);
  });

  test('handles API response failure', async () => {
    nock(`${process.env.ENTANDO_COMPONENT_MANAGER_API_URL}`)
      .get('/*').reply(404);

    await supertest(app).get('/api/nav')
      .set({ 'Authorization': 'Bearer forwarded-token' })
      .expect(500);
  });

  /*
  test('tests listing all navs without authorization token', async () => {
    const response = await supertest(app).get('/api/nav')
      .expect(403);

    expect(response.body.message).toBe('Access Denied');
  });
  */
});
