import { StatusBar } from 'expo-status-bar';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button, ScrollView, TouchableOpacity} from 'react-native';
import theme from '../color';
import Ionicon from 'react-native-vector-icons/Ionicons';
import elementData from "../json/element.json";
import { color } from 'react-native-reanimated';

import { useState,useEffect } from "react";
import { Marker } from "react-native-maps";
import MapView from "react-native-map-clustering"; // 地圖優化用
import Constants from "expo-constants";
import * as Location from "expo-location"; // 取得使用者位置用
import { Dimensions } from 'react-native'; // 取得裝置長寬用

import monitorJson from "../json/test.json"; // 監視器的Json
import hrfoodJson from "../json/benri.json"; // 食物的Json

const Map = () =>{

    const windowWidth = Dimensions.get('window').width; // 取得裝置寬度
    const windowHeight = Dimensions.get('window').height; // 取得裝置高度
    const newMaker = require("../../assets/location.png");
    const mMaker = require("../../assets/m.png");
    const monitorOpen = true;
    const hrfoodOpen = false;    

    // 宣告一個新的 state 變數 region
    // 如果我們需要更新目前的 region，我們可以呼叫 setRegion
    const [region, setRegion] = useState({
        longitude: 121.544637, // 經度
        latitude: 25.024624, // 緯度
        longitudeDelta: 0.001, // 地圖縮放 數值越大，地圖越小
        latitudeDelta: 0.001, // 地圖縮放 數值越大，地圖越小
    });
    // 宣告一個新的 state 變數 marker
    // 如果我們需要更新目前的 marker，我們可以呼叫 setMarker
    const [marker, setMarker] = useState({
        coord: {
            longitude: 121.544637,
            latitude: 25.024624,
        }
    });

    // 宣告一個新的 state 變數 onCurrentLocation
    // 如果我們需要更新目前的 onCurrentLocation，我們可以呼叫 setOnCurrentLocation
    const [onCurrentLocation, setOnCurrentLocation] = useState(false);
    const [monitor, setMonitor] = useState(monitorJson);
    const [hrfood, setHrfood] = useState(hrfoodJson);

    const onRegionChangeComplete = (rgn) => {
        if (
            Math.abs(rgn.latitude - region.latitude) > 0.0002 ||
            Math.abs(rgn.longitude - region.longitude) > 0.0002
        ) {
            setRegion(rgn);
            setOnCurrentLocation(false);
        }
    };

    const setRegionAndMarker = (location) => {
        setRegion({
            ...region,
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
        });
        setMarker({
            ...marker,
            coord: {
                longitude: location.coords.longitude,
                latitude: location.coords.latitude,
            },
        });
    };

    const getLocation = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
            setMsg("Permission to access location was denied");
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setRegionAndMarker(location);
        setOnCurrentLocation(true);
    };

    useEffect(() => {
        if (Platform.OS === "android" && !Constants.isDevice) {
            setErrorMsg(
                "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
            );
        } else {
            getLocation();
            let regionName = Location.reverseGeocodeAsync({longitude: marker.coord.longitude, latitude: marker.coord.latitude});
            console.warn(regionName);
        }
    }, []);
    

    return(
        <View style={styles.map} >
            <ScrollView>
                <MapView
                    initialRegion={region}
                    style={{ width: windowWidth , height: windowHeight }}
                    mapType="terrain"
                    provider="google"
                    onRegionChangeComplete={onRegionChangeComplete}
                >
                    <Marker
                        coordinate={marker.coord}
                        image={newMaker}
                    >
                        <View style={styles.ring} />
                    </Marker>
                    {monitorOpen && (
                    monitor.map((site) => (
                        <Marker
                            coordinate={{
                                latitude: site.latitude,
                                longitude: site.longitude,
                            }}
                            key={`${site.latitude}${site.longitude}`}
                        >
                        <Image
                          source={mMaker}
                          resizeMode="contain"
                        />
                        </Marker>
                    ))
                    )}

                    {hrfood.map((site) => (
                        <Marker
                            coordinate={{
                                latitude: site.latitude,
                                longitude: site.longitude,
                            }}
                            title={site.name}
                            description={site.address}
                            key={site.id}
                        >
                        </Marker>
                    ))}
                </MapView>
            </ScrollView>
            <View style={styles.mapBtn}>
            {!onCurrentLocation && (
                <TouchableOpacity 
                style={styles.btn_position}
                onPress={getLocation}
                >
                    <Ionicon name={'md-locate'} color={theme.white} size={30}/>
                </TouchableOpacity>
            )}

                <TouchableOpacity 
                style={styles.btn_navigation}
                onPress={getLocation}
                >
                    <Ionicon name={'ios-navigate'} color={theme.dark_blue} size={60} style={{margin:-4.9}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    map:{
        // backgroundColor: 'pink',
        flex: 1,
        flexDirection: 'column-reverse',
    },

    mapBtn:{
        // backgroundColor: 'pink',
        // alignItems: 'flex-end',
        // justifyContent: 'flex-end',
        position:'absolute',
        right: 20,
        bottom: 25,
    },

    btn_position:{
        width:50,
        height:50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.light_blue,
        padding: 10,
        marginVertical: 20,
    },

    btn_navigation: {
        width:50,
        height:50,
        borderRadius: 25,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.white,

    },

    btn_text:{
        color: theme.white,
    }
});

export default Map;