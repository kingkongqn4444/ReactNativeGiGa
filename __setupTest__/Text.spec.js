/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Text} from '../app/elements';
import checkPropsTypes from 'check-prop-types';
import {shallow, mount} from 'enzyme';
import '../app/setupTests';

jest.useFakeTimers();

describe('Test Component', () => {
  it('Render snapshot text', () => {
    const tree = renderer.create(<Text />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should not throw a warning', () => {
    const expectedProps = {
      size: 'Smaller',
      color: '#000',
      numberOfLines: 1,
      text: 'No Text',
      font: 'Regular',
    };
    const propsE = checkPropsTypes(
      Text.propTypes,
      expectedProps,
      'props',
      Text.name,
    );
    expect(propsE).toBeUndefined();
  });

  // test props

  describe('Have props', () => {
    const props = {
      size: 'Smaller',
      color: '#000',
      numberOfLines: 1,
      text: 'No Text',
      font: 'Regular',
    };
    it('Should render without errors', () => {
      const wrapper = shallow(<Text {...props} />);
      expect(
        wrapper.findWhere((node) => node.prop('testID') === 'have-render'),
      ).toExist();
    });
  });
});
