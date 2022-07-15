import axios from 'axios';

import { MenuItem } from '../types/api';
import { MfeConfig } from '../types/globals';
import { getKeycloakToken } from '../utils/keycloak';
import { getAPIEndpoint } from '../utils/getAPIEndpoint';

export interface PbcApiResponse {
  payload: MenuItem[];
}

export async function getPBCNav(config: MfeConfig) {
  return axios.get<PbcApiResponse>(
    `${getAPIEndpoint('navigation', config)}/api/nav`,
    {
      headers: {
        Authorization: `Bearer ${getKeycloakToken()}`
      }
    }
  );
}
