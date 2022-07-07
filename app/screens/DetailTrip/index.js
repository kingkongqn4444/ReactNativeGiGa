import React from 'react';
import {View} from 'react-native';
import {Text} from '../../elements';
const DetailTrips = ({navigation, ...props}) => {
  const {item} = props.route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {renderRow('Id', item.trip_id)}
      {renderRow('Duration', item.duration)}
      {renderRow('Distance', item.distance)}
      {renderRow('Start Time', item.start_time)}
      {renderRow('End Time', item.end_time)}
    </View>
  );
};

const renderRow = (tag, content) => {
  return (
    <View style={{flexDirection: 'row', paddingHorizontal: 40}}>
      <Text font={'Bold'} text={tag} />
      <View style={{flex: 1}} />
      <Text text={content} />
    </View>
  );
};

export default DetailTrips;
