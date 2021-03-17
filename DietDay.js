import React, { PureComponent, useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import Minicard from './Minicard copy';
import DietTime from './DietTime';
import axios from 'axios';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const Stack = createStackNavigator();


const DietDay = ({ route, navigation }) => {

    const {item} = route.params;
    const {scheduleId} = route.params;
    const {sameDay} = item;
    console.log(scheduleId);
    
    // console.log(navigation);
    // const random = route.params;

    return (
        <View style={styles.container}>
            <ScrollView>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10, marginTop: 30, width: 90, height: 40, backgroundColor: '#BF243D', borderRadius: 30 }}>
                    <Text style={{ color: 'white', fontSize: 19,textAlign:'center', marginTop: 5 }}>Back</Text>
                </TouchableOpacity>
                <FlatList
                    data={item.day}
                    //             keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Minicard>
                            {/* <Image source={{ uri: item.day[0].time[0].nutrition.photos[0] }} style={{ width: 100, height: 80, marginLeft: 7 }} /> */}

                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 5 }}>{item.dayTime}</Text>
                            {/* <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 5 }}>{item.time[0].nutrition.nutritionName}</Text> */}

                            <TouchableOpacity onPress={() => navigation.navigate('DietTime', {screen: 'DietTime', params: {item, sameDay, scheduleId}})}
                                style={{ padding: 5, backgroundColor: '#BF243D', marginLeft: 80, width: 68, borderRadius: 20, height: 30 }}
                            >
                                <Text style={{ color: 'white', marginLeft: 10 }}>View</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                try{
                                    axios.delete('http://192.168.0.103:3031/api-gateway/current-user/schedulenf/day/' + scheduleId + '/' + sameDay.replace("-", "").replace("-", "") + '/' + item.dayTime, { withCredentials: true })
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
              
            </ScrollView>
        </View>
    );

}



export const DietDayScreen = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="DietDay">
            <Stack.Screen
                name="DietDay"
                component={DietDay}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DietTime"
                component={DietTime}
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

export default DietDayScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2F2F2',
        paddingTop: Constants.statusBarHeight,
    },
})