import React, {useState} from 'react';
import {GlobalStyles} from '../../styles/Globalstyle';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export const Map = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 34.0282,
          longitude: -6.8227,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{latitude: 34.0242, longitude: -6.8227}}
          image={require('../../assets/Images/icons8-marker-100.png')}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
