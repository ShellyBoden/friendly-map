import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, TextInput, View, ScrollView } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import User from "../json/user.json";
import theme from '../color';

const HeaderUser = () => {
  return (
    <ScrollView  style={styles.header} scrollEnabled={false} //定住不能滑動
    >
      <View style={styles.user}>
        <View style={styles.userInformation}>
          <Image
              style={styles.userImg}
              source={{
                uri: User.user[0].image,
              }}
          />
          <View style={styles.userText}>
            <Text style={styles.username}>{User.user[0].name}</Text>
            <Text style={styles.useremail}>{User.user[0].email}</Text>
          </View>
        </View>
        <TouchableOpacity 
        style={styles.addUser}
        onPress={() => navigation.navigate('MapScreen', name)}
        >
          <Ionicon name={'md-person-add'} color={theme.dark_blue} size={30} style={{marginHorizontal:8,marginVertical:2}}/>
        </TouchableOpacity>
      </View>

      <View style={styles.setting}>
        <TouchableOpacity 
          style={styles.btn_setting}
          onPress={() => Alert.alert('Simple Button pressed')}
        >
          <Text style={styles.btn_setting_text}>常用路段</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btn_setting}
          onPress={() => Alert.alert('Simple Button pressed')}
        >
          <Text style={styles.btn_setting_text}>推播設定</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btn_setting}
          onPress={() => Alert.alert('Simple Button pressed')}
        >
          <Text style={styles.btn_setting_text}>安全回報歷史紀錄</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btn_setting}
          onPress={() => Alert.alert('Simple Button pressed')}
        >
          <Text style={styles.btn_setting_text}>離線地圖</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btn_setting}
          onPress={() => Alert.alert('Simple Button pressed')}
        >
          <Text style={styles.btn_setting_text}>我的軌跡</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btn_setting}
          onPress={() => Alert.alert('Simple Button pressed')}
        >
          <Text style={styles.btn_setting_text}>設定</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.white,
  },

  user:{
    borderBottomWidth: 0.5,
    borderColor: theme.gary,
    paddingHorizontal: 20,
  },

  userInformation:{
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: theme.dark_gary,
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

  addUser:{
    paddingVertical: 10,
  },

  btn_setting:{
    paddingVertical: 15,
    paddingLeft: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    //不寫下面兩個，Android系統上文字會偏下 
    includeFontPadding: false, 
    textAlignVertical: 'center',
  },

  btn_setting_text:{
    fontSize: 20,
  }

});

export default HeaderUser;