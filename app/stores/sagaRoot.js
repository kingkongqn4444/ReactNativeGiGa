import {all} from 'redux-saga/effects';
import Trips from './trips/saga';

export default function* sagaRoot() {
  yield all([Trips()]);
}
