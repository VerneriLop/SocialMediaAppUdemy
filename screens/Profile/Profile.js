import React from 'react';
import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View style={style.profileImageContainer}>
          <Image
            source={require('../../assets/images/default_profile.png')}
            style={style.profileImage}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
