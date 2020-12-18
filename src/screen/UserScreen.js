import { StatusBar } from 'expo-status-bar';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button, ScrollView, TouchableOpacity} from 'react-native';

import Top from "../components/Top";
import HeaderUser from "../components/HeaderUser"
import Navigator from "../components/Navigator";

const UserScreen = ({ navigation }) => {
  return (
    <View style={styles.home}>
      <Top />
      <HeaderUser 
        style={styles.headeruser}
      />
      <Navigator style={styles.navigation}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home:{
    flex:  1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headeruser:{
    flex: 1,
  },
  navigation:{
    // flex: 1,
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
  }
})

module.exports = UserScreen;