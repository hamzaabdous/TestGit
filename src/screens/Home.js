import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {GlobalStyles} from '../../styles/Globalstyle';
import {MyFlatList} from '../../resources/Components/MyFlatList';
import {Header} from '../../resources/Components/Header';
export const Home = () => {
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
          <Text style={GlobalStyles.title}>footer</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
