import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Button,
  Text,
  TextInput,
  FlatList,
} from 'react-native';
import {GlobalStyles} from '../../styles/Globalstyle';
import {Header} from '../../resources/Components/Header';
import {Data} from '../../resources/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Home = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={GlobalStyles.FlatList}>
          <Text style={{fontSize: 20, alignItems: 'center'}}>
            {item.id} : {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const [Id, setId] = useState('');
  const [Title, setTitle] = useState('');

  const [name, setName] = useState('');
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('username', name);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  // methode Add

  function add() {
    // methode cherche
    var FOUND = -1;
    for (var i = 0; i < Data.length; i++) {
      if (Data[i].id == Id.toString()) {
        FOUND = i;
        break;
      }
    }
    if (FOUND == -1) {
      Data.push({id: Id, title: Title});
      console.log(Data);
      return Data;
    } else {
      console.log('error');
    }
  }
  // methode remove

  function Supp() {
    var FOUND = -1;
    for (var i = 0; i < Data.length; i++) {
      if (Data[i].id == Id.toString()) {
        FOUND = i;
        break;
      }
    }
    Data.splice(FOUND, 1);

    console.log(Data);
    return Data;
  }
  // methode recherche
  function recherche() {
    console.log(Data);

    const Datachercher = Data.find(Data => Data.id === Id);

    Data.length = 0;

    Data.push(Datachercher);
    console.log(Data);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={GlobalStyles.container}>
        <View style={{flex: 0.2}}>
          <Header />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            flex: 1,
            alignItems: 'center',
          }}>
          <Text>KeyAsync</Text>
          <TextInput
            style={GlobalStyles.input}
            onChangeText={setName}
            placeholder="get KeyAsync"
          />
          <Text>Id :</Text>

          <TextInput
            style={GlobalStyles.input}
            onChangeText={setId}
            placeholder="get id"
          />
          <Text>Title :</Text>

          <TextInput
            style={GlobalStyles.input}
            onChangeText={setTitle}
            placeholder="get Title"
          />
          <View style={{flexDirection: 'row'}}>
            <Button title="Add" onPress={add} />
            <Button title="remove" onPress={Supp} />
            <Button title="recherche" onPress={recherche} />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>

        <View style={{backgroundColor: '#ffb3c1', flex: 0.3}}>
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
