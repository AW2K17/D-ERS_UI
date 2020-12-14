import React, { PureComponent, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';

import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const pic1 = { uri: 'https://realhousemoms.com/wp-content/uploads/Eggs-in-a-Basket-IG.jpg' }
const pic2 = { uri: 'https://thestayathomechef.com/wp-content/uploads/2020/04/Grilled-Chicken-2-scaled.jpg' }
const pic3 = { uri: 'https://media-cdn.tripadvisor.com/media/photo-s/12/4e/29/14/500g-t-bone-steak-with.jpg' }

const Stack = createStackNavigator();

const DietScreen = ({ navigation }) => {

    const [workouts, setWorkouts] = useState([
        pic1,
        pic2,
        pic3,
        pic1,
        pic2,
        pic3,
    ]);





    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.today}>
                    <Text style={styles.h1}>Today's Breakfast</Text>
                    <ImageBackground source={pic1} style={styles.workoutPic}>
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

                <View style={styles.today2}>
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
            </ScrollView>
        </View>


    );
}

export const Diet = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Plan">
            <Stack.Screen
                name="Diet"
                component={DietScreen}
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