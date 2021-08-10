import React, {useState} from 'react';
import {GlobalStyles} from '../../styles/Globalstyle';

import {Text, View, FlatList, Button, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {Map} from './Map';
export const ApiScreen = ({navigation}) => {
  const [dataApi, setdataApi] = useState(null);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => console.log(item)}>
        <View style={GlobalStyles.FlatList}>
          <Text style={{fontSize: 15, alignItems: 'center'}}>
            {item.id} / Title : {item.Name} /Rating :
            {JSON.stringify(item.Rating)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const goForAxios = () => {
    axios.get('https://retoolapi.dev/50blU5/data').then(response => {
      console.log(response.data);
      setTimeout(() => {
        setdataApi(response.data);
      }, 1000);
    });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'red', fontSize: 18}}> Data from Api By Axios</Text>
      <View style={{flex: 1}}>
        <FlatList
          data={dataApi}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={{flex: 0.3}}>
        <Button title="get data from API" onPress={goForAxios} />
        <Button title="go to Map" onPress={() => navigation.push('Map')} />
      </View>
    </View>
  );
};
