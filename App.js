import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import customStyle from './customStyle';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        customMapStyle={customStyle}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker 
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Local de Entrega"
          description="Ruas das Palmeiras, 25"
          icon={{ 
            uri: "https://img.icons8.com/plasticine/1x/truck.png" 
          }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: '100%'
  }
});
