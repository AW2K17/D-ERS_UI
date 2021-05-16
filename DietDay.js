import React, { PureComponent, useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import Minicard from './Minicard copy';
import DietTime from './DietTime';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';


const Stack = createStackNavigator();


const DietDay = ({ route, navigation }) => {

    const {item} = route.params;
    const {scheduleId} = route.params;
    const {sameDay} = item;
    console.log(scheduleId);
    console.log('suno yr');
    console.log(item);
    
    // console.log(navigation);
    // const random = route.params;

    return (
        <View style={styles.container}>
            <ScrollView>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10,paddingTop:5,marginTop: 30, width:160, height: 55, backgroundColor: '#BF243D', borderRadius: 20 }}>
                    <Text style={{ color: 'white', fontSize: 19,textAlign:'center', marginTop: 5 }}><AntDesign name="arrowleft" size={24} color="white" /> Go Back</Text>
                </TouchableOpacity>
                <FlatList
                    data={item.day}
                    //             keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Minicard>
                            {/* <Image source={{ uri: item.day[0].time[0].nutrition.photos[0] }} style={{ width: 100, height: 80, marginLeft: 7 }} /> */}
                            <View >
                            <Text style={{ fontSize: 22,fontWeight:'bold', marginLeft: 20, marginTop: 5 }}>{item.dayTime}</Text>
                            <Text style={{ fontSize: 19,fontWeight:'200', marginLeft: 20, marginTop: 5 }}>Meal</Text>
                            </View>
                            {/* <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 5 }}>{item.time[0].nutrition.nutritionName}</Text> */}
                            <View style={{flexDirection:'row',position:'absolute',left:200,top:55}}>
                            <TouchableOpacity onPress={() => navigation.navigate('DietTime', {screen: 'DietTime', params: {item, sameDay, scheduleId}})}
                                style={{ padding: 5,justifyContent:'center',alignItems: 'center', backgroundColor: '#BF243D', width: 68, borderRadius: 20, height: 37 }}
                            >
                                <Text style={{ color: 'white'}}>View</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                try{
                                    axios.delete('http://192.168.0.105:3031/api-gateway/current-user/schedulenf/day/' + scheduleId + '/' + sameDay.replace("-", "").replace("-", "") + '/' + item.dayTime, { withCredentials: true })
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
                                style={{ padding: 5,justifyContent:'center',alignItems: 'center',backgroundColor: '#BF243D', width: 75, borderRadius: 20, height: 37,marginLeft:8 }}
                            >
                                <Text style={{ color: 'white' }}>Delete</Text>
                            </TouchableOpacity>
                            </View>
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