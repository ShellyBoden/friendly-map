import { StatusBar } from 'expo-status-bar';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button, ScrollView, TouchableOpacity} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import theme from '../color';
// import LogoSVG from '../img/logoSVG';

const Navigator = ({ navigation }) =>{
    return(
        <View style={styles.navbar}>
            <TouchableOpacity 
            style={styles.btn_navbar}
            onPress={() => navigation.navigate('MapScreen')}
            >
                {/* <LogoSVG/> */}
                {/* <Image style={styles.navbarimg}></Image> */}
                <Ionicon name={'ios-pin'} color={theme.gary} size={35}/>
                <Text>地圖</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.btn_navbar}
            onPress={() => navigation.navigate('PostScreen')}
            >
                <Ionicon name={'ios-warning'} color={theme.gary} size={35}/>
                <Text>安全回報</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.btn_navbar}
            onPress={() => navigation.navigate('UserScreen')}
            >
                <Ionicon name={'md-person'} color={theme.gary} size={35}/>
                <Text>個人</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar:{
        flexDirection: 'row',
        backgroundColor: theme.white,
        elevation: 1.5,
        shadowOffset:{width:0,height:0},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowColor: theme.gary,
      },
    
      navbarimg:{
        height: 30,
        width: 30,
        backgroundColor: 'pink',
        marginBottom: 5,
      },
    
      btn_navbar:{
        alignItems: "center",
        // backgroundColor: 'theme.light_gary',
        paddingVertical: 15,
        flex: 1,
      }
});

export default Navigator;