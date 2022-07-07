import {put, takeLatest} from 'redux-saga/effects';

import Types from './';
import requestApi from '../../configs/RequestApi';

function* getListTrips(action) {
  try {
    let response = yield requestApi.get(action.payload.api);
    if (response.status === 200) {
      yield put({type: Types.GET_LIST_TRIPS_SUCCESS, response});
    } else {
      yield put({type: Types.GET_LIST_TRIPS_FAIL, response});
    }
  } catch (e) {
  } finally {
  }
}

export default function* saga() {
  yield takeLatest(Types.GET_LIST_TRIPS, getListTrips);
}
