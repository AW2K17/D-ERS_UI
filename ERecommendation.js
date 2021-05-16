import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Result from './Result';
import CheckList from './CheckList';
import CheckDetail2 from './CheckDetail2';

const Stack = createStackNavigator();

function DietRecommendation() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Result2"  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="CheckList" component={CheckList} />
        <Stack.Screen name="CheckDetail2" component={CheckDetail2} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DietRecommendation;
