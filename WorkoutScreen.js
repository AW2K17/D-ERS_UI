import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Plan } from './PlanScreen';
import { HistoryScreen } from './HistoryScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const PlanStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

// function PlanStackScreen() {
//     return (
//         <PlanStack.Navigator headerMode="none">
//             <PlanStack.Screen name="Plan" component={PlanScreen} />
//         </PlanStack.Navigator>
//     );
// }

function HistoryStackScreen() {
    return (
        <HistoryStack.Navigator headerMode="none">
            <HistoryStack.Screen name="History" component={HistoryScreen} />
        </HistoryStack.Navigator>
    );
}


export const WorkoutScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Plan" component={Plan} />
            <Tab.Screen name="History" component={HistoryStackScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});