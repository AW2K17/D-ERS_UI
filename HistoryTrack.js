import React, { PureComponent, useState } from 'react';
import { StyleSheet,Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import History from './History';
import DietHistory from './DietHistory';
import ExerciseHistory from './ExerciseHistory';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

export const HistoryTrack = () => {


   



    return (
        
        <Stack.Navigator 
        initialRouteName="History"
        screenOptions={{
      headerShown: false}}
    >
          <Stack.Screen   name="History" component={History} />
          <Stack.Screen name="DietHistory" component={DietHistory} />
          <Stack.Screen name="ExerciseHistory" component={ExerciseHistory} />
          
        </Stack.Navigator>
  
    );
}

export default HistoryTrack;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});