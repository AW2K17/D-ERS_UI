import React,{useState} from 'react';
import { Text, View, StyleSheet,Modal,Pressable,TouchableOpacity,Button,Dimensions } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Sawalaat from './Sawalaat';
import CaptureIt from './CaptureIt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from 'react-native-onboarding-custom-swiper';

const bhejde=async()=>{
  console.log('hogaya');
   const jsonValue = await AsyncStorage.getItem('@options')
    const x=JSON.parse(jsonValue);
    console.log('final: ');
    console.log(x);
    let ans=[]
    ans.push(x);
    console.log('Array me');
    console.log(ans);

    axios.post('http://192.168.0.105:3010/api-gateway/current-user/adduserinformation', x)
  .then(function (response) {
    console.log('Chali gai');
    showMessage({
      message: "Answers Submitted Successfully",
      type: "success",
    });
    console.log(response);
    
  })
  .catch(function (error) {
    console.log("nope:"+error);
  });
}

export default function ChooseOptions({navigation}) {

  const [modalVisible, setModalVisible] = useState(false);


  return (
  // <Onboarding pages={[Question2,Question3,Question4]}  skipToPage={2} 
  // onDone={bhejde}/>
  
  
  <View style={styles.container}>
    
    <View style={{justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={{top:-80,width:320,height:60,position:'absolute',backgroundColor:'#802626',borderRadius:12,alignItems:'center',justifyContent:'center'}}
        onPress={()=>navigation.navigate('CaptureIt')}
        
        >
      
        <Text style={{color:'white',fontSize:19,fontWeight:'100'}}>Capture Physique</Text>
      
    </TouchableOpacity>
    <TouchableOpacity style={{top:10,width:320,height:60,position:'absolute',backgroundColor:'#802626',borderRadius:12,alignItems:'center',justifyContent:'center'}}
    
    onPress={()=>navigation.navigate('Sawalaat')}
    
    >
      
        <Text style={{color:'white',fontSize:19,fontWeight:'100'}}>Questionaire</Text>
      
    </TouchableOpacity>
    </View>

  </View>
  
  
  
  
  )




};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,

    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
