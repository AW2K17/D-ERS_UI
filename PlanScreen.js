import React, { PureComponent, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';

import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';
import WorkoutDetail from './WorkoutDetail';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const pic1 = { uri: 'https://www.dymatize.com/wp-content/uploads/2017/08/brandan-fokkens-best-chest-workout-header-v2-DYMATIZE-830x467.jpg' }
const pic2 = { uri: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/2018/10/legs-workout.jpg?itok=is2aOfCU&timestamp=1539950429' }
const pic3 = { uri: 'https://www.muscleandfitness.com/wp-content/uploads/2019/01/Bearded-Young-Man-Doing-Bicep-Workout-With-Preacher-Curls-Exercise.jpg?w=1109&quality=86&strip=all' }

const Stack = createStackNavigator();

export function Plan({ navigation }) {
    // const [workouts, setWorkouts] = useState([]);

    const [today, setToday] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                axios.get('http://localhost:3021/api-gateway/current-user/schedulee-user/getschedule', { withCredentials: true })
                    .then(response => {
                        // console.log(response);
                        // setExe(response.data.schedulee[0].document[1].day[0].exercise);
                        axios.get('http://localhost:3021/api-gateway/current-user/schedulee/' + response.data.schedulee[0].id, { withCredentials: true })
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
                    }
                    );
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    // if (res.data.schedulee) {
    //     console.log(res.data.schedulee[0].document[0].day[0].exercise.photos[0]);
    //     console.log(photoUrl);
    // }



    if (today != null) {
        return (
            <View style={styles.container}>

                <View style={styles.today}>
                    <Text style={styles.h1}>Today's Workout</Text>
                    <ImageBackground source={today[0].day[0].exercise.photos[0]} style={styles.workoutPic}>
                        <TouchableOpacity onPress={() => navigation.navigate('WorkoutDetail', today)}>
                            <View style={styles.Btn}>
                                <Text style={{ color: 'white', fontSize: 15 }}>View Details</Text>
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                {/* <View style={styles.upcoming}>

                <Text style={styles.h2}>Upcoming Workouts</Text>

            </View> */}


                {/* <FlatList
                horizontal={true}
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                data={workouts}
                renderItem={({ item, index }) => (

                    <View>
                        <Image source={item}
                            key={index}
                            style={{
                                width: 200,
                                height: 200,


                                marginLeft: 20,
                                margin: 7,
                                marginBottom: 10
                            }}
                        ></Image>
                        <Text>{exe.exerciseName}</Text>
                    </View>
                )}
            /> */}
            </View>


        );
    }
    else {
        return (<View><Text>No workout Today</Text></View>)
    }
}

export const PlanScreen = ({ navigation }) => {
    return (

        <Stack.Navigator initialRouteName="Plan">
            <Stack.Screen
                name="Plan"
                component={Plan}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="WorkoutDetail"
                component={WorkoutDetail}
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