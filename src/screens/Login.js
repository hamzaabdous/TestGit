import React, {Component} from 'react';
import {Text, View, StyleSheet, Pressable, TextInput} from 'react-native';
import {GlobalStyles} from '../../styles/Globalstyle';
import {Home} from './Home';
export const Login = ({navigation}) => {
  return (
    <View style={GlobalStyles.container}>
      <View
        style={{
          flex: 1,
          margin: 40,
          backgroundColor: '#e76f51',
          borderRadius: 30,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Welcome to My World
          </Text>
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <View style={{padding: 10}}>
            <TextInput
              style={styles.input}
              placeholder="Enter your Email Address"
            />
          </View>
          <View style={{padding: 10}}>
            <TextInput style={styles.input} placeholder="Enter your Password" />
          </View>
        </View>
        <View style={{flex: 1}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              margin: 60,
            }}>
            <Pressable style={styles.button} onPress={() => {
                navigation.push('Home');
            }}>
              <Text style={styles.text}>Login</Text>
            </Pressable>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Pressable style={styles.button} >
              <Text style={styles.text}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#F7484f',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  input: {
    height: 35,
    width: 205,
    padding: 5,
    borderWidth: 1,
  },
});
