import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Button,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  StatusBar,
} from 'react-native';
import {GlobalStyles} from '../../styles/Globalstyle';
import {Header} from '../../resources/Components/Header';
import {Data} from '../../resources/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

export const Home = ({navigation}) => {
  const {t, i18n} = useTranslation();

  // render item in flatList
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
      <StatusBar
        barStyle="dark-content"
        // dark-content, light-content and default
        hidden={false}
        //To hide statusBar
        backgroundColor="#ffb3c1"
        //Background color of statusBar
        translucent={false}
        //allowing light, but not detailed shapes
        networkActivityIndicatorVisible={true}
      />
      <View style={GlobalStyles.container}>
        <View style={{flex: 0.2}}>
          <Header />
        </View>
        <ScrollView style={{flex: 1}}>
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
            <Text>{t('Identify')} :</Text>

            <TextInput
              style={GlobalStyles.input}
              onChangeText={setId}
              placeholder="get id"
            />
            <Text> {t('Title')} :</Text>

            <TextInput
              style={GlobalStyles.input}
              onChangeText={setTitle}
              placeholder="get Title"
            />
            <View style={{flexDirection: 'row'}}>
              <Button title={t('Add')} onPress={add} />
              <Button title={t('Delete')} onPress={Supp} />
              <Button title={t('Search')} onPress={recherche} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button
                title="Arabic"
                onPress={() => {
                  i18n.changeLanguage((i18n.language = 'ar'));
                }}
              />
              <Button
                title="Francais"
                onPress={() => {
                  i18n.changeLanguage((i18n.language = 'fr'));
                }}
              />
              <Button
                title="English"
                onPress={() => {
                  i18n.changeLanguage((i18n.language = 'en'));
                }}
              />
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            backgroundColor: '#fff',
            flex: 0.7,
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
            title={t('GotoFavoris')}
            onPress={() => navigation.push('Favoris', {keyAsync: 'username'})}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
