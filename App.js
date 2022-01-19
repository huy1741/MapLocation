
import HomeScreen from './src/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './src/MapScreen';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) =>
          ({title: 'Smartum Map',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Map Details', {
              latitude: 60.192059,
              longitude: 24.945831,
              latitudeDelta: 0.322,
             longitudeDelta: 0.0621,
            })}>
            <Entypo name="map" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
       <Stack.Screen name="Map Details" component={MapScreen} options={{
          title: 'Map',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    paddingLeft: 10
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  }
});
export default App;