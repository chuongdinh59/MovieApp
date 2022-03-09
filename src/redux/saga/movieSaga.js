import { call } from 'redux-saga/effects';
import movieService from '../../service/movieService';
export function* fetchMovie(data) {
  const res = yield call(movieService.getDetailMovie, data.payload);
  console.log(res);
}
