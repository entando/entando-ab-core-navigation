import { Request } from 'express';
import { AxiosRequestConfig } from 'axios';

export function getRequestConfig(req: Request): AxiosRequestConfig<any> {

    const requestConfig: AxiosRequestConfig<any> = {}

    // Forward Authorization header
    const authHeader = req.header('Authorization')
    if (authHeader !== undefined) {
        requestConfig.headers = { Authorization: authHeader }
    }

    return requestConfig
}