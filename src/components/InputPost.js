import { StatusBar } from 'expo-status-bar';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import React,{useState} from 'react';
import { Alert } from "react-native";
// import firestore from '@react-native-firebase/firestore';
import { db } from '../firebase/config';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Image, Text, TouchableOpacity, TextInput, View, ScrollView} from 'react-native';
import event from "../json/event.json";
import theme from '../color';

const Post = () => {
  const [valueLocation, setValueLocation] = useState('');
  const [value, setValue] = useState('');

  const addItem = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => Alert.alert("Cancel Pressed"),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
      })
  };

  return (
    <View showsVerticalScrollIndicator={false}>
      <View style={styles.boxEventInput}>
        <View style={styles.user}>
          <Image
            style={styles.userImg}
            source={{
              uri: event.user[0].image,
            }}
          />
          <View style={styles.userText}>
            <Text style={styles.username}>{event.user[0].name}</Text>
            <Text style={styles.date}>{event.user[0].date}</Text>
          </View>
        </View>

        <View style={styles.boxLocationInput}>
          <TextInput
              clearTextOnFocus = {true}
              style={styles.location}
              onChangeText={setValueLocation}
              value={valueLocation}
          />
          <TouchableOpacity
          style={styles.addbtn}
          onPress={addItem}
          >
            <Text style={styles.btn_text_white}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.EventInputBtn}>
          <Text style={styles.btn_text_white}>類型</Text>
        </TouchableOpacity>
        <TextInput
            clearTextOnFocus = {true}
            multiline={true}  //置頂的方法！
            style={styles.event}
            onChangeText={setValue}
            value={value}
        />
        <View style={styles.boxImageInputEventInputBtn}>
          <View style={styles.boxImageInput}>
            <TouchableOpacity style={styles.eventImage}>
              <Text style={styles.btn_text_gary}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eventImage}>
              <Text style={styles.btn_text_gary}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.boxEventInputBtn}>
            <TouchableOpacity style={styles.EventInputBtn1}>
              <Text style={styles.btn_text_blue}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.EventInputBtn}>
              <Text style={styles.btn_text_white}>上傳</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn_text_blue:{
    color: theme.dark_blue,
  },
  btn_text_gary:{
    color: theme.gary,
  },
  btn_text_white:{
    color: theme.white,
  },
  boxEventInput:{
    paddingHorizontal: 20,
    backgroundColor: theme.white,
  },
  user:{
    paddingVertical: 15,
    flexDirection: 'row',
  },
  userImg:{
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: 'yellow',
  },
  userText:{
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  boxLocationInput:{
    flexDirection: 'row',
    alignItems: "center",
  },
  location:{
    height: 40, 
    borderColor: theme.gary, 
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 15,
    flex:1,
    marginRight: 15,
  },
  addbtn:{
    alignItems: "center",
    justifyContent: 'center',
    width: 30,
    height: 30, 
    borderRadius: 10,
    backgroundColor: theme.dark_blue,
  },
  EventInputBtn1:{
    alignSelf: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.dark_blue,
    backgroundColor: theme.white,
    marginVertical: 10,
    marginRight:10,
  },
  EventInputBtn:{
    alignSelf: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 30,
    borderRadius: 8,
    backgroundColor: theme.dark_blue,
    marginVertical: 10,
    marginRight:10,
  },
  event:{
    textAlignVertical: 'top', //置頂的方法！
    padding: 15,
    height: 100,
    borderColor: theme.gary, 
    borderWidth: 1,
    borderRadius: 4,
    // marginRight: 8,
  },
  eventShow:{
    textAlignVertical: 'top', //置頂的方法！
    padding: 15,
    height: 100,
    borderColor: theme.gary, 
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 10,
  },
  boxImageInputEventInputBtn:{
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  boxImageInput:{
    flexDirection: 'row',
  },
  eventImage:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderColor: theme.gary, 
    borderWidth: 2,
    borderStyle: 'dashed',
    marginVertical: 10,
    marginLeft: 10,
  },
  boxEventInputBtn:{
    flexDirection: 'row',
  },

});

export default Post;