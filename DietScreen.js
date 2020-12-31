import React, { PureComponent, useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';

import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


import axios from 'axios';
import Dialog from './Dialog';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Minicard from './Minicard copy';
import DietDayScreen from './DietDay';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Modal from 'modal-react-native-web';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const pic1 = { uri: 'https://realhousemoms.com/wp-content/uploads/Eggs-in-a-Basket-IG.jpg' }
const pic2 = { uri: 'https://thestayathomechef.com/wp-content/uploads/2020/04/Grilled-Chicken-2-scaled.jpg' }
const pic3 = { uri: 'https://media-cdn.tripadvisor.com/media/photo-s/12/4e/29/14/500g-t-bone-steak-with.jpg' }

const Stack = createStackNavigator();

const Diet = ({ navigation }) => {
    // const navigation = new useNavigation();

    const [modalVisible, setModalVisible] = useState('');
    const [modalVisible2, setModalVisible2] = useState('');

    const [scheduleId, setScheduleId] = useState();
    const [deleteDate, setDeleteDay] = useState();
    const [diet, setDiet] = useState([]);
    const [workouts, setWorkouts] = useState([
        pic1,
        pic2,
        pic3,
        pic1,
        pic2,
        pic3,
    ]);
    const [test, setTest] = useState('');

    var diets;
    var dates;

    useEffect(async () => {

        try {
            const res = await axios.get('http://localhost:3031/api-gateway/current-user/schedulenf-user/getschedule', { withCredentials: true })
            // .then(response => {
            console.log(res)
            if (res.data.schedulenf[0]) {

                setScheduleId(res.data.schedulenf[0].id)
                axios.get('http://localhost:3031/api-gateway/current-user/schedulenf/' + res.data.schedulenf[0].id, { withCredentials: true })
                    .then((response) => {
                        console.log(response)
                        dates = response.data.schedule.document.map((e) => {
                            return e.sameDay;
                        });
                        // setWorkouts(res.data.schedule.document[2].day[0].exercise.photos);
                        // setExe(res.data.schedule.document[2].day[0].exercise);
                        // console.log(res.data.schedule.document)
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
                        var dat = response.data.schedule.document.sort(byDate)
                        var datt2 = dat.filter(filterDate)
                        console.log(datt2)
                        if (datt2 != null) {
                            diets = datt2
                            console.log(diets)
                            setDiet(diets)
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
            // console.log(response);
            // setExe(response.data.schedulee[0].document[1].day[0].exercise);
        }
        catch (err) {
            console.log(err);
        }
    }, []);


    function deleteSchedule(d) {
        var dt = d.replace("-", "").replace("-", "");
        axios.delete('http://localhost:3031/api-gateway/current-user/schedulenf/day/' + scheduleId + '/' + dt, { withCredentials: true })
            .then(response => {
                console.log('Schedule deleted');
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }


    function deleteAllSchedules () {
        try {
            axios.delete('http://localhost:3031/api-gateway/current-user/schedulenf/' + scheduleId, { withCredentials: true })
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
    }
    // function settter() {

    //     var random = test;
    //     console.log("Random"+ random)
    //     navigation.navigate('DietDay', {random})
    // }

    // if (today != null) {
    // <View style={styles.container}>
    // <ScrollView>
    //         <View style={styles.today}>
    //             <Text style={styles.h1}>Today's Plan</Text>
    //             <ImageBackground source={today[0].day[0].time[0].nutrition.photos[0]} style={styles.workoutPic}>
    //                 <TouchableOpacity onPress={() => navigation.navigate('Breakfast')}>
    //                     <View style={styles.Btn}>
    //                         <Text style={{ color: 'white', fontSize: 15 }}>View Details</Text>
    //                     </View>
    //                 </TouchableOpacity>
    //             </ImageBackground>
    //         </View>

    // <View style={styles.container}>
    // <ScrollView>
    // console.log(diet)
    if (diet == null) {

        return (
            <View>
                <Text>No Diet Plan</Text>
            </View>
        );
    }
    else {
        return (
            <View style={styles.centeredView}>

                <TouchableOpacity style={{ flexDirection: 'row', padding: 12, backgroundColor: '#BF243D', marginLeft: 10, width: 200, borderRadius: 20, height: 45 }}
                    onPress={() => {
                        try {
                            axios.get('http://localhost:3032/api-gateway/current-user/nutrition-schedule/reschedule/' + scheduleId, { withCredentials: true })
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
                        <MaterialIcons name={'replay'} style={{ color: 'white' }} size={20} />
                    <Text style={{ fontSize: 15, color: 'white', marginLeft: 10 }}>Reschedule diets</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ flexDirection: 'row', padding: 12, backgroundColor: '#BF243D', marginLeft: 10, marginTop: 40, width: 185, borderRadius: 20, height: 45 }}
                    onPress={() => {
                        setModalVisible(true);
                    }} >
                        <MaterialIcons name={'delete'} style={{ color: 'white' }} size={20} />
                    <Text style={{ fontSize: 15, color: 'white', marginLeft: 10 }}>Delete all schedules</Text>
                </TouchableOpacity>


                <FlatList
                    data={diet}
                    // keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Minicard>
                            {/* <Image source={{ uri: item.day[0].time[0].nutrition.photos[0] }} style={{ width: 100, height: 80, marginLeft: 7 }} /> */}

                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 5 }}>Scheduled Diet for {item.sameDay}</Text>

                            <TouchableOpacity onPress={() => navigation.navigate('DietDay', { screen: 'DietDay', params: { item } })}
                                style={{ padding: 5, backgroundColor: '#BF243D', marginLeft: 60, width: 68, borderRadius: 20, height: 30 }}
                            >
                                <Text style={{ color: 'white', marginLeft: 10 }}>View</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setDeleteDay(item.sameDay);
                                deleteSchedule(item.sameDay);
                                console.log(item.sameDay);
                                // setModalVisible(true);
                            }}
                                style={{ padding: 5, backgroundColor: '#BF243D', marginLeft: 60, width: 75, borderRadius: 20, height: 30 }}
                            >
                                <Text style={{ color: 'white', marginLeft: 10 }}>Delete</Text>
                            </TouchableOpacity>
                            {/* 
                    <TouchableOpacity onPress={setTest(item.sameDay)}
                        style={{ backgroundColor: '#BF243D', marginLeft: 60, width: 55, borderRadius: 20, height: 20 }}
                    >
                        <Text style={{ color: 'white', marginLeft: 10 }}>Set</Text>
                    </TouchableOpacity> */}
                            {/* <Text>Test = {test}</Text> */}
                        </Minicard>


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
    }

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

    // </ScrollView >
    // </View >

    // }
    // else if (today == null) {
    //     return (
    //         <View><Text>No plan today</Text></View>
    //     );
    // }
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
                name="DietDay"
                component={DietDayScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Dialog"
                component={Dialog}
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
            /> */}
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