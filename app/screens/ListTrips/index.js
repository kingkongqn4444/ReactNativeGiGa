import React, {useEffect, useState, useRef, useCallback} from 'react';
import {View, RefreshControl} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {GetListTrips} from '../../stores/trips/actions';
import {makeSelectListTrip} from './selector';
import {FlatList} from '../../elements';
import {ItemTrip} from '../../components';
import NetInfo from '@react-native-community/netinfo';
import DropdownAlert from 'react-native-dropdownalert';

const ListTrips = ({navigation}) => {
  const dispatch = useDispatch();
  const listTrips = useSelector(makeSelectListTrip);
  const dropdownAlert = useRef();
  const [refreshing] = useState(false);

  const unsubscribe = NetInfo.addEventListener((state) => {
    if (!state.isConnected) {
      dropdownAlert.current.alertWithType('error', 'Info', 'Connect Lost.');
    }
  });

  useEffect(() => {
    dispatch(GetListTrips());
    return () => {
      unsubscribe();
    };
  }, []);

  const onRefresh = () => {
    dispatch(GetListTrips());
  };

  const handleClickDetail = useCallback((item) => {
    navigation.navigate('DetailTrip', {item: item});
  }, []);

  const renderItemTrips = (item) => {
    return <ItemTrip item={item} onPress={(item) => handleClickDetail(item)} />;
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={listTrips}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={renderItemTrips}
      />
      <DropdownAlert ref={dropdownAlert} />
    </View>
  );
};

export default ListTrips;
