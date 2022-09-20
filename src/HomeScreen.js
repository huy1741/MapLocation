import React from 'react';
import { View, Text, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
//import Geolocation from '@react-native-community/geolocation';


function HomeScreen({navigation}) {
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
      <View style={{ flex: 1, backgroundColor: '#F2DECC'}}>
        <FlatList 
           data={data.locations}
           keyExtractor={(item)=>item.name}
           renderItem={({item})=>{ 
            return <TouchableOpacity onPress={() => navigation.navigate('Map Details', {
              latitude: item.latitude,
              longitude: item.longitude,
              latitudeDelta: 0.00001,
              longitudeDelta: 0.0421
            })} style={styles.content} on><Text>{item.name} <Entypo name="location-pin" size={20} color="black" /></Text></TouchableOpacity>
        }}></FlatList>
        
      </View>
    );
  };
  const styles = StyleSheet.create({
    content:{
      backgroundColor:'white',
      borderColor:'rgba(0, 0, 0, 0.1)',
      justifyContent:'center',
      alignItems: 'center',
      borderRadius: 20,
      paddingVertical: 20,
      marginHorizontal: 20,
      marginBottom: 6
    }
  });
  export default HomeScreen;