import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Data} from '../Data';
export const MyFlatList = () => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View
          style={{
            margin: 20,
            height: 80,
            width: 300,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#F79D84',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 20, alignItems: 'center'}}>
            {item.id} : {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={Data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};
