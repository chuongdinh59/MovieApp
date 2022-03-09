import axiosClient from './axios';

export const homeService = {
  getHome(page = 0) {
    return axiosClient.get('homePage/getHome', {
      params: {
        page,
      },
    });
  },
  getTopSearch() {
    return axiosClient.get('search/v1/searchLeaderboard');
  },
};
