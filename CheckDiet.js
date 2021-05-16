import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';

const Tab = createMaterialTopTabNavigator();

export default function CheckDiet() {
  return (
   
   
     
      <Tab.Navigator  style={{ flex: 1, paddingTop: Constants.statusBarHeight}}>
        <Tab.Screen name="Breakfast" component={Breakfast} />
        <Tab.Screen name="Lunch" component={Lunch} />
        <Tab.Screen name="Dinner" component={Dinner} />
        
      </Tab.Navigator>
      
    
   
  );
}
