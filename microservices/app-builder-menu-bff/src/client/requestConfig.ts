import { Request } from 'express';
import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

type RequestConfig = AxiosRequestConfig<{
    headers?: AxiosRequestHeaders
}>

export function getRequestConfig(req: Request) {
    const requestConfig: RequestConfig = {};

    // Forward Authorization header
    const authHeader = req.header('Authorization');
    if (authHeader !== undefined) {
        requestConfig.headers = { Authorization: authHeader };
    }

    return requestConfig;
}