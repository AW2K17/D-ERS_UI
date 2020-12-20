import  React,{useState} from 'react';
import { Button, View, TextInput,FlatList,TouchableOpacity,StyleSheet} from 'react-native';
import Constant from 'expo-constants';
import {  IndexPath,Datepicker, Layout, Text, Select, SelectItem,CheckBox } from '@ui-kitten/components';
import { MaterialIcons } from '@expo/vector-icons';
import { showMessage, hideMessage } from "react-native-flash-message";


const data = [
  'Protein',
  'Fats',
  'Carbs',
];









 const Dates = () => {

    const [date, setDate] = React.useState(new Date());
    const [checked, setChecked] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
    const [disp1,setDisp1]=useState('false');
    const [show1,setShow1]=useState('false');
    
    const displayValue = data[selectedIndex.row];
  

    
var intervalId = null;
var varCounter = 1;

var intervalId2 = null;
var varCounter2 = 1;
var d=['20-12-2020','22-12-2020','25-12-2020','27-12-2020'];
var count1=0;
var count2=0;






var varName = function(){

  var dateFormat = require("dateformat");
  var now = new Date();
  var currentDate=dateFormat(now,"d-m-yyyy");


     if(varCounter <= 4) {

          if(currentDate==d[count1])
          {

            setTimeout(() => {  showMessage({
              message:'Its Time for Breakfast! ',type:'info',color: "white",type:'info',icon: { icon: "auto", position: "left" },
              color: "black",backgroundColor:'#F5FAFA'})  }, 3000);

           setTimeout(() => {  showMessage({
              message:'Its Time For Lunch! ',type:'info',color: "white",type:'info',icon: { icon: "auto", position: "left" },
              color: "black",backgroundColor:'#F5FAFA'})  }, 5000);
              
           
              setTimeout(() => {  showMessage({
                message:'Its Time For Dinner! ',type:'info',color: "white",type:'info',icon: { icon: "auto", position: "left" },
                color: "black",backgroundColor:'#F5FAFA'})  }, 9000);
                
             
             count1++;
             varCounter++;
          }
          else if(currentDate!=d[count1]){
            /*
            showMessage({
              message:'cant show',type:'info',color: "white",type:'warning',icon: { icon: "auto", position: "left" },
              color: "#606060"})
              varCounter++;*/
          }
          
     } else {
          clearInterval(intervalId);
     }
};




var varName2 = function(){

  var dateFormat = require("dateformat");
  var now = new Date();
  var currentDate=dateFormat(now,"d-m-yyyy");


     if(varCounter2 <= 4) {

          if(currentDate==d[count2])
          {
            showMessage({
              message:'Its Time for Workout! ',type:'info',color: "white",type:'info',icon: { icon: "auto", position: "left" },
              color: "black",backgroundColor:'#F5FAFA'})
             
             count2++;
             varCounter2++;
          }
          else if(currentDate!=d[count2]){
            /*
            showMessage({
              message:'cant show',type:'info',color: "white",type:'warning',icon: { icon: "auto", position: "left" },
              color: "#606060"})
              varCounter++;*/
          }
          
     } else {
          clearInterval(intervalId2);
     }
};































function stopDiet(){
     intervalId = setInterval(varName, 3000);
};


function stopExercise(){
  intervalId2 = setInterval(varName2, 3000);
};




stopDiet();
stopExercise();


















      



    //checkIt();
  
    return (
      <View><Text> </Text></View>
    );
  };
  

  export default Dates;


  const styles = StyleSheet.create({
    container: {
      minHeight: 376,
      width:160
    },
  });