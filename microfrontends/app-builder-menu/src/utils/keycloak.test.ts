import { getKeycloakToken } from './keycloak';

describe('getKeycloakToken', () => {
  it('should return a correct token string', () => {
    const token = 'TestToken';
    window.entando = {
      ...window.entando,
      keycloak: {
        token
      }
    };
    expect(getKeycloakToken()).toEqual(token);
  });
});
