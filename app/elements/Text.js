import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {Func} from '../configs';

const Texts = React.memo(({text, numberOfLines, font, color, size}) => {
  const defaultStyle = {
    fontFamily: Func.fontFamily(font),
    color: color,
    fontSize: Func.fontSize(size),
  };
  return (
    <Text
      style={[defaultStyle]}
      testID="have-render"
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
});

Texts.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  numberOfLines: PropTypes.number,
  font: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

Texts.defaultProps = {
  size: 'Smaller',
  color: '#000',
  numberOfLines: 1,
  text: 'No Text',
  font: 'Regular',
};

export default Texts;
