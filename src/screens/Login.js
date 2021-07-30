import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable, TextInput} from 'react-native';
import {GlobalStyles} from '../../styles/Globalstyle';
import {Home} from './Home';
import {DataLogin} from '../../resources/DataLogin';
import {Data} from '../../resources/Data';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function login() {
    if (email == null || password == null) {
      alert('Please enter your info');
    } else {
      var checkemail, checkpassword;
      for (let index = 0; index < DataLogin.length; index++) {
        if (DataLogin[index].email == email) {
          checkemail = 1;
        }
        if (DataLogin[index].password == password) {
          checkpassword = 1;
        }
      }
      if (checkpassword == 1 && checkemail == 1) {
        navigation.push('Home');
      } else {
        alert('Please  check ur email or ur password');
      }
    }
  }

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
              onChangeText={setEmail}
            />
          </View>
          <View style={{padding: 10}}>
            <TextInput
              style={styles.input}
              placeholder="Enter your Password"
              onChangeText={setPassword}
            />
          </View>
        </View>
        <View style={{flex: 1}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              margin: 60,
            }}>
            <Pressable style={styles.button} onPress={login}>
              <Text style={styles.text}>Login</Text>
            </Pressable>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Pressable style={styles.button}>
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
