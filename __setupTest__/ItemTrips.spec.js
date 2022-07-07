/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ItemTrips from '../app/components/itemTrip';
import PlaceHolderList from '../app/components/placeHolderList';
import checkPropsTypes from 'check-prop-types';
import '../app/setupTests';

jest.useFakeTimers();

describe('ItemTrips Component', () => {
  it('Render snapshot', () => {
    const tree = renderer.create(<ItemTrips />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Render snapshot', () => {
    const tree = renderer.create(<PlaceHolderList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should not throw a warning', () => {
    const expectedProps = {
      item: {
        trip_id: 'trip_id',
        duration: 'duration',
        distance: 'distance',
        start_time: 'start_time',
        end_time: 'end_time',
      },
      onPress: () => {},
    };
    const propsE = checkPropsTypes(
      ItemTrips.propTypes,
      expectedProps,
      'props',
      ItemTrips.name,
    );
    expect(propsE).toBeUndefined();
  });
});
