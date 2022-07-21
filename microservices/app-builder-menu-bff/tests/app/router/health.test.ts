import supertest from 'supertest';
import app from '../../../src/server';

describe('Healthcheck endpoint', () => {

    test('/health returns OK', async () => {
        const response = await supertest(app).get('/health').expect(200);
        expect(response.body.payload).toMatchObject({ status: 'OK' });
    });
});
