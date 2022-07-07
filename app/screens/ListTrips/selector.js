import {createSelector} from 'reselect';

const makeSelectListTrip = createSelector(
  (state) => state.Trips.listTrips,
  (listTrips) => listTrips,
);

export {makeSelectListTrip};
