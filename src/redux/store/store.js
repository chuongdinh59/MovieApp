import createSagaMiddleware from 'redux-saga';
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootSaga from '../saga/rootSaga';
import homeReducer from '../reducers/homeSlice';
// disalbe thunk and add redux-saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const rootReducer = combineReducers({
  home: homeReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
sagaMiddleware.run(rootSaga);
