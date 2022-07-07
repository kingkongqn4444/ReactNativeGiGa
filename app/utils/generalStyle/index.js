import {Dimensions} from 'react-native';
import Colors from '../color';
const Styles = {
  screen_width: Dimensions.get('window').width,
  screen_height: Dimensions.get('window').height,
  shadow: {
    shadowColor: Colors.grayColor,
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
};

export default Styles;
