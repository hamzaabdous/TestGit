import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';
import {Header} from '../../resources/Components/Header';

import {GlobalStyles} from '../../styles/Globalstyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Favoris = ({navigation, route}) => {
  const [state, setstate] = useState('');
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(route.params.keyAsync);
      if (value !== null) {
        // value previously stored
        console.log(value);
        setstate(value);
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={GlobalStyles.container}
        source={require('../../assets/Images/Sanstitre.gif')}>
        <View style={{flex: 0.2}} />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Favoris </Text>
          <Text style={{color: '#f44', fontSize: 20}}>{state}</Text>
        </View>
        <View style={{flex: 0.2}}>
          <Button title="Home" onPress={() => navigation.push('Home')} />
          <Button title="getdata" onPress={getData} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
