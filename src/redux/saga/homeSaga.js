import { call, put } from 'redux-saga/effects';
import { homeService } from '../../service/homeService';
import { setDataHome, setTopSearch } from '../reducers/homeSlice';

export function* fetchHome() {
  const res = yield call(homeService.getHome);
  yield put(setDataHome(res?.data.recommendItems));
}

export function* fetchTopSearch() {
  const res = yield call(homeService.getTopSearch);

  yield put(setTopSearch(res));
}
