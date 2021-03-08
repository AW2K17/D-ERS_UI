import React, { PureComponent, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { showMessage, hideMessage } from "react-native-flash-message";

const pic1 = { uri: 'https://www.dymatize.com/wp-content/uploads/2017/08/brandan-fokkens-best-chest-workout-header-v2-DYMATIZE-830x467.jpg' }

const pic3 = { uri: 'https://www.muscleandfitness.com/wp-content/uploads/2019/01/Bearded-Young-Man-Doing-Bicep-Workout-With-Preacher-Curls-Exercise.jpg?w=1109&quality=86&strip=all' }


const WorkoutDetail = ({ route, navigation }) => {
    
    const [scheduleId, setScheduleId] = useState();
    const workout = route.params;
    console.log(workout)
    const [sets, setSets] = useState(workout.param.item.exercise.sets);
    // const [reps, setReps] = useState();
    const image = { uri: workout.param.item.exercise.photos[0] };
    
    const exercise = {
        exerciseName: workout.param.item.exercise.exerciseName,
        sets: sets,
        reps: [10, 10, 10],
        discription: [''],
        photos: workout.param.item.exercise.photos[0]

    }
    const day = [{
        sameExercise: workout.param.item.sameExercise,
        exercise: exercise,


    }]
    const document = [{
        sameDay: workout.param.sameDay,
        day: day

    }];




    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.today}>
                    <Text style={styles.h1}>{workout.param.item.exercise.exerciseName}</Text>
                    <ImageBackground source={image} style={styles.workoutPic}>

                    </ImageBackground>
                </View>

                
                <View style={{flexDirection:'row',alignItems:'center',marginLeft:windowWidth*0.122}}>
                    
                    <TextInput style={{ padding: 10, marginTop: 30, marginLeft: 23, fontSize: 15,backgroundColor:'#B8B2B2' }} placeholder="Enter Sets" value={sets.toString()}
                        onChangeText={text => setSets(text)} />
                    
                    <TextInput style={{ padding: 10, marginTop: 30, marginLeft: 23, fontSize: 15,backgroundColor:'#B8B2B2' }} placeholder="Enter Reps" value={workout.param.item.exercise.reps[0].toString()} />
                    </View>
                    
                    {/* <Text style={{marginTop:30,marginLeft:62,fontSize:25,fontWeight:'bold'}}>{workout[0].day[0].exercise.exerciseName}</Text>
                </View>
                <Text style={{marginTop:30,marginLeft:1,fontSize:21}}>{"Sets:   "}{workout[0].day[0].exercise.sets}{"      "}</Text>
                <Text style={{marginTop:30,marginLeft:1,fontSize:21}}>{"Reps:   "}{workout[0].day[0].exercise.reps[0]}{"     "}</Text> */}

                <View style={{flexDirection:'row',marginLeft:windowWidth*0.092,marginBottom:55,marginTop:30}}>
                    <TouchableOpacity onPress={async () => {
                        try {
                            const res = await axios.get('http://192.168.43.126:3021/api-gateway/current-user/schedulee-user/getschedule', { withCredentials: true })
                            // .then(response => {
                            console.log(res);

                            if (res.data.schedulee[0].id) {
                                setScheduleId(res.data.schedulee[0].id)
                                axios.put('http://192.168.43.126:3021/api-gateway/current-user/schedulee/object/' + res.data.schedulee[0].id + "/" + workout.param.item.sameExercise, { document: document }, { withCredentials: true })
                                    .then(response => {
                                        // navigation.navigate('Search');
                                        console.log(response);
                                    }).catch(error => {
                                        console.log(error);
                                    })
                            }
                        }
                        catch (err) {
                            console.log(err);
                        }
                        showMessage({
              message: "Updated Successfully, Please Refresh",
              type: "success",
            });
                    }} style={{ marginLeft: 10, marginTop: 30, width: 120, height: 40, backgroundColor: '#BF243D', borderRadius: 30 }}>
                        <Text style={{ color: 'white', fontSize: 19,textAlign: 'center', marginTop: 5 }}>UPDATE</Text>
                    </TouchableOpacity>
                

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

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 33, marginTop: 30, width: 120, height: 40, backgroundColor: '#BF243D', borderRadius: 30 }}>
                    <Text style={{ color: 'white', fontSize: 19,textAlign: 'center', marginTop: 5 }}>BACK</Text>
                </TouchableOpacity>
                </View>

            </ScrollView>
        </View>


    );
}

export default WorkoutDetail;

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
        fontSize: 33,
        marginRight: 100,
        marginTop: 50

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
        width: 370,
        height: 320,
        marginTop: 40,
        borderRadius: 30
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