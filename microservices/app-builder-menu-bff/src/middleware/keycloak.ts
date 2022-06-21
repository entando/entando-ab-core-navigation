import KeycloakConnect, { KeycloakConfig, KeycloakOptions } from 'keycloak-connect';
import { ForbiddenError } from '../error/errors';

export default class Keycloak extends KeycloakConnect {
  constructor() {
    //Force a cast because Types are broken on original library: https://github.com/keycloak/keycloak-nodejs-connect/pull/250
    const config: KeycloakConfig = <KeycloakConfig> <unknown> {
      //More details on these properties: https://www.keycloak.org/docs/latest/securing_apps/
      'auth-server-url': `${process.env.KEYCLOAK_URL}`,
      realm: `${process.env.KEYCLOAK_REALM}`,
    };

    const options: KeycloakOptions = {};

    super(options, config);
  }

  redirectToLogin() {
    return false;
  }

  accessDenied() {
    throw new ForbiddenError();
  }
}

export const keycloak = new Keycloak();
