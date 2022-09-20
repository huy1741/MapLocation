import React, { useState,useEffect,useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
const MapScreen = ({route}) =>{
  const [errorMsg, setErrorMsg] = useState(null);
  const { latitude, longitude,latitudeDelta,longitudeDelta } = route.params;
  const mapRef = useRef(null);
  const onMapReady = () => {
    console.log('clicked', mapRef.current.animateToRegion)
    mapRef.current.animateToRegion(
      ({latitude: latitude,
        longitude: longitude,
        latitudeDelta:latitudeDelta,
        longitudeDelta: longitudeDelta,
      }),300
    )
}
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
  }, []);



  const data = {
    "locations": [
      {
        "name": "Helsinki Railway Station",
        "latitude": 60.17180829859326,
        "longitude": 24.941542728643768
      },
      {
        "name": "Redi Shopping Centre",
        "latitude": 60.188128353609535,
        "longitude": 24.979339955657537
      },
      {
        "name": "Mall of Tripla",
        "latitude": 60.19869733530782,
        "longitude": 24.93023461031676
      },
      {
        "name": "Itis",
        "latitude": 60.21403715728729,
        "longitude": 25.082768576413592
      },
      {
        "name": "Kamppi",
        "latitude": 60.169439228353895,
        "longitude": 24.93326124234037
      },
    ]
  };
      return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      ref={mapRef}
      onMapReady={() => onMapReady()}
      showsUserLocation={true}
      showsMyLocationButton={true}
      >
        {data.locations.map((marker, index) => (
    <Marker
      key={index}
      coordinate={{latitude: marker.latitude,longitude:marker.longitude}}
      title={marker.name}
    />
  ))}</MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
export default MapScreen;