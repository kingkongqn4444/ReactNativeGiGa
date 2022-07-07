import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {GeneralStyle, Colors} from '../utils';
import {Constant} from '../configs';
import moment from 'moment';
import {Text} from '../elements';

const ItemTrips = React.memo(({item, onPress, ...props}) => {
  const {container, viewItemTime, lineTime, viewDistance} = style;
  const {trip_id, duration, distance, start_time, end_time} = item;

  return (
    <TouchableOpacity onPress={() => onPress(item)} style={container}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text font={'Bold'} text={'Start Time'} />
          <Text text={moment(start_time).format(Constant.dateFormat)} />
        </View>
        <View style={viewItemTime}>
          <View style={lineTime} />
          <View style={viewDistance}>
            <Text text={'Distance'} />
            <Text text={`${distance} Km`} />
          </View>
          <View style={lineTime} />
        </View>
        <View>
          <Text font={'Bold'} text={'End Time'} />
          <Text text={moment(end_time).format(Constant.dateFormat)} />
        </View>
      </View>
      <View style={[lineTime, {margin: 10}]} />
      <View style={{flexDirection: 'row'}}>
        <Text font={'Bold'} text={'Trips Id : '} />
        <Text text={trip_id} />
        <View style={{flex: 1}} />
        <Text font={'Bold'} text={'Duration : '} />
        <Text text={duration} />
      </View>
    </TouchableOpacity>
  );
});

ItemTrips.defaultProps = {
  item: {
    trip_id: 'trip_id',
    duration: 'duration',
    distance: 'distance',
    start_time: 'start_time',
    end_time: 'end_time',
  },
  onPress: () => {},
};

ItemTrips.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func,
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    ...GeneralStyle.shadow,
    backgroundColor: '#FFF',
  },
  viewItemTime: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  lineTime: {height: 1, flex: 1, backgroundColor: Colors.grayColor},
  viewDistance: {alignItems: 'center', justifyContent: 'center'},
});

export default ItemTrips;
