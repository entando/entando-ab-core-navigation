import "@testing-library/jest-dom";
import { server } from "../mocks/server";

beforeAll(() => {
    server.listen()
    window.entando = {
        keycloak: {
            token: 'fake-token'
        },
        router: {
          listen: jest.fn(() => () => {}),
          push: jest.fn(),
          replace: jest.fn(),
        },
    }
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
