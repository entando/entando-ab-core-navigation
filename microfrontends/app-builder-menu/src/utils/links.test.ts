import { convertToAdminConsoleUrl, routeConverter } from './links';

describe('verify convertToAdminConsoleUrl function correctness', () => {
  it('should return correct url', () => {
    const adminConsoleBaseUrl = 'https://admin.test.com';
    const url = 'test';
    expect(convertToAdminConsoleUrl(adminConsoleBaseUrl, url)).toBe(
      `${adminConsoleBaseUrl}/${url}`
    );
  });
});

describe('verify routeConverter function correctness', () => {
  it('should return correct url', () => {
    const route = '/route/:param1/to/:param2/final/:param3';
    const params = {
      param1: 'b',
      param2: 'd',
      param3: '1'
    };
    expect(routeConverter(route, params)).toBe('/route/b/to/d/final/1');
  });
});
