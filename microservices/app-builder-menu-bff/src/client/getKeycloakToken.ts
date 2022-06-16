import jwt_decode from 'jwt-decode';
import AsyncLock from 'async-lock';
import axios from 'axios';

interface DecodedToken {
    exp: number;
}

export class TokenCache {
  token?: string;
  decoded?: DecodedToken;
  expiration?: Date;
  lock: AsyncLock;

  constructor() {
    this.lock = new AsyncLock();
  }
}

export interface TokenResponse {
  access_token: string
  refresh_token: string
}

export interface KeycloakConfig {
  client_id: string
  client_secret: string
  grant_type: string
  refresh_token?: string
}
  
export const getKeycloakToken = async (): Promise<string> => {
  const cache = global.__KEYCLOAK_TOKEN_CACHE__;
  await cache.lock.acquire('keycloakToken', () => {
    if (cache.token && cache.expiration && cache.expiration > new Date()) {
      console.log('Resolving cached Keycloak Token');
      return Promise.resolve(cache.token);
    } else {
      return fetchToken(cache);
    }
  });
    
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return cache.token!;
};

const fetchToken = async (cache: TokenCache): Promise<string> => {
  console.log('Fetching a new Keycloak Token');
  const payload: KeycloakConfig = {
    client_id: `${process.env.KEYCLOAK_CLIENT_ID}`,
    client_secret: `${process.env.KEYCLOAK_CLIENT_SECRET}`,
    grant_type: 'client_credentials',
  };

  const tokenUrl = `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`;
    
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  
  const res = await axios.post(tokenUrl, urlEncoder(payload), { headers });
  const token = res.data.access_token;
  const decoded = jwt_decode<DecodedToken>(token);
  
  cache.token = token;
  cache.decoded = decoded;
  cache.expiration = new Date(decoded.exp * 1000);
  
  return token;
};

const urlEncoder = (config: KeycloakConfig) => {
  return Object.keys(config)
    .map((k) => `${k}=${config[k as keyof KeycloakConfig]}`)
    .reduce((a, v, i) => (i === 0 ? v : `${a}&${v}`), '');
};

