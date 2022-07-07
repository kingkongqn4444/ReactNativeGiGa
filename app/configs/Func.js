import {RFValue} from 'react-native-responsive-fontsize';

const fontFamily = (font) => {
  const fonts = {
    Bold: 'IBMPlexSans-Bold',
    BoldItalic: 'IBMPlexSans-BoldItalic',
    LightItali: 'IBMPlexSans-Italics',
    Light: 'IBMPlexSans-Light',
    Medium: 'IBMPlexSans-Medium',
    MediumItalic: 'IBMPlexSans-MediumItalic',
    Regular: 'IBMPlexSans-Regular',
    Semibold: 'IBMPlexSans-SemiBold',
  };
  if (fonts[font]) {
    return fonts[font];
  }
  return 'IBMPlexSans-Regular';
};

const fontSize = (size) => {
  const fonts = {
    Smaller: RFValue(13, 720),
    Normal: RFValue(15, 720),
    Larger: RFValue(18, 720),
    Bigger: RFValue(24, 720),
  };
  if (fonts[size]) {
    return fonts[size];
  }
  return RFValue(13, 720);
};

export default {
  fontSize,
  fontFamily,
};
