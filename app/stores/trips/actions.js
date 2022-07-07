import Types from './';
import {Constant} from '../../configs';

export function GetListTrips() {
  return {
    type: Types.GET_LIST_TRIPS,
    payload: {
      api: Constant.api + 'recruitment/challenge',
    },
  };
}
