import React from 'react';
import {SafeAreaView, View} from 'react-native';
// my screen
import {Home} from './src/screens/Home';
import {Favoris} from './src/screens/Favoris';
import {Login} from './src/screens/Login';
import {ApiScreen} from './src/screens/ApiScreen';
import {Map} from './src/screens/Map';
// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import './resources/i18n/I18n';
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />

    <Stack.Screen name="Login" component={Login} />

    <Stack.Screen name="Favoris" component={Favoris} />

    <Stack.Screen name="ApiScreen" component={ApiScreen} />

    <Stack.Screen name="Map" component={Map} />
  </Stack.Navigator>
);
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
