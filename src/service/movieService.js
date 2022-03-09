import axiosClient from './axios';

const movieService = {
  getDetailMovie(id) {
    return axiosClient.get('movieDrama/get', {
      params: {
        id,
        category: 0,
      },
    });
  },
};

export default movieService;
