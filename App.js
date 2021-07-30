import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Home} from './src/screens/Home';
import {Favoris} from './src/screens/Favoris';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import './resources/i18n/I18n';
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />

    <Stack.Screen name="Favoris" component={Favoris} />
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
