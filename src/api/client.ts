import axios, { AxiosRequestHeaders } from 'axios';
import apis from './index';

function apiRequestProtocol() {
  return axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    withCredentials: true,
  });
}

const NoAuthURL = ['/login'];

const apiClient = apiRequestProtocol();

apiClient.interceptors.request.use(async (config) => {
  if (config.url && NoAuthURL.indexOf(config.url) !== -1) {
    return config;
  } else {
    const { token } = await apis.usersApi.getToken();
    if (config.headers) {
      (config.headers as AxiosRequestHeaders).Authorization = token
        ? `${token}`
        : '';
    }
    return config;
  }
});

export default apiClient;
