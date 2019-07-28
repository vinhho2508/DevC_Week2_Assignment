import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imageData = [
  {
    id: 1,
    image: require('./assets/image.png'),
  },
  {
    id: 2,
    image: require('./assets/image.png'),
  },
  {
    id: 3,
    image: require('./assets/image.png'),
  },
  {
    id: 4,
    image: require('./assets/image.png'),
  },
  {
    id: 5,
    image: require('./assets/image.png'),
  },
  {
    id: 6,
    image: require('./assets/image.png'),
  },
];
const centerImgData = Math.floor(imageData.length / 2);

export default function App() {
  return (
    <View style = {styles.container}>
      <View style= {styles.topBtn}>
        <View>
          <Ionicons name="ios-arrow-back" size={30}/>
        </View>
        <View>
          <Ionicons name="ios-more" size={30}/>
        </View>
        
      </View>
      <View style={styles.userInfo}>
        <Image source={require('./assets/avatar.jpg')} style = {styles.avatarWrapper}/>
        <View style={styles.userDetailInfo}>
          <Text style={{fontSize:24, fontWeight:'bold'}} >Hoang-Vinh Ho</Text>
          <Text style={{fontSize:14}} >Developer</Text>
          <View style={styles.userBtn}>
            
              <TouchableOpacity>
                <View style={[styles.btn,styles.followBtn]} >                
                    <Text onPress={() => alert("Followed")}>Follow</Text>               
                </View>             
              </TouchableOpacity>
            
              <TouchableOpacity>
                <View style={[styles.sendBtn, styles.btn]} >
                  <Feather name="send" onPress={() => alert("Message sent")}/>
                </View>  
              </TouchableOpacity>
                   
          </View>
        </View>
      </View>
      <View style={styles.infoBar}>
        <View  style={styles.statistic}>
          <Text style={{fontSize:18, fontWeight:'bold'}}>210</Text>
          <Text>Photos</Text>
        </View>
        <View style={styles.statistic}>
          <Text style={{fontSize:18, fontWeight:'bold'}}>15k</Text>
          <Text>Followers</Text>
        </View>
        <View  style={styles.statistic}>
          <Text style={{fontSize:18, fontWeight:'bold'}}>605</Text>
          <Text>Following</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <View style={{flexDirection:'column'}}>
          {imageData.slice(0,centerImgData).map(item=>{
            return <Image source={item.image} style={styles.image} key={item.id} resizeMode='cover'/>
          })}
        </View>
        <View style={{flexDirection:'column'}}>
          {imageData.slice(centerImgData).map(item=>{
            return <Image source={item.image} style={styles.image} key={item.id} resizeMode='cover'/>
          })}
        </View>
      </ScrollView>
      <View style={styles.buttonBar}>
        <Feather name="wind" size={30}/>
        <Ionicons name="ios-add-circle-outline" size={30}/>
        <Feather name="user" size={30}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:50,
    marginLeft:20,
    flexDirection:'column',
    marginRight:20,
    marginBottom:20
  },
  topBtn:{
    flex : 1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  avatarWrapper:{
    flex:3,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    width: 80,
    height:80
  },
  userInfo:{
    flex:3,
    justifyContent:'center',
    flexDirection:'row',
  },
  userDetailInfo:{
    flex:6,
    justifyContent:'center',
    marginLeft:20
  },
  infoBar:{
    flex: 2,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  statistic:{
    alignItems:'center',
    justifyContent:'center'
  },
  btn:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  userBtn:{
    marginTop:20,
    flexDirection:'row',
  },
  followBtn:{
    height:30,
    width:120,
    backgroundColor:FOLLOW_COLOR,
    borderRadius:15
  },
  sendBtn:{
    height:30,
    width:40,
    backgroundColor:SEND_MESSAGE_COLOR,
    borderRadius: 15,
    marginLeft:20
  },
  image:{
    padding:20
  
  },
  buttonBar:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
});
