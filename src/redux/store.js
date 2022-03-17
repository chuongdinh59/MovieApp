import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootSaga from './saga';
import homeReducer from './slice/homeSlice';
// disalbe thunk and add redux-saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
export default configureStore({
  reducer: {
    home: homeReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);
