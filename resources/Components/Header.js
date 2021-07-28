import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {GlobalStyles} from '../../styles/Globalstyle';

export const Header = ({navigation}) => {
  const pressedLogo = () => {
    console.log('LOGO');
  };
  const pressedReactNativeLogo = () => {
    console.log('ReactNative');
  };

  return (
    <View style={GlobalStyles.Header}>
      <TouchableOpacity
        style={GlobalStyles.Icon}
        onPress={pressedReactNativeLogo}>
        <Image
          style={GlobalStyles.Icon}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </TouchableOpacity>

      <View>
        <Text style={GlobalStyles.HeaderText}>Hello World</Text>
      </View>
      <TouchableOpacity style={GlobalStyles.IconHeart} onPress={pressedLogo}>
        <Image
          style={{width: 50, height: 50}}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
