// api.ts

import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL, // 设置基础URL
    timeout: 10000, // 请求超时时间
});

// 请求拦截器
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 在发送请求之前做些什么
        // 例如，可以在请求头中添加授权信息
        config.data = JSON.stringify(config.data)
        const token = localStorage.getItem('itcast_geek_h5');
        config.headers["Content-Type"] = "application/json"
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
api.interceptors.response.use(
    (response: AxiosResponse) => {
        // 对响应数据做些什么
        return response;
    },
    (error) => {
        // 对响应错误做些什么
        return Promise.reject(error);
    }
);

export default api;
