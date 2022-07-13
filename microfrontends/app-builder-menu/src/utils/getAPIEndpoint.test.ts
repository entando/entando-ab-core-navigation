import { MfeConfig } from '../types/globals';
import { getAPIEndpoint } from './getAPIEndpoint';

describe('verify correcgetAPIEndpoint function correctness', () => {
  it('must return the endpoint', () => {
    const config: MfeConfig = {
      systemParams: {
        api: {
          navigation: {
            url: 'http://localhost:4000/'
          }
        }
      }
    };

    const endpoint = getAPIEndpoint('navigation', config);

    expect(endpoint).toBe('http://localhost:4000');
  });

  it('must return the endpoint without trailing slash', () => {
    const endpointWithTrailingSlash = getAPIEndpoint('navigation', {
      systemParams: {
        api: {
          navigation: {
            url: 'http://localhost:4000/'
          }
        }
      }
    });
    const endpointWithoutTrailingSlash = getAPIEndpoint('navigation', {
      systemParams: {
        api: {
          navigation: {
            url: 'http://localhost:4000'
          }
        }
      }
    });

    expect(endpointWithTrailingSlash).toBe('http://localhost:4000');
    expect(endpointWithoutTrailingSlash).toBe('http://localhost:4000');
  });
});
