import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, TextInput, View, ScrollView} from 'react-native';
import event from "../json/event.json";
import theme from '../color';

const Top = () => {
    return(
        <View style={styles.top}></View>
    );
};

const styles = StyleSheet.create({
    top:{
        height: 40,
        backgroundColor: theme.white,
        // backgroundColor: theme.light_gary,
    }
});

export default Top;