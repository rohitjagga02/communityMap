import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// screen imports
import LoginScreen from './LoginScreen';
import BrowseEventsScreen from './BrowseEventsScreen';
import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';
import AddEventScreen from './AddEventScreen';
import ViewEventScreen from './ViewEventScreen';
import StartupScreen from './StartupScreen';
import RegisterScreen from './RegisterScreen';
import MyEventsScreen from './MyEventsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          options={{ headerStyle: { backgroundColor: '#32f497' } }}
          name="Start"
          component={StartupScreen}
        />
        <Stack.Screen
          options={{ headerStyle: { backgroundColor: '#32f497' } }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerStyle: { backgroundColor: '#32f497' } }}
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{ headerStyle: { backgroundColor: '#32f497' } }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerStyle: { backgroundColor: '#32f497' } }}
          name="Browse Events"
          component={BrowseEventsScreen}
        />
        <Stack.Screen
          options={{ headerStyle: { backgroundColor: '#32f497' } }}
          name="Map view"
          component={MapScreen}
        />
        <Stack.Screen
          options={{ headerStyle: { backgroundColor: '#32f497' } }}
          name="Add Community Event"
          component={AddEventScreen}
        />
        <Stack.Screen
          options={{ headerStyle: { backgroundColor: '#32f497' } }}
          name="View Event"
          component={ViewEventScreen}
        />
        <Stack.Screen
          options={{ headerStyle: { backgroundColor: '#32f497' } }}
          name="My Events"
          component={MyEventsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
