import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'X-Api-Key': import.meta.env.VITE_X_API_KEY
  }
});

const Axios = {
  getInstance() {
    return axiosInstance;
  },
  getAuthorization() {
    return axiosInstance.defaults.headers.common.Authorization;
  },
  setAuthorization(jwt: string) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${jwt}`;
  },
  deleteAuthorization() {
    delete axiosInstance.defaults.headers.common.Authorization;
  },
  get<T>(url: string, config?: AxiosRequestConfig) {
    return axiosInstance.get<T>(url, config);
  },
  post<T, D>(url: string, data?: D, config?: AxiosRequestConfig) {
    return axiosInstance.post<T>(url, data, config);
  },
  put<T, D>(url: string, data?: D, config?: AxiosRequestConfig) {
    return axiosInstance.put<T>(url, data, config);
  },
  delete<T>(url: string, config?: AxiosRequestConfig) {
    return axiosInstance.delete<T>(url, config);
  },
  patch<T, D>(url: string, data?: D, config?: AxiosRequestConfig) {
    return axiosInstance.patch<T>(url, data, config);
  }
};

export default Axios;
