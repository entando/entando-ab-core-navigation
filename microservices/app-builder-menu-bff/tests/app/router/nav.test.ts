import supertest from 'supertest';
import nock from 'nock';

import app from '../../../src/server';

import {
  LIST_BUNDLES_RESPONSE,
  LIST_BUNDLES_WIDGETS_RESPONSE,
  LIST_NAVS_RESPONSE,
} from './__mocks__/nav.mock';

afterAll(() => {
  nock.cleanAll();
});

describe('User can list all navs', () => {
  test('tests listing all navs successfully', async () => {
    nock(`${process.env.ENTANDO_ECR_INGRESS_URL}`, {
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
    nock(`${process.env.ENTANDO_ECR_INGRESS_URL}`)
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
