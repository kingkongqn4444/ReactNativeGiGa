import Types from './';
import produce from 'immer';

const initialState = {
  listTrips: null,
};

export default function (state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.GET_LIST_TRIPS:
        draft.listTrips = null;
        break;
      case Types.GET_LIST_TRIPS_SUCCESS:
        draft.listTrips = action.response.data.trips;
        break;
      default:
        return state;
    }
  });
}
