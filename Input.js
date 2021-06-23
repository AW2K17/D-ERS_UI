import React,{useState} from 'react';
import { Text, View, StyleSheet,Modal,Pressable,TouchableOpacity,Button,Dimensions } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import ChooseOptions from './ChooseOptions';
import Sawalaat from './Sawalaat';
import CaptureIt from './CaptureIt';
import BodyInformation from './BodyInformation';
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

    axios.post('http://192.168.0.102:3010/api-gateway/current-user/adduserinformation', x)
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

const Stack = createStackNavigator();

export default function Input() {

  const [modalVisible, setModalVisible] = useState(false);
  //

  return (
  // <Onboarding pages={[Question2,Question3,Question4]}  skipToPage={2} 
  // onDone={bhejde}/>
  
  

      <Stack.Navigator initialRouteName="ChooseOptions">
        <Stack.Screen name="ChooseOptions" component={ChooseOptions}   options={{ headerShown: false }}/>
        <Stack.Screen name="Sawalaat" component={Sawalaat}  options={{ headerShown: false }} />
        <Stack.Screen name="CaptureIt" component={CaptureIt}  options={{ headerShown: false }} />
        <Stack.Screen name="BodyInformation" component={BodyInformation}  options={{ headerShown: false }} />
        
        
      </Stack.Navigator>
 
 
  
  
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
