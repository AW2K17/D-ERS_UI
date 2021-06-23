import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import axios from 'axios';
import { HomeScreen } from './HomeScreen';
import { WorkoutScreen } from './WorkoutScreen';
import { DietScreen } from './DietScreen';
import {PhotosScreen} from './PhotosScreen';
import { ProgressScreen } from './ProgressScreen';
import Input from './Input';
import { WorkoutsScreen } from './WorkoutsScreen';
import { MealsScreen } from './MealsScreen';
import { HistoryTrack } from './HistoryTrack';
import { LogoutScreen } from './LogoutScreen';
import Signin from './Login';
import LoginScreen from './Login';
import PlanScreen from './Plan';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerContent from './DrawerContent';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import MyTabs from './BottomTab';

import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeStack = createStackNavigator();
const WorkoutStack = createStackNavigator();
const DietStack = createStackNavigator();
const ProgressStack = createStackNavigator();
const InputScreen = createStackNavigator();
const WorkoutsStack = createStackNavigator();
const MealsStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const LogoutStack = createStackNavigator();
const PhotoStack = createStackNavigator();

const Tab = createBottomTabNavigator();


const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/191px-Hamburger_icon.svg.png',
          }}
          style={{ width: 30, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
};


const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <HomeStack.Screen name="Home" component={PlanScreen} options={({ route }) => ({
        headerTitle: getHeaderTitle(route),
        headerLeft: () => (
          <NavigationDrawerStructure
            navigationProps={navigation}
          />)
      })} />
    </HomeStack.Navigator>
  );
}

const WorkoutStackScreen = ({ navigation }) => {
  return (
    <WorkoutStack.Navigator screenOptions={{
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
       
      ),
          
      headerTitleAlign: "center"
    }}>
      <WorkoutStack.Screen name="Workout" component={WorkoutScreen} />
    </WorkoutStack.Navigator>
  );
}

const DietStackScreen = ({ navigation }) => {
  return (
    <DietStack.Navigator screenOptions={{
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerTitleAlign: 'center'
    }}>
      <DietStack.Screen name="Diet" component={DietScreen} />
    </DietStack.Navigator>
  );
}

const ProgressStackScreen = ({ navigation }) => {
  return (
    <ProgressStack.Navigator screenOptions={{
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerTitleAlign: 'center'
    }}>
      <ProgressStack.Screen name="Progress" component={ProgressScreen} />
    </ProgressStack.Navigator>
  );
}

function InputScreenStack() {
  return (
    <InputScreen.Navigator headerMode='none'>
      <InputScreen.Screen name="Input" component={Input} />
    </InputScreen.Navigator>
  );
}

function WorkoutsStackScreen() {
  return (
    <WorkoutsStack.Navigator headerMode="none">
      <WorkoutsStack.Screen name="Workouts" component={WorkoutScreen} />
    </WorkoutsStack.Navigator>
  );
}

function PhotosStackScreen(){

  return(
    <PhotoStack.Navigator headerMode="none">
      <PhotoStack.Screen name="PhotosScreen" component={PhotosScreen}/>
    </PhotoStack.Navigator>
  )
}

function MealsStackScreen() {
  return (
    <MealsStack.Navigator headerMode="none">
      <MealsStack.Screen name="Meals" component={Diet} />
    </MealsStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <HistoryStack.Navigator headerMode="none">
      <HistoryStack.Screen name="HistoryTrack" component={HistoryTrack} />
    </HistoryStack.Navigator>
  );
}

function Signout() {



  axios.post('http://192.168.0.102:3010/api-gateway/sign-out/user').then(response => {

    console.log(response);
    // navigation.navigate('Login');

  }).catch(error => {
    console.log(error);
  }
  )


}

function LogoutStackScreen() {
  return (
    <LogoutStack.Navigator headerMode="none" >
      <LogoutStack.Screen name="Logout" component={LogoutScreen} />
    </LogoutStack.Navigator>

  );
}

function TabsScreen() {
  return (
    <Tab.Navigator headerMode="none"
      initialRouteName="HomeStackScreen"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutStackScreen}
        options={{
          tabBarLabel: 'Workout',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="mars" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Diet"
        component={DietStackScreen}
        options={{
          tabBarLabel: 'Diet',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heartbeat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Progress"
        component={ProgressStackScreen}
        options={{
          tabBarLabel: 'Progress',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="tasks" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );

}



const Drawer = createDrawerNavigator();


export const Dashboard = ({ navigation }) => {

  var intervalId = null;
  var varCounter = 0;

  var intervalId2 = null;
  var varCounter2 = 1;
  // var d = ['20-12-2020', '22-12-2020', '25-12-2020', '27-12-2020'];
  var count1 = 0;
  var count2 = 0;

  const [dates, setDates] = useState([]);
  // var dates
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       axios.get('http:// 192.168.0.102:3031/api-gateway/current-user/schedulenf-user/getschedule', { withCredentials: true })
  //         .then((res) => {
  //           axios.get('http:// 192.168.0.102:3032/api-gateway/current-user/nutrition-schedule/reminder/' + res.data.schedulenf[0].id, { withCredentials: true })
  //             .then((res) => {
  //               dates = res.data.map((e) => {
  //                 console.log(e.sameDay)
  //                 return e.sameDay;
  //               })
  //               // setDates(res.data)
  //             })
  //         })
  //         .catch((error) => {
  //           console.log(error.response)
  //         })

  //       // console.log(response.data.schedulenf[0].id)


  //     }
  //     catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchData();
  // }, [])



  // console.log(dates)




  






  // function stopDiet() {
  //   useEffect(() => {
  //     intervalId = setInterval(varName, 20000);
  //   }, []);
    
  // };



  // function stopDiet() {
  //   intervalId = setInterval(varName, 3000);
  // };


  // function stopExercise() {
  //   intervalId2 = setInterval(varName2, 3000);
  // };




  // stopDiet();
  // stopExercise();


  return (

    <Drawer.Navigator initialRouteName="Home" options={{ headerShown: false }} independent={true}
    drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabsScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Input" component={InputScreenStack} />
      
      <Drawer.Screen name="Workouts" component={WorkoutsStackScreen} />
      <Drawer.Screen name="HistoryTrack" component={HistoryTrack} />
      <Drawer.Screen name="PhotosScreen" component={PhotosScreen} />
      <Drawer.Screen name="Log Out" component={LogoutStackScreen} options={{ headerShown: false }} />
    </Drawer.Navigator>



  );
  // <View style={styles.container}>
  //   <Text>Open up App.js to start working on your app!</Text>
  //   <StatusBar style="auto" />
  // </View>

}

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});