import React, { PureComponent, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';

import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';
import Lunch from './WorkoutDetail';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const pic1 = { uri: 'https://www.dymatize.com/wp-content/uploads/2017/08/brandan-fokkens-best-chest-workout-header-v2-DYMATIZE-830x467.jpg' }
const pic2 = { uri: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/2018/10/legs-workout.jpg?itok=is2aOfCU&timestamp=1539950429' }
const pic3 = { uri: 'https://www.muscleandfitness.com/wp-content/uploads/2019/01/Bearded-Young-Man-Doing-Bicep-Workout-With-Preacher-Curls-Exercise.jpg?w=1109&quality=86&strip=all' }

const Stack = createStackNavigator();

export const PlanScreen = ({ navigation }) => {
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

            <View style={styles.today}>
                <Text style={styles.h1}>Today's Workout</Text>
                <ImageBackground source={pic1} style={styles.workoutPic}>
                    <TouchableOpacity onPress={() => navigation.navigate('Lunch')}>
                        <View style={styles.Btn}>
                            <Text style={{ color: 'white', fontSize: 15 }}>View Details</Text>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={styles.upcoming}>

                <Text style={styles.h2}>Upcoming Workouts</Text>

            </View>


            <FlatList
                horizontal={true}
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                data={workouts}
                renderItem={({ item, index }) => (

                    <Image source={item}
                        key={index}
                        style={{
                            width: 200,
                            height: 200,


                            marginLeft: 20,
                            margin: 7,
                            marginBottom: 10
                        }}
                    />
                )}
            />
        </View>


    );
}

export const Plan = ({ navigation }) => {
    return (

        <Stack.Navigator initialRouteName="Plan">
            <Stack.Screen
                name="Plan"
                component={PlanScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Lunch"
                component={Lunch}
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
        marginTop: 10,

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
        marginTop: 17,
        paddingBottom: 15

    }
});