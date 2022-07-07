import Types from '../app/stores/trips';
import tripsReducers from '../app/stores/trips/reducer';

const initialState = {
  listTrips: null,
};

describe('Trips Reducer', () => {
  it('Should return default state', () => {
    const newState = tripsReducers(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('Should return new state if receiving type', () => {
    const trips = [
      {
        trip_id: 17094,
        duration: 1956,
        distance: 16,
        start_time: '2017-07-04T07:50:36+0000',
        end_time: '2017-07-04T08:23:12+0000',
      },
      {
        trip_id: 17095,
        duration: 891,
        distance: 4,
        start_time: '2017-07-04T08:30:45+0000',
        end_time: '2017-07-04T08:45:36+0000',
      },
    ];

    const newState = tripsReducers(initialState, {
      type: Types.GET_LIST_TRIPS_SUCCESS,
      response: {
        data: {
          trips: trips,
        },
      },
    });
    expect(newState.listTrips).toEqual(trips);
  });
});
