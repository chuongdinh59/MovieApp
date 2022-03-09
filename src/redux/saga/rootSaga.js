import { take, takeEvery } from 'redux-saga/effects';
import { fetchDetail } from '../reducers/movieSlice';
import { fetchHome, fetchTopSearch } from './homeSaga';
import { fetchMovie } from './movieSaga';

export default function* rootSaga() {
  yield takeEvery('fetchHome', fetchHome);
  yield takeEvery('fetchTopSearch', fetchTopSearch);
  yield takeEvery(fetchDetail.type, fetchMovie);
}
