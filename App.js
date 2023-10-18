import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import Login from './screens/Login'
import SignUp from './screens/SignUp'

const Stack = createNativeStackNavigator();

function NormalStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "blueviolet",
        },
        headerTintColor: "white",
        contentStyle: {
          backgroundColor: "white",
        }
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTitle: "User Login"}} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <NormalStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
