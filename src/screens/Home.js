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
  I18nManager,
  Modal,
  Alert,
} from 'react-native';
import {GlobalStyles} from '../../styles/Globalstyle';
import {Login} from './Login';
import {Header} from '../../resources/Components/Header';
import {Data} from '../../resources/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconZocial from 'react-native-vector-icons/Zocial';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';
export const Home = ({navigation}) => {
  const {t, i18n} = useTranslation();

  // render item in flatList
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => console.log(item)}>
        <View style={GlobalStyles.FlatList}>
          <Text style={{fontSize: 15, alignItems: 'center'}}>
            {item.id} : Title : {item.title} Tag: {item.tag}
          </Text>
          <IconZocial name="bitcoin" />
        </View>
      </TouchableOpacity>
    );
  };

  const [Id, setId] = useState('');
  const [Title, setTitle] = useState('');

  const [model, setModel] = useState(null);

  const [Datagrp, setDatagrp] = useState(Data);
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
  function addSave() {
    // methode cherche
    if (Id == null && Title === '') {
      alert('Please enter your info');
    } else {
      var FOUND = -1;
      for (var i = 0; i < Data.length; i++) {
        if (Data[i].id === Id) {
          FOUND = i;
          break;
        }
      }
      if (FOUND == -1) {
        Data.push({id: Id, title: Title});
        setId(null);
        setTitle('');

        console.log(Data);

        return Data;
      } else {
        console.log('error');
      }
    }
  }

  function add() {
    // methode cherche
    if (Id == null && Title === '') {
      alert('Please enter your info');
    } else {
      var FOUND = -1;
      for (var i = 0; i < Data.length; i++) {
        if (Data[i].id == Id.toString()) {
          FOUND = i;
          break;
        }
      }
      if (FOUND == -1) {
        Data.push({id: Id, title: Title});

        Alert.alert('Done', 'add is done');

        setTimeout(() => {
          // write your functions
          setModel(false);
        }, 1500);
        setId('');
        setTitle('');
        console.log(Data);

        return Data;
      } else {
        console.log('error');
      }
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
      <Modal animationType="slide" visible={model}>
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1}}>
            <View>
              <TouchableOpacity onPress={() => setModel(false)}>
                <Text>close</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text>{t('Identify')} :</Text>

              <TextInput
                style={GlobalStyles.input}
                onChangeText={setId}
                placeholder={t('getid')}
                value={Id}
              />
              <Text> {t('Title')} :</Text>

              <TextInput
                style={GlobalStyles.input}
                onChangeText={setTitle}
                placeholder={t('getTitle')}
                value={Title}
              />
              <Button title="Save" onPress={add} />
              <Button title="Save & New" onPress={addSave} />
            </View>
          </View>
        </SafeAreaView>
      </Modal>
      <View style={GlobalStyles.container}>
        <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity onPress={() => setDatagrp(Data)}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setDatagrp([...Data.filter(e => e.tag === 'FrontEnd')])
            }>
            <Text>Front End</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setDatagrp([...Data.filter(e => e.tag === 'BackEnd')])
            }>
            <Text>Back End</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setDatagrp([...Data.filter(e => e.tag === 'Mobile')])
            }>
            <Text>Mobile</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              backgroundColor: '#fff',
              flex: 1,
              alignItems: 'flex-start',
            }}>
            <Text style={{}}>KeyAsync</Text>
            <TextInput
              style={GlobalStyles.input}
              onChangeText={setName}
              placeholder="get KeyAsync"
            />

            <View style={{flexDirection: 'row'}}>
              <Button title={t('Add')} onPress={() => setModel(true)} />
              <Button title={t('Delete')} onPress={Supp} />
              <Button title={t('Search')} onPress={recherche} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button
                title="Arabic"
                onPress={() => {
                  i18n
                    .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
                    .then(() => {
                      I18nManager.forceRTL(i18n.language === 'ar');
                      RNRestart.Restart();
                    });
                }}
              />
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            backgroundColor: '#fff',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FlatList
            data={Datagrp}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>

        <View style={{backgroundColor: '#ffb3c1', flex: 0.4}}>
          <Button title={t('storeData')} onPress={storeData} />
          <Button
            title={t('GotoFavoris')}
            onPress={() => navigation.push('Favoris', {keyAsync: 'username'})}
          />
          <Button title="login" onPress={() => navigation.push('Login')} />
        </View>
      </View>
    </SafeAreaView>
  );
};
