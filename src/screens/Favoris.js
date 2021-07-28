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
      <View style={GlobalStyles.container}>
        <View style={{backgroundColor: 'red', flex: 0.2}}>
          <Header />
        </View>
        <View
          style={{
            backgroundColor: 'gold',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{}}>Favoris </Text>
          <Text style={{}}>{state}</Text>
        </View>
        <View style={{backgroundColor: 'green', flex: 0.2}}>
          <Button title="Home" onPress={() => navigation.push('Home')} />
          <Button title="getdata" onPress={getData} />
        </View>
      </View>
    </SafeAreaView>
  );
};
