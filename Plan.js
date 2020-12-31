import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View, TextInput, Platform, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Search from './Search';
import SearchD from './Search copy';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { showMessage, hideMessage } from "react-native-flash-message";
import axios from 'axios';

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

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('http://localhost:3031/api-gateway/current-user/schedulenf-user/getschedule', { withCredentials: true })

        if (res.data.schedulenf[0]) {
          axios.get('http://localhost:3032/api-gateway/current-user/nutrition-schedule/reminder/' + res.data.schedulenf[0].id, { withCredentials: true })
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
        const res = await axios.get('http://localhost:3021/api-gateway/current-user/schedulee-user/getschedule', { withCredentials: true })

        if (res.data.schedulee[0]) {
          axios.get('http://localhost:3022/api-gateway/current-user/exercise-schedule/reminder/' + res.data.schedulee[0].id, { withCredentials: true })
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


    if (varCounter2 < 3) {

      if (currentDate == datesE[count2]) {
        showMessage({
          message: 'Its Time for Workout! ', type: 'info', color: "white", type: 'info', icon: { icon: "auto", position: "left" },
          color: "black", backgroundColor: '#F5FAFA'
        })


      }
      else if (currentDate != datesE[count2]) {
        showMessage({
          message: 'cant show', type: 'info', color: "white", type: 'warning', icon: { icon: "auto", position: "left" },
          color: "#606060"
        })
      }
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

  return (
    <View style={styles.container}>
      <Text style={styles.Qus}>Choose Your Plan</Text>

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
        <View style={styles.option3}>
          <Text style={styles.choice}>Recommended Exercise</Text>
        </View>
      </TouchableOpacity>


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

    marginTop: 100,
    fontSize: 32,
    margin: 30
  },



  option:
  {
    width: 290,
    backgroundColor: 'black',
    borderRadius: 19,
    padding: 12,
    marginTop: 90,
    alignItems: 'center',

  },
  option2:
  {
    width: 290,
    backgroundColor: 'black',
    borderRadius: 19,
    padding: 12,
    marginTop: 60,
    alignItems: 'center',

  },

  option3:
  {
    width: 290,
    backgroundColor: 'black',
    borderRadius: 19,
    padding: 12,
    marginTop: 60,
    alignItems: 'center',

  },

  choice: {

    color: 'white',
    fontSize: 14,
  }



});

// export default Plans;
