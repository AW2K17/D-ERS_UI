import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './HomeScreen';
import { WorkoutScreen } from './WorkoutScreen';
import { DietScreen } from './DietScreen';
import { ProgressScreen } from './ProgressScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabs from './BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Workout"
          component={WorkoutScreen}
          options={{
            tabBarLabel: 'Workout',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="mars" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Diet"
          component={DietScreen}
          options={{
            tabBarLabel: 'Diet',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="heartbeat" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Progress"
          component={ProgressScreen}
          options={{
            tabBarLabel: 'Progress',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="tasks" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>

    </NavigationContainer>

  );
  // <View style={styles.container}>
  //   <Text>Open up App.js to start working on your app!</Text>
  //   <StatusBar style="auto" />
  // </View>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
