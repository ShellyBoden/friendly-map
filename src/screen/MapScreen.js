import { StatusBar } from 'expo-status-bar';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button, ScrollView, TouchableOpacity} from 'react-native';

import Top from "../components/Top";
import HeaderMap from "../components/HeaderMap";
import Map from "../components/Map";
import Navigator from "../components/Navigator";

const MapScreen = ({ navigation }) => {
  return (
    <View style={styles.home}>
        <Top />
        <HeaderMap />
        <Map />
        <Navigator 
            navigation={navigation}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  home:{
    flex:  1,
    flexDirection: 'column',
  },
})

module.exports = MapScreen;