import React from 'react';

import style from './style';
import {Image, ScrollView, View} from 'react-native';

const ProfileTabContent = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.ProfileTabContentContainer}>
      <View style={style.ProfileTabContent}>
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
