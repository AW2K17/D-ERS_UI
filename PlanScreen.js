import React, { PureComponent, useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, Dimensions, ImageBackground,Button, Image, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';
import WorkoutDetail from './WorkoutDetail';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import MinicardWorkout from './MinicardWorkout';
import WorkoutDay from './WorkoutDay';
// import Modal from 'modal-react-native-web';
import Modal from 'react-native-modal';
// import fetchData from './fetch';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

console.log(windowHeight);


const pic1 = { uri: 'https://www.dymatize.com/wp-content/uploads/2017/08/brandan-fokkens-best-chest-workout-header-v2-DYMATIZE-830x467.jpg' }
const pic2 = { uri: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/2018/10/legs-workout.jpg?itok=is2aOfCU&timestamp=1539950429' }
const pic3 = { uri: 'https://www.muscleandfitness.com/wp-content/uploads/2019/01/Bearded-Young-Man-Doing-Bicep-Workout-With-Preacher-Curls-Exercise.jpg?w=1109&quality=86&strip=all' }

const Stack = createStackNavigator();

export function Plan({ navigation }) {
    // const [workouts, setWorkouts] = useState([]);

    // const fetchData = require('./fetch.js');

    const [scheduleId, setScheduleId] = useState();

    const [modalVisible, setModalVisible] = useState('');
    const [modalVisible2, setModalVisible2] = useState('');

    const [deleteDate, setDeleteDate] = useState();

    const [exercise, setExercise] = useState([]);

    var exercises;
    var dates;

    async function fetchData() {
        try {
            const res = await axios.get('http://192.168.43.126:3021/api-gateway/current-user/schedulee-user/getschedule', { withCredentials: true })
            // .then(response => {
            console.log(res);

            if (res.data.schedulee[0].id) {
                setScheduleId(res.data.schedulee[0].id)
                // setExe(response.data.schedulee[0].document[1].day[0].exercise);
                axios.get('http://192.168.43.126:3021/api-gateway/current-user/schedulee/' + res.data.schedulee[0].id, { withCredentials: true })
                    .then((res) => {
                        // setWorkouts(res.data.schedule.document[2].day[0].exercise.photos);
                        // setExe(res.data.schedule.document[2].day[0].exercise);
                        console.log(res.data.schedule.document)
                        dates = res.data.schedule.document.map((e) => {
                            return e.sameDay;
                        })
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
                            if (aa >= datt) {
                                return aa
                            }
                            return 0;
                        }
                        var dat = res.data.schedule.document.sort(byDate)
                        var datt2 = dat.filter(filterDate)
                        console.log(datt2)
                        if (datt2) {
                            exercises = datt2
                            setExercise(exercises)
                        }
                    })
                    .catch(error => {
                        console.log(error.response)
                    })
            }

        }

        catch (err) {
            console.log(err);
        }
    }





    useEffect(() => {
            fetchData();
    }, []);
    // if (res.data.schedulee) {
    //     console.log(res.data.schedulee[0].document[0].day[0].exercise.photos[0]);
    //     console.log(photoUrl);
    // }

    // console.log(exercise)


    const deleteItem=(id)=>{


        setExercise(
    
          prevItems=>{return prevItems.filter(item=>item.id!=id);
          });
      }




    function deleteSchedule(d) {
        var dt = d.replace("-", "").replace("-", "");
        axios.delete('http://192.168.43.126:3021/api-gateway/current-user/schedulee/day/' + scheduleId + '/' + dt, { withCredentials: true })
            .then(response => {
                console.log('Schedule deleted');
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    function deleteAllSchedules() {
        try {
            axios.delete('http://192.168.43.126:3021/api-gateway/current-user/schedulee/' + scheduleId, { withCredentials: true })
                .then(res => {
                    console.log(res);
                })
                .catch(error => {
                    console.log(error);
                })
        }
        catch (err) {
            console.log(err);
        }
        setExercise([]);
    }

    if (typeof window !== undefined) {
        return (
            <View style={styles.centeredView}>

                <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{ flexDirection: 'row', padding: 12, backgroundColor: '#BF243D',marginRight:11,marginTop:40, width: windowWidth*0.366,alignItems: 'center',borderRadius: 20, height:  windowHeight*0.057 }}
                    onPress={() => {
                        try {
                            axios.get('http://192.168.43.126:3022/api-gateway/current-user/exercise-schedule/reschedule/' + scheduleId, { withCredentials: true })
                                .then(res => {
                                    console.log(res);
                                })
                                .catch(error => {
                                    console.log(error);
                                })
                        }
                        catch (err) {
                            console.log(err);
                        }
                    }} >
                    <MaterialIcons name="schedule" size={20} color="white" />
                    <Text style={{ fontSize: 15, color: 'white',marginLeft:windowWidth*0.024}}>Reschedule</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ flexDirection: 'row', padding: 14, backgroundColor: '#BF243D', marginLeft: 2,marginRight:11, marginTop: 40,alignItems: 'center',width: windowWidth*0.366, borderRadius: 20, height: windowHeight*0.057 }}
                    onPress={() => {
                        setModalVisible(true);
                    }} >
                    <MaterialIcons name={'delete'} style={{ color: 'white' }} size={20} />
                    <Text style={{ fontSize: 15, color: 'white', marginLeft:windowWidth*0.024}}>Delete All</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{ flexDirection: 'row', padding: 18, backgroundColor: '#BF243D', marginLeft: 2, marginTop: 40,alignItems: 'center',width: windowWidth*0.146, borderRadius: 50, height: windowHeight*0.057 }}
                    onPress={() => {
                        fetchData();
                    }} >
                    <MaterialIcons name={'replay'} style={{ color: 'white' }} size={20} />
                    
                </TouchableOpacity>
                

                
                </View>
                <FlatList
                    data={exercise}
                    // keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <MinicardWorkout date={item.sameDay}>
                            {/* <Image source={{ uri: item.day[0].time[0].nutrition.photos[0] }} style={{ width: 100, height: 80, marginLeft: 7 }} /> */}

                            <Text style={{ fontSize: 28, marginTop: 5 }}>{item.sameDay}</Text>

                            <TouchableOpacity onPress={() => navigation.navigate('WorkoutDay', { screen: 'WorkoutDay', params: { item, scheduleId } })}
                                style={{ padding: 5, backgroundColor: '#BF243D', marginLeft: 30, marginTop: 8, width: 68, borderRadius: 20, height: 30 }}
                            >
                                <Text style={{ color: 'white', marginLeft: 10 }}>View</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setDeleteDate(item.sameDay)
                                console.log(item.sameDay)
                                deleteSchedule(item.sameDay)
                                deleteItem(item.id);
                                // setModalVisible(true);
                            }}
                                style={{ padding: 5, backgroundColor: '#BF243D', marginLeft: 24, marginTop: 8, width: 75, borderRadius: 20, height: 30 }}
                            >
                                <Text style={{ color: 'white', marginLeft: 10 }}>Delete</Text>
                            </TouchableOpacity>


                        </MinicardWorkout>


                    )}
                />

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}

                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Are You Sure You Want To Delete?</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableHighlight
                                    style={styles.openButton}
                                    onPress={() => {
                                        setModalVisible2(!modalVisible2), setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={styles.textStyle}>Yes</Text>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={styles.openButton}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text style={styles.textStyle}>No</Text>
                                </TouchableHighlight>

                            </View>
                        </View>
                    </View>
                </Modal>




                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible2}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Deleted Items Will Not Be Recovered, Still Want To Delete?</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableHighlight
                                    style={styles.openButton}
                                    onPress={() => {
                                        setModalVisible2(!modalVisible2);
                                    }}
                                >
                                    <Text style={styles.textStyle}>No</Text>
                                </TouchableHighlight>

                                <TouchableHighlight
                                    style={styles.openButton}
                                    onPress={() => {
                                        deleteAllSchedules();

                                        setModalVisible2(!modalVisible2);
                                    }}
                                >
                                    <Text style={styles.textStyle}>Yes</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
        // <View style={styles.container}>

        //     <View style={styles.today}>
        //         <Text style={styles.h1}>Today's Workout</Text>
        //         <ImageBackground source={today[0].day[0].exercise.photos[0]} style={styles.workoutPic}>
        //             <TouchableOpacity onPress={() => navigation.navigate('WorkoutDetail', today)}>
        //                 <View style={styles.Btn}>
        //                     <Text style={{ color: 'white', fontSize: 15 }}>View Details</Text>
        //                 </View>
        //             </TouchableOpacity>
        //         </ImageBackground>
        //     </View>
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
        // </View >



    }
    else {
        return (
            <View style={styles.centeredView}>

                <Text>No workout Today</Text>
            </View>
        );
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
                name="WorkoutDay"
                component={WorkoutDay}
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

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#BF243D",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 100
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});