import axios from 'axios';

import { MenuItem } from '../types/api';
import { MfeConfig } from '../types/globals';
import { getKeycloakTokenFromWindow } from '../utils/keycloak';

export interface PbcApiResponse {
  payload: MenuItem[];
}

export async function getPBCNav(config: MfeConfig) {
  return axios.get<PbcApiResponse>(
    `${config.systemParams.api.navigation.url}/api/nav`,
    {
      headers: {
        Authorization: `Bearer ${getKeycloakTokenFromWindow()}`
      }
    }
  );
}
