import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  userContainer: {flexDirection: 'row'},
  userTextContainer: {justifyContent: 'center', marginLeft: 10},
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: '16',
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: 20,
  },
  userPostContainer: {
    marginTop: 35,
  },
  userPostStats: {marginLeft: 10, flexDirection: 'row'},
  userPostStatButton: {flexDirection: 'row'},
});

export default style;
