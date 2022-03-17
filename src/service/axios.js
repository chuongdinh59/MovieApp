import axios from 'axios';
import queryString from 'query-string';
export const axiosConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '34dcbc9d3f10f721c92d446632f289f2',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
const axiosClient = axios.create({
  baseURL: axiosConfig.baseUrl,
  headers: {
    'Content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify({ ...params, api_key: axiosConfig.apiKey }),
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
