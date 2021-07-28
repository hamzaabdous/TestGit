import React, {useState} from 'react';
import {SafeAreaView, View, Button} from 'react-native';
import {GlobalStyles} from '../../styles/Globalstyle';
import {MyFlatList} from '../../resources/Components/MyFlatList';
import {Header} from '../../resources/Components/Header';
import {Favoris} from './Favoris';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Home = ({navigation}) => {
  const [name, setName] = useState('hamza');
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('username', name);
      navigation.push('Favoris', {keyAsync: 'username'});
    } catch (e) {
      // saving error
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
          <MyFlatList />
        </View>
        <View style={{backgroundColor: 'green', flex: 0.2}}>
          <Button title="Favoris" onPress={storeData} />
        </View>
      </View>
    </SafeAreaView>
  );
};
