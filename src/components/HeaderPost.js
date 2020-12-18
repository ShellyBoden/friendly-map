import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, TextInput, View, ScrollView } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import User from "../json/user.json";
import theme from '../color';


const HeaderPost = () => {
    return (
        <View style={styles.boxtitle}>
            <Text style={styles.title}>安全回報</Text>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    boxtitle:{
        borderBottomWidth: 0.5,
        borderColor: theme.gary,
        // backgroundColor: theme.light_gary,
        backgroundColor: theme.white,
    },
    title:{
        fontSize: 20,
        paddingVertical: 15,
        paddingHorizontal: 20,
      },
  });
  
  export default HeaderPost;