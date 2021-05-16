import * as React from 'react';
import { Button, View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Result2 from './Result2';
import CheckDiet from './CheckDiet';
import CheckDetail from './CheckDetail';

const Stack = createStackNavigator();

function DietRecommendation() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Result2"  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Result2" component={Result2} />
        <Stack.Screen name="CheckDiet" component={CheckDiet} />
        <Stack.Screen name="CheckDetail" component={CheckDetail} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DietRecommendation;
