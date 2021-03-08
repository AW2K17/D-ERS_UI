import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View, TextInput, Platform, TouchableOpacity,Dimensions } from 'react-native';
import Constants from 'expo-constants';
import Search from './Search';
import SearchD from './Search copy';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { showMessage, hideMessage } from "react-native-flash-message";
import * as Notifications from 'expo-notifications'; 
import * as Permissions from 'expo-permissions';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Stack = createStackNavigator();

const Plans = ({ navigation }) => {


  var intervalId = null;
  var intervalId2 = null;

  var varCounter = 0;
  var varCounter2 = 0;

  var count1 = 0;
  var count2 = 0;

  // const [dates, setDates] = useState('');
  var dates = [];
  var datesE = [];


  // Notifications.setNotificationHandler({

  //   handleNotification: async()=>{

  //     return {
  //       shouldPlaySound:true,
  //       shouldShowAlert:true
        
  //     }
  //   }
  // })





  // useEffect(()=>{

  //   Permissions.getAsync(Permissions.NOTIFICATION).then(statusObj=>{
  //     if(statusObj.status!=='granted'){
  //       return Permissions.askAsync(Permissions.NOTIFICATION);
  //     }
  //     return statusObj;
  //   }).then((statusObj)=>{
  //     if(statusObj.status!=='granted'){
  //       return;
  //     }
  //   });
  // },[])



  // const triggerNotificationHandler=()=>{


  //   Notifications.scheduleNotificationAsync({
  
  //     content:{
  //       title:'Hi User',
  //       body:'Its Time'
  //     }
  //   });
  // }






  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://192.168.43.126:3031/api-gateway/current-user/schedulenf-user/getschedule', { withCredentials: true })
        console.log(res)
        if (res.data.schedulenf != null) {
          axios.get('http://192.168.43.126:3032/api-gateway/current-user/nutrition-schedule/reminder/' + res.data.schedulenf[0].id, { withCredentials: true })
            .then((res) => {
              console.log(res)
              if (res.data != 'No-Date') {
                dates = res.data.map((e) => {
                  console.log(e.sameDay)
                  return e.sameDay;
                })
              }
              else {
                dates = []
              }
              // setDates(res.data)
            })
            .catch(err => {
              console.log(err);
            })
        }
        else {
          dates = [];
        }
      }
      catch (err) {
        console.log(err)
      }

    }
    fetchData();

    async function fetchExerciseData() {
      try {
        const res = await axios.get('http://192.168.43.126:3021/api-gateway/current-user/schedulee-user/getschedule', { withCredentials: true })

        if (res.data.schedulee[0]) {
          axios.get('http://192.168.43.126:3022/api-gateway/current-user/exercise-schedule/reminder/' + res.data.schedulee[0].id, { withCredentials: true })
            .then((res) => {
              console.log(res)
              if (res.data != 'No-Date') {
                datesE = res.data.map((e) => {
                  console.log(e.sameDay)
                  return e.sameDay;
                })
              }
              else {
                datesE = []
              }
              // setDates(res.data)
            })
            .catch(err => {
              console.log(err);
            })
        }
        else {
          datesE = [];
        }
      }
      catch (err) {
        console.log(err)
      }

    }
    fetchExerciseData();
  }, [])


  var varName = function () {

    var dateFormat = require("dateformat");
    var now = new Date();
    var currentDate = dateFormat(now, "yyyy-mm-dd");


    if (varCounter < 3) {

      if (currentDate == dates[count1]) {

        console.log(dates[count1]);


        setTimeout(() => {
          showMessage({
            message: 'Its Time for Breakfast! ', type: 'info', color: "white", type: 'info', icon: { icon: "auto", position: "left" },
            color: "black", backgroundColor: '#F5FAFA'
          })
        }, 3000);

        setTimeout(() => {
          showMessage({
            message: 'Its Time For Lunch! ', type: 'info', color: "white", type: 'info', icon: { icon: "auto", position: "left" },
            color: "black", backgroundColor: '#F5FAFA'
          })
        }, 7000);


        setTimeout(() => {
          showMessage({
            message: 'Its Time For Dinner! ', type: 'info', color: "white", type: 'info', icon: { icon: "auto", position: "left" },
            color: "black", backgroundColor: '#F5FAFA'
          })
        }, 10000);


        count1++;
        varCounter++;
      }
      else if (currentDate != dates[count1]) {

        console.log(dates[count1]);
        

        showMessage({
          message: 'cant show', type: 'info', color: "white", type: 'warning', icon: { icon: "auto", position: "left" },
          color: "#606060"
        })
      }
      varCounter++;
      count1++;
      // console.log("Limit: " + varCounter);
    } else {
      clearInterval(intervalId);
    }
  }


  var varName2 = function () {

    var dateFormat = require("dateformat");
    var now = new Date();
    var currentDate = dateFormat(now, "yyyy-mm-dd");


    if (varCounter2 < 4) {

      if (currentDate == datesE[count2]) {
        console.log(datesE[count2]);
        showMessage({
          message: 'Its Time for Workout! ', type: 'info', color: "white", type: 'info', icon: { icon: "auto", position: "left" },
          color: "white", backgroundColor: '#dc3545'
        })

        //triggerNotificationHandler();


      }
      // else if (currentDate != datesE[count2]) {
      //   showMessage({
      //     message: 'cant show', type: 'info', color: "white", type: 'warning', icon: { icon: "auto", position: "left" },
      //     color: "#606060"
      //   })
      // }
      count2++;
      varCounter2++;
      console.log("Limit: " + varCounter2);

    } else {
      clearInterval(intervalId2);
    }
  };



  function stopDiet() {
    useEffect(() => {
      intervalId = setInterval(varName, 20000);
    }, []);

  };

  function stopExercise() {
    useEffect(() => {
      intervalId2 = setInterval(varName2, 20000);
    }, []);

  };


  stopDiet();

  stopExercise();

  //triggerNotificationHandler();

  return (
    <View style={styles.container}>
      <Text style={styles.Qus}>Choose Your Plan</Text>
      

      <View >
      <TouchableOpacity onPress={() => navigation.navigate('SearchD')}>
        <View style={styles.option}>
          <Text style={styles.choice}>Custom Diet</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity disabled={true}>
        <View style={styles.option2}>
          <Text style={styles.choice}>Recommended Diet</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <View style={styles.option3}>
          <Text style={styles.choice}>Custom Exercise</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.option4}>
          <Text style={styles.choice}>Recommended Exercise</Text>
        </View>
      </TouchableOpacity>
      </View>

    </View>
  )
}

export const PlanScreen = ({ navigation }) => {

  return (

    <Stack.Navigator initialRouteName="Plans">
      <Stack.Screen
        name="Plans"
        component={Plans}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchD"
        component={SearchD}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>

  );
}

export default PlanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,

  },

  Qus: {

    marginTop: windowWidth*0.170,
    fontSize: 32,
    margin: windowWidth*0.0380
  },



  option:
  {
    width: 290,
    backgroundColor: 'black',
    borderRadius: 19,
    padding: 12,
    marginTop: windowWidth*0.11406,
    alignItems: 'center',

  },
  option2:
  {
    width: 290,
    backgroundColor: 'black',
    borderRadius: 19,
    padding: 12,
    marginTop: windowWidth*0.11406,
    alignItems: 'center',

  },

  option3:
  {
    width: 290,
    backgroundColor: 'black',
    borderRadius: 19,
    padding: 12,
    marginTop: windowWidth*0.11406,
    alignItems: 'center',

  },

  
  option4:
  {
    width: 290,
    backgroundColor: 'black',
    borderRadius: 19,
    padding: 12,
    marginTop: windowWidth*0.11406,
    alignItems: 'center',
    

  },


  choice: {

    color: 'white',
    fontSize: 14,
  }



});

// export default Plans;
