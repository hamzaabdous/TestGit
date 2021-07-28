import React from 'react';
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

export const Favoris = ({navigation}) => {
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
        </View>
        <View style={{backgroundColor: 'green', flex: 0.2}}>
          <Button title="Home" onPress={() => navigation.push('Home')} />
        </View>
      </View>
    </SafeAreaView>
  );
};
