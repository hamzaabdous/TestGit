import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {GlobalStyles} from '../../styles/Globalstyle';

export const Favoris = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={GlobalStyles.container}>
        <View style={{backgroundColor: 'red', flex: 0.2}}>
          <Text style={GlobalStyles.title}>header</Text>
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
          <Text style={GlobalStyles.title}>footer</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
