import React, {useState} from 'react';
import {SafeAreaView, View, Button, Text, TextInput} from 'react-native';
import {GlobalStyles} from '../../styles/Globalstyle';
import {MyFlatList} from '../../resources/Components/MyFlatList';
import {Header} from '../../resources/Components/Header';
import {Favoris} from './Favoris';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Home = ({navigation}) => {
  const [name, setName] = useState('');
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('username', name);
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
            flex: 0.3,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>hamza</Text>
          <TextInput
            style={GlobalStyles.input}
            onChangeText={setName}
            placeholder="get number"
          />
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

        <View style={{backgroundColor: 'green', flex: 0.3}}>
          <Button title="store Data" onPress={storeData} />
          <Button
            title="Go to Favoris"
            onPress={() => navigation.push('Favoris', {keyAsync: 'username'})}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
