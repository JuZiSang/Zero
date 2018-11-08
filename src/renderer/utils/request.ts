import axios, { AxiosRequestConfig } from "axios";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
  withCredentials: true
});

// request拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data as any;
    if (res.code !== 200) {
      return Promise.reject(new Error(res ? res.message : "网络连接超时"));
    } else {
      return res.body;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default function(data: AxiosRequestConfig): Promise<any> {
  return service(data);
}
