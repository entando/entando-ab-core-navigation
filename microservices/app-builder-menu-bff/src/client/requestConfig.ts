import { Request } from 'express';
import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

type RequestConfig = AxiosRequestConfig<{
    headers?: AxiosRequestHeaders
}>

export function getRequestConfig(req: Request) {
  const requestConfig: RequestConfig = {};

  // Forward Authorization header and add Entando TenantCode header
  const authHeader = req.header('Authorization');
  const tenantCode = process.env.TENANT_CODE || 'primary';
  if (authHeader !== undefined) {
    requestConfig.headers = { 
      Authorization: authHeader,
      'X-ENTANDO-TENANTCODE': tenantCode
    };
  } else {
    requestConfig.headers = { 'X-ENTANDO-TENANTCODE': tenantCode };
  }

  return requestConfig;
}