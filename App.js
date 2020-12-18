import { StatusBar } from 'expo-status-bar';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, Image, View, TextInput, Button, ScrollView, TouchableOpacity} from 'react-native';

import MapScreen from "./src/screen/MapScreen";
import PostScreen from "./src/screen/PostScreen";
import UserScreen from "./src/screen/UserScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="MapScreen" 
            component={MapScreen} 
            options={({ route })=>({
              headerStatusBarHeight: -15,
              headerShown: false,
              headerTitleStyle:{
                fontSize: 0,
              },
            })}
          />
          <Stack.Screen 
            name="PostScreen" 
            component={PostScreen} 
            options={({ route })=>({
              headerStatusBarHeight: -15,
              headerShown: false,
              headerTitleStyle:{
                fontSize: 0,
              },
            })}
          />
          <Stack.Screen 
            name="UserScreen" 
            component={UserScreen} 
            options={({ route })=>({
              headerStatusBarHeight: -15,
              headerShown: false,
              // headerStyle:{
              //   backgroundColor: '#F7F7F5',
              //   elevation: 0,
              //   shadowOpacity: 0,
              //   borderBottomWidth: 0,
              // },  
              headerTitleStyle:{
                fontSize: 0,
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

module.exports = App;