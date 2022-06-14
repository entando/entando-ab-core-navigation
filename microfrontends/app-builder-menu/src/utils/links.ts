export const convertToAdminConsoleUrl = (
  adminConsoleBaseUrl: string,
  url: string
) => `${adminConsoleBaseUrl}/${url}`;

export const routeConverter = (
  route: string,
  params: Record<string, string>
) => {
  const paramsArray = Object.keys(params);
  if (!paramsArray.length) {
    return route;
  }

  return paramsArray.reduce(
    (rt, key) => rt.replace(`:${key}`, params[key]),
    route
  );
};

export const HOMEPAGE_CODE = 'homepage';
