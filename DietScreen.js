import React, { PureComponent, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';

import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import axios from 'axios';

import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const pic1 = { uri: 'https://realhousemoms.com/wp-content/uploads/Eggs-in-a-Basket-IG.jpg' }
const pic2 = { uri: 'https://thestayathomechef.com/wp-content/uploads/2020/04/Grilled-Chicken-2-scaled.jpg' }
const pic3 = { uri: 'https://media-cdn.tripadvisor.com/media/photo-s/12/4e/29/14/500g-t-bone-steak-with.jpg' }

const Stack = createStackNavigator();

const Diet = ({ navigation }) => {

    const [today, setToday] = useState();
    const [workouts, setWorkouts] = useState([
        pic1,
        pic2,
        pic3,
        pic1,
        pic2,
        pic3,
    ]);

    useEffect(() => {
        async function fetchData() {
            try {
                axios.get('http://localhost:3031/api-gateway/current-user/schedulenf-user/getschedule', { withCredentials: true })
                    .then(response => {
                        // console.log(response);
                        // setExe(response.data.schedulee[0].document[1].day[0].exercise);
                        axios.get('http://localhost:3031/api-gateway/current-user/schedulenf/' + response.data.schedulenf[0].id, { withCredentials: true })
                            .then((res) => {
                                // setWorkouts(res.data.schedule.document[2].day[0].exercise.photos);
                                // setExe(res.data.schedule.document[2].day[0].exercise);
                                console.log(res.data.schedule.document)
                                function byDate(a, b) {
                                    const aa = new Date(a.sameDay)
                                    const bb = new Date(b.sameDay)

                                    if (aa < bb) return -1;
                                    if (aa > bb) return 1;
                                    return 0;
                                }
                                function filterDate(a) {
                                    const aa = new Date(a.sameDay).toISOString().substring(0, 10)
                                    var bb = new Date().toISOString().substring(0, 10);
                                    var datt = new Date(bb).toISOString().substring(0, 10)
                                    // console.log(aa);
                                    // console.log(bb);
                                    // console.log(datt);
                                    if (aa == datt) {
                                        return aa
                                    }
                                    return 0;
                                }
                                var dat = res.data.schedule.document.sort(byDate)
                                var datt2 = dat.filter(filterDate)
                                console.log(datt2)
                                if (datt2) {
                                    setToday(datt2)
                                }
                            })
                            .catch(error => {
                                console.log(error.response)
                            })
                    });
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);


    if (today != null) {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.today}>
                        <Text style={styles.h1}>Today's Plan</Text>
                        <ImageBackground source={today[0].day[0].time[0].nutrition.photos[0]} style={styles.workoutPic}>
                            <TouchableOpacity onPress={() => navigation.navigate('Breakfast')}>
                                <View style={styles.Btn}>
                                    <Text style={{ color: 'white', fontSize: 15 }}>View Details</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>



                    {/*
            <Text>{"\n"}</Text>
            <View style={styles.today2}>
                <Text style={styles.h1}>Today's Lunch</Text>
                <ImageBackground source={pic2} style={styles.workoutPic}>
                <TouchableOpacity>
                <View style={styles.Btn}>
                    <Text style={{color: 'white',fontSize:15}}>View Details</Text>
                </View>
                </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={styles.today3}>
                <Text style={styles.h1}>Today's Dinner</Text>
                <ImageBackground source={pic3} style={styles.workoutPic}>
                <TouchableOpacity>
                <View style={styles.Btn}>
                    <Text style={{color: 'white',fontSize:15}}>View Details</Text>
                </View>
                </TouchableOpacity>
                </ImageBackground>
            </View>
            
            */}

                    {/* <View style={styles.today2}>
                        <Text style={styles.h2}>Today's Lunch</Text>
                        <ImageBackground source={pic2} style={styles.workoutPic}>
                            <TouchableOpacity onPress={() => navigation.navigate('Lunch')}>
                                <View style={styles.Btn}>
                                    <Text style={{ color: 'white', fontSize: 15 }}>View Details</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                    <View style={styles.today3}>
                        <Text style={styles.h3}>Today's Dinner</Text>
                        <ImageBackground source={pic3} style={styles.workoutPic}>
                            <TouchableOpacity onPress={() => navigation.navigate('Dinner')}>
                                <View style={styles.Btn}>
                                    <Text style={{ color: 'white', fontSize: 15 }}>View Details</Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                */}

                </ScrollView>
            </View>
        );

    }
    else if (today == null) {
        return (
            <View><Text>No plan today</Text></View>
        );
    }
}

export const DietScreen = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Diet">
            <Stack.Screen
                name="Diet"
                component={Diet}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Breakfast"
                component={Breakfast}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Lunch"
                component={Lunch}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Dinner"
                component={Dinner}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>

    );
}

export default DietScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingTop: Constants.statusBarHeight,
    },
    head: {
        position: 'absolute',
        top: 34,
        width: windowWidth,
        height: 70,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        marginTop: 7,
        marginLeft: 100,
        fontSize: 26
    },
    h1: {
        fontSize: 30,
        marginRight: 120

    },
    today: {
        marginTop: 7

    },
    today2: {
        marginTop: 8,
        marginRight: 42
    },

    today3: {
        marginTop: 4,
        marginRight: 42,
        paddingBottom: 20
    },

    workoutPic: {
        width: 330,
        height: 200,
        marginTop: 40
    },
    Btn: {

        marginTop: 140,
        marginLeft: 170,
        borderRadius: 20,
        width: 120,
        backgroundColor: '#BF243D',
        alignItems: 'center',
        padding: 8,
    },
    upcoming: {
        marginTop: 14,
        marginRight: 130
    },
    h2: {
        fontSize: 30,
        marginRight: -75,
        marginTop: 39,
        paddingBottom: 3

    }
    ,
    h3: {
        fontSize: 30,
        marginRight: -75,
        marginTop: 59,
    }
});