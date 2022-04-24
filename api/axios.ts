import { LocalStorageEnum } from '@common/constants/localStorage.enums';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';

const axiosInstance = axios.create({
  baseURL: process.env.API_ENDPOINT,
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const accessToken = localStorage.getItem(LocalStorageEnum.AccessToken);
    if (accessToken) {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      config.headers = Object.assign(config.headers, headers);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const statusCode = error?.response?.status;

    switch (statusCode) {
      case StatusCodes.UNAUTHORIZED:
        // TODO: handle remove accessToken if it exist and then navigate it to
        // login page
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
