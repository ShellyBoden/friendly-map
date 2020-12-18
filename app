import { StatusBar } from 'expo-status-bar';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button, ScrollView, TouchableOpacity} from 'react-native';

import HeaderMap from "./src/components/HeaderMap";
import Map from "./src/components/Map";
import Navigator from "./src/components/Navigator";

const App = () => {
  return (
    <View style={styles.home}>
      <HeaderMap />
      <Map />
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  home:{
    flex:  1,
    flexDirection: 'column',
  },
})

module.exports = App;
