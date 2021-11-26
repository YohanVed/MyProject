import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "./Screens/login";
import HomeScreen from "./Screens/home";

export default class App extends Component {
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    /*View style={styles.container}>
    <LoginScreen/>
    </View>*/
  );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
