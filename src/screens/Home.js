import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {GlobalStyles} from '../../styles/Globalstyle';
import {MyFlatList} from '../../resources/Components/MyFlatList';
import {Header} from '../../resources/Components/Header';
import {Favoris} from './Favoris';
export const Home = ({navigation}) => {
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
          <MyFlatList />
        </View>
        <View style={{backgroundColor: 'green', flex: 0.2}}>
          <Button title="hamza" onPress={() => navigation.push('Favoris')} />
        </View>
      </View>
    </SafeAreaView>
  );
};
