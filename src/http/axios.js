import axios from 'axios';
// import { rootDomain } from '@/global/constants';
// const BASE_URL = rootDomain;

const instance = axios.create({
  // baseURL: BASE_URL,
  timeout: 10000,
  // xsrfCookieName: 'csrf-token',
  // xsrfHeaderName: 'x-csrf-token',

  // 跨域情况下,axios不会自动带上token, 需要将此项设置为true, 后端cors不能设置为*, 且要把Credentials设置成true
  withCredentials: true,
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    // 'Content-Type': 'application/json;charset=utf-8'//默认为application/json; 
    // 'Content-Type': 'multipart/form-data'
  }
});

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error.response.data);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    if (response.data.resultCode === '0') {
      return response.data.data;
    } else {
      return Promise.reject(response.data);
    }
    
  },
  error => {
    // 对响应错误做点什么
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default instance;