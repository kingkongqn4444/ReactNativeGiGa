/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {FlatList} from '../app/elements';
import checkPropsTypes from 'check-prop-types';
import {shallow} from 'enzyme';
import '../app/setupTests';

jest.useFakeTimers();

describe('FlatList Component', () => {
  it('Render snapshot Flatlist', () => {
    const tree = renderer.create(<FlatList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should not throw a warning', () => {
    const expectedProps = {
      canLoadmore: false,
      listHeader: [],
      data: null,
      renderItem: () => {},
    };
    const propsE = checkPropsTypes(
      FlatList.propTypes,
      expectedProps,
      'props',
      FlatList.name,
    );
    expect(propsE).toBeUndefined();
  });

  // test props

  describe('Have props', () => {
    const props = {
      canLoadmore: false,
      listHeader: [],
      data: [{}],
      renderItem: () => {},
    };

    it('Should render flatlist', () => {
      const wrapper = shallow(<FlatList {...props} />);
      expect(
        wrapper.findWhere((node) => node.prop('testID') === 'render-flatlist'),
      ).toExist();
    });

    it('Should render data empty', () => {
      const wrapper = shallow(<FlatList data={true} />);
      expect(
        wrapper.findWhere(
          (node) => node.prop('testID') === 'render-empty-flatlist',
        ),
      ).toExist();
    });

    it('Should render data null', () => {
      const wrapper = shallow(<FlatList />);
      expect(
        wrapper.findWhere(
          (node) => node.prop('testID') === 'flatlist-data-null',
        ),
      ).toExist();
    });
  });
});
