import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login';
import Dashboard from './Dashboard';
import SignUpScreen from './SignUpScreen';



const Stack = createStackNavigator();

function Signin() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="login" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="dash" component={Dashboard} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Signin;
