import { StatusBar } from 'expo-status-bar';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button, ScrollView, TouchableOpacity} from 'react-native';
import elementData from "../json/element.json";
import User from "../json/user.json";
import theme from '../color';

const HeaderMap = () =>{
    const [value, onChangeText] = React.useState('Useless Placeholder');

    return(
      <View style={styles.header}>
        <View style={styles.boxSearchUser}>
          <TextInput
            style={styles.searchbar}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          <Image
            style={styles.userImg}
            source={{
              uri: User.user[0].image,
            }}
          />
        </View>
        <ScrollView style={styles.element} horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={styles.btn_element_text}>{elementData.elementData[0].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={styles.btn_element_text}>{elementData.elementData[1].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={styles.btn_element_text}>{elementData.elementData[2].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={styles.btn_element_text}>{elementData.elementData[3].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={styles.btn_element_text}>{elementData.elementData[4].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={styles.btn_element_text}>{elementData.elementData[5].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={styles.btn_element_text}>{elementData.elementData[6].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={styles.btn_element_text}>{elementData.elementData[7].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={styles.btn_element_text}>{elementData.elementData[8].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={styles.btn_element_text}>{elementData.elementData[9].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={styles.btn_element_text}>{elementData.elementData[10].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text style={styles.btn_element_text}>{elementData.elementData[11].name}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({

  home:{
    flex:  1,
    flexDirection: 'column',
  },

  header: {
    backgroundColor: theme.white,
  },

  boxSearchUser:{
    flexDirection: 'row',
    marginTop: 10,
  },

  userImg:{
    marginRight: 20,
    height: 40,
    width: 40,
    borderRadius: 60,
    backgroundColor: 'yellow',
  },

  searchbar: { 
    flex: 1,
    marginHorizontal: 20,
    paddingHorizontal: 12,
    height: 40, 
    borderColor: theme.gary, 
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: theme.white,
  },

  element: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },

  btn_element: {
    backgroundColor: theme.dark_blue,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 30,
    borderRadius: 10,
    marginVertical: 5,
    marginRight:10,
  },

  btn_element_text : {
    color: theme.white,
  }
});

export default HeaderMap;