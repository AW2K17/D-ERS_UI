import React, { PureComponent, useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import Minicard from './Minicard copy';
import DietDetail from './DietDetail';
import axios from 'axios';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const Stack = createStackNavigator();


const DietTime = ({ route, navigation }) => {

    const {item} = route.params;
    // const {scheduleId} = route.params;
    const {sameDay} = route.params;
    const {scheduleId} = route.params;
    console.log(route.params);
    const dayTime = item.dayTime;
    // console.log(navigation);
    // const random = route.params;

    return (
        <View style={styles.container}>
            <ScrollView>
                <FlatList
                    data={item.time}
                    //             keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Minicard>
                            {/* <Image source={{ uri: item.day[0].time[0].nutrition.photos[0] }} style={{ width: 100, height: 80, marginLeft: 7 }} /> */}

                            {/* <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 5 }}>{item.dayTime}</Text> */}
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 5 }}>{item.nutrition.nutritionName}</Text>

                            <TouchableOpacity onPress={() => navigation.navigate('DietDetail', {screen: 'DietDetail', params: {item, dayTime, sameDay, scheduleId}})}
                                style={{ padding: 5, backgroundColor: '#BF243D', marginLeft: 40, width: 68, borderRadius: 20, height: 30 }}
                            >
                                <Text style={{ color: 'white', marginLeft: 10 }}>View</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                try{
                                    axios.delete('http://192.168.1.101:3031/api-gateway/current-user/schedulenf/object/' + scheduleId + '/' + item.sameNutrition + '/' + sameDay.replace("-", "").replace("-", "") + '/' + dayTime, { withCredentials: true })
                                    .then(res => {
                                        console.log(res);
                                    })
                                    .catch(err => {
                                        console.log("Error: ",err);
                                    });
                                }
                                catch(error) {
                                    console.log(error);
                                }
                            }}
                                style={{ padding: 5, backgroundColor: '#BF243D', marginLeft: 20, width: 75, borderRadius: 20, height: 30 }}
                            >
                                <Text style={{ color: 'white', marginLeft: 10 }}>Delete</Text>
                            </TouchableOpacity>
                        </Minicard>
                    )}
                />
                {/* <Text>{item.item.sameDay}</Text> */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10, marginTop: 30, width: 270, height: 40, backgroundColor: '#BF243D', borderRadius: 30 }}>
                    <Text style={{ color: 'white', fontSize: 19, marginLeft: 70, marginTop: 5 }}>GO BACK</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );

}



export const DietTimeScreen = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="DietTime">
            <Stack.Screen
                name="DietTime"
                component={DietTime}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DietDetail"
                component={DietDetail}
                options={{ headerShown: false }}
            />
            {/*
            <Stack.Screen
                name="Lunch"
                component={Lunch}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Dinner"
                component={Dinner}
                options={{ headerShown: false }}
            />*/}
        </Stack.Navigator>

    );
}

export default DietTimeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight,
    },
})