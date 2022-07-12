import "@testing-library/jest-dom";
import { server } from "../mocks/server";

beforeAll(() => {
    server.listen()
    window.entando = {
        keycloak: {
            token: 'fake-token'
        }
    }
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
