import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, View, Text} from 'react-native';
import {PlaceHolderList} from '../components';

const FlatLists = React.memo(({renderItem, data, canLoadmore, ...props}) => {
  if (data) {
    if (data.length > 0) {
      return (
        <View testID="render-flatlist" style={{flex: 1, paddingVertical: 10}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={data}
            ItemSeparatorComponent={() => <View style={{marginTop: 10}} />}
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold={0.05}
            scrollEventThrottle={16}
            legacyImplementation={false}
            {...props}
            renderItem={({item, index}) => renderItem(item, index)}
          />
        </View>
      );
    } else {
      return (
        <View
          testID="render-empty-flatlist"
          style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Empty Data</Text>
        </View>
      );
    }
  } else {
    return (
      <View
        testID="flatlist-data-null"
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {placeHolderNewSmall()}
      </View>
    );
  }
});

const placeHolderNewSmall = () => {
  return ['1', '2', '3', '4', '5'].map((item) => (
    <PlaceHolderList key={'H_' + item} onReady={false} animate="fade" />
  ));
};

FlatLists.propTypes = {
  canLoadmore: PropTypes.bool,
  listHeader: PropTypes.array,
  data: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  renderItem: PropTypes.func,
};

FlatLists.defautlProps = {
  canLoadmore: false,
  listHeader: [],
  data: null,
  renderItem: () => {},
};

export default FlatLists;
