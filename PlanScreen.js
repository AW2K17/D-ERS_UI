import React, { PureComponent, useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, Dimensions, ImageBackground,Button, Image, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// import * as Notifications from 'expo-notifications'; 
// import * as Permissions from 'expo-permissions';


import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';
import WorkoutDetail from './WorkoutDetail';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { showMessage, hideMessage } from "react-native-flash-message";
import axios from 'axios';
import Minicard3 from './Minicard3';
import MinicardWorkout from './MinicardWorkout';
import WorkoutDay from './WorkoutDay';
 //import Modal from 'modal-react-native-web';
import Modal from 'react-native-modal';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const image = { uri: "https://i.dlpng.com/static/png/6377816_preview.png" };
// import fetchData from './fetch';
import NewScreen from './NewScreen';
import WorkoutForm from './WorkoutForm';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

console.log(windowHeight);


const pic1 = { uri: 'https://www.dymatize.com/wp-content/uploads/2017/08/brandan-fokkens-best-chest-workout-header-v2-DYMATIZE-830x467.jpg' }
const pic2 = { uri: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/2018/10/legs-workout.jpg?itok=is2aOfCU&timestamp=1539950429' }
const pic3 = { uri: 'https://www.muscleandfitness.com/wp-content/uploads/2019/01/Bearded-Young-Man-Doing-Bicep-Workout-With-Preacher-Curls-Exercise.jpg?w=1109&quality=86&strip=all' }

const Stack = createStackNavigator();


let itemX;
let Upcoming=[];

export function Plan({ navigation }) {
    // const [workouts, setWorkouts] = useState([]);

    // const fetchData = require('./fetch.js');

    const [scheduleId, setScheduleId] = useState();

    const [modalVisible, setModalVisible] = useState('');
    const [modalVisible2, setModalVisible2] = useState('');

    const [deleteDate, setDeleteDate] = useState();

    const [exercise, setExercise] = useState([]);
    const [wrk,setWrk]=useState([]);
    const [upcoming,setUpcoming]=useState([]);

    var exercises;
    var dates;
    let workouts=[];

    //global.workOut=item.exerciseName;


    // async function fetchData() {
    //     try {
    //         const res = await axios.get('http:// 192.168.0.102:3021/api-gateway/current-user/schedulee-user/getschedule', { withCredentials: true })
    //          .then(response => {
    //         //console.log(Object.values(res));
    //         console.log("If: ");
    //         console.log(response.data.schedulee[1]);
    //          })
    //         if (res.data.schedulee[0].id) {
    //             setScheduleId(res.data.schedulee[0].id)
    //             // setExe(response.data.schedulee[0].document[1].day[0].exercise);
    //             axios.get('http:// 192.168.0.102:3021/api-gateway/current-user/schedulee/' + res.data.schedulee[0].id, { withCredentials: true })
    //                 .then((res) => {
    //                     // setWorkouts(res.data.schedule.document[2].day[0].exercise.photos);
    //                     // setExe(res.data.schedule.document[2].day[0].exercise);
    //                     //console.log(res.data.schedule.document)
    //                     dates = res.data.schedule.document.map((e) => {
    //                         return e.sameDay;
    //                     })
    //                     function byDate(a, b) {
    //                         const aa = new Date(a.sameDay)
    //                         const bb = new Date(b.sameDay)

    //                         if (aa < bb) return -1;
    //                         if (aa > bb) return 1;
    //                         return 0;
    //                     }
    //                     function filterDate(a) {
    //                         const aa = new Date(a.sameDay).toISOString().substring(0, 10)
    //                         var bb = new Date().toISOString().substring(0, 10);
    //                         var datt = new Date(bb).toISOString().substring(0, 10)
    //                         // console.log(aa);
    //                         // console.log(bb);
    //                         // console.log(datt);
    //                         if (aa >= datt) {
    //                             return aa
    //                         }
    //                         return 0;
    //                     }
    //                     var dat = res.data.schedule.document.sort(byDate)
    //                     var datt2 = dat.filter(filterDate)
    //                    // console.log(datt2);
    //                     if (datt2) {
    //                         exercises = datt2
    //                         setExercise(exercises)
    //                     }
    //                 })
    //                 .catch(error => {
    //                     //console.log(error.response)
    //                 })
    //         }

    //     }

    //     catch (err) {
    //         console.log(err);
    //     }
    // }


    function Remind1(){


        showMessage({
            message: 'Its Time For Workout! ', type: 'info', color: "white", type: 'info', icon: { icon: "auto", position: "left" },
            color: "white", backgroundColor: 'black'
          })

          setTimeout(() => {  Remind2() }, 5000);
    }

    function Remind2(){


        showMessage({
            message: 'Hi,Tell us about your workout today! ', type: 'info', color: "white", type: 'info', icon: { icon: "auto", position: "left" },
            color: "white", backgroundColor: 'black',
            onPress: () => {
               navigation.navigate( 'NewScreen', {workouts});
              }
          })
    }

    async function fetchData() {

        console.log('chalao plz');
        try {
            const res = await axios.get('http://192.168.0.102:3021/api-gateway/current-user/schedulee-user/getschedule', { withCredentials: true })
            // .then(response => {
            //console.log(Object.values(res));
            //console.log(JSON.stringify(res));
           
            
            if (res.data.schedulee[0].id) {
                setScheduleId(res.data.schedulee[0].id)
                // setExe(response.data.schedulee[0].document[1].day[0].exercise);
                axios.get('http://192.168.0.102:3021/api-gateway/current-user/schedulee/' + res.data.schedulee[0].id, { withCredentials: true })
                    .then((res) => {
                        // setWorkouts(res.data.schedule.document[2].day[0].exercise.photos);
                        // setExe(res.data.schedule.document[2].day[0].exercise);
                        //console.log("Is: "+res.data.schedule.document)
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
                        console.log(datt2);
                        if (datt2) {
                            exercises = datt2
                           
                            setExercise(exercises)
                            itemX=exercises[0]
                            Upcoming=[...exercises];
                            exercise.shift();
                           setUpcoming(exercise);
                           console.log('listing');
                           console.log(upcoming);
                        }
                    })
                    .catch(error => {
                        
                        console.log(error.response);
                    })
            }

        }

        catch (err) {
            console.log(err);
        }
    }

    //console.log("Yeh lo: "+exercise.exerciseName);



    useEffect(() => {
            fetchData();
    }, []);
    
    async function fetchExData(){

        let i,j;
        
        let tareekh=new Date();
        let x=tareekh.toISOString();
        let ran=x.slice(0,10);
        let obj={};
        try {
            const res = await axios.get('http://192.168.0.102:3021/api-gateway/current-user/schedulee-user/getschedule', { withCredentials: true })
            .then(response=>{
                console.log("CheckKroo ");
                console.log(response.data.schedulee[0].document.length);
                for(i=0;i<(response.data.schedulee[0].document.length);i++){
                    if(ran===response.data.schedulee[0].document[i].sameDay){
                    console.log('yes');
                //console.log(response.data.schedulee[0].document[i].sameDay);
                for(j=0;j<(response.data.schedulee[0].document[i].day.length);j++){

                    //workouts.push(res.data.schedulee[0].document[i].day[j].exercise.exerciseName);
                    Object.assign(obj,{id:j+1,wo:response.data.schedulee[0].document[i].day[j].exercise.exerciseName})
                    //console.log(obj);
                    workouts.push(obj);
                    
                    obj={};
                }
                console.log('list dkeho');
                console.log(workouts);
                //setUpcoming(workouts);
            }
                else{
                    console.log("No");
                }
            }
            //setTimeout(() => {  Remind1() }, 4000);
            setTimeout(() => {  Remind1() }, 4000);
            
            console.log(workouts);
            })
        }
        catch(err){
                console.log(err);
        }
        setWrk(workouts);

        
    }

    

    // useEffect(() => {
    //         fetchData();
    // }, []);
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



      
//   Notifications.setNotificationHandler({

//     handleNotification: async()=>{

//       return {
//         shouldPlaySound:true,
//         shouldShowAlert:true
        
//       }
//     }
//   })


//   useEffect(()=>{

//     Permissions.getAsync(Permissions.NOTIFICATION).then(statusObj=>{
//       if(statusObj.status!=='granted'){
//         return Permissions.askAsync(Permissions.NOTIFICATION);
//       }
//       return statusObj;
//     }).then((statusObj)=>{
//       if(statusObj.status!=='granted'){
//         return;
//       }
//     });
//   },[])


//   useEffect(()=>{

//     const subscriptionForeground=Notifications.addNotificationReceivedListener(notification=>{
//       console.log(notification)
//     })


//   const subscriptionBackground=Notifications.addNotificationResponseReceivedListener(notification=>{
//     navigation.navigate('NewScreen');
//   });

    //  const handleNotificationResponse = response => {
    //      console.log(response);
    //     response.navigation.navigate('NewScreen');
    //     onPress=>{navigation.navigate('NewScreen')}5
    //   };


//     return()=>{
//       subscriptionForeground.remove();
//       //subscriptionBackground.remove();
//       subscriptionBackground.remove();
//     }
//   },[]);

  
// const [value,setValue]=useState('');
// const [load,setLoad]=useState('');


// const triggerNotificationHandler=()=>{


//   Notifications.scheduleNotificationAsync({

//     content:{
//       title:'Hi User, Its Time',
//       body:'You Got This!'
//     },
//     trigger:{
//       seconds:4
//     }
//   });
// }





// const triggerNotificationHandler2=()=>{


//   Notifications.scheduleNotificationAsync({

//     content:{
//       title:'Hi User',
//       body:'Give Details Of Your Meal'
//     },
//     trigger:{
//       seconds:4
//     }
//   });
// }


// function Remind(){

//   triggerNotificationHandler();
//   setTimeout(() => { triggerNotificationHandler2()}, 5000);
// }







    function deleteSchedule(d) {
        var dt = d.replace("-", "").replace("-", "");
        axios.delete('http://192.168.0.102:3021/api-gateway/current-user/schedulee/day/' + scheduleId + '/' + dt, { withCredentials: true })
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
            axios.delete('http://192.168.0.102:3021/api-gateway/current-user/schedulee/' + scheduleId, { withCredentials: true })
                .then(res => {
                    console.log(res);
                })
                .catch(error => {
                    console.log('nai hua dele');
                    console.log(error);
                })
        }
        catch (err) {
            console.log(err);
        }
        setExercise([]);
        setUpcoming([]);
    }


    

    if (typeof window !== undefined) {
        return (
            <View style={styles.centeredView}>
            
                <ScrollView>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={{ flexDirection: 'row', padding: 12, backgroundColor: '#BF243D',marginRight:11,marginTop:20, width: windowWidth*0.366,alignItems: 'center',borderRadius: 20, height:  windowHeight*0.057 }}
                    onPress={() => {
                        try {
                            axios.get('http://192.168.0.102:3022/api-gateway/current-user/exercise-schedule/reschedule/' + scheduleId, { withCredentials: true })
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


                <TouchableOpacity style={{ flexDirection: 'row', padding: 14, backgroundColor: '#BF243D', marginLeft: 2,marginRight:11, marginTop: 20,alignItems: 'center',width: windowWidth*0.366, borderRadius: 20, height: windowHeight*0.057 }}
                    onPress={() => {
                        setModalVisible(true);
                    }} >
                    <MaterialIcons name={'delete'} style={{ color: 'white' }} size={20} />
                    <Text style={{ fontSize: 15, color: 'white', marginLeft:windowWidth*0.024}}>Delete All</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{ flexDirection: 'row', padding: 18, backgroundColor: '#BF243D', marginLeft: 2, marginTop: 20,alignItems: 'center',width: windowWidth*0.146, borderRadius: 50, height: windowHeight*0.057 }}
                    onPress={() => {
                        fetchData();
                        //Remind();
                        fetchExData();
                    }} >
                    <MaterialIcons name={'replay'} style={{ color: 'white' }} size={20} />
                    
                </TouchableOpacity>
              
              </View>
                <Text style={styles.paragraph}>
       Today's Workouts
      </Text>
      {exercise.length===0 ?(
                    <View>

                    </View>
                ):(
      <TouchableOpacity style={{position:'absolute',top:165,left:20}} onPress={() => navigation.navigate('WorkoutDay', { screen: 'WorkoutDay', params: { itemX, scheduleId } })} >
      <View style={styles.tag1}>  
          <ImageBackground source={image} imageStyle={{ borderTopLeftRadius: 26,borderTopRightRadius:26}} style={styles.image}>
      
    </ImageBackground>
    <Text style={styles.todayHeading}>Check It Out</Text>
      </View>
       </TouchableOpacity>)}
       <Text style={styles.paragraph2}>Upcoming Workouts</Text>
               
               <View style={{marginTop:460}}>
                <FlatList
   data={upcoming}
   // keyExtractor={(item, index) => index.toString()}
   horizontal
   renderItem={({ item }) => (
    
    <Minicard3 >
                            {/* <Image source={{ uri: item.day[0].time[0].nutrition.photos[0] }} style={{ width: 100, height: 80, marginLeft: 7 }} /> */}

                            <View style={{flexDirection:'column'}}>
                            <Text style={{ fontSize: 23,fontWeight:'700', marginLeft: 20, marginTop: 5 }}>Pending Plan</Text>
                            {/* <Text style={{ fontSize: 13,fontWeight:'200', marginLeft: 20, marginTop: 5 }}>{item.sameDay}</Text> */}
                            </View>
                            
                            
                            {/* <TouchableOpacity onPress={() => navigation.navigate('DietDay', { screen: 'DietDay', params: { item, scheduleId } })}
                                style={{ padding: 5,justifyContent:'center',alignItems:'center', backgroundColor: '#BF243D', marginLeft: 30, marginTop: 8, width: 72, borderRadius: 20, height: 37 }}
                            >
                                <Text style={{ color: 'white' }}>View</Text>

                            </TouchableOpacity>*/}
                            {/* <TouchableOpacity onPress={() => {
                                setDeleteDay(item.sameDay);
                                deleteSchedule(item.sameDay);
                                deleteItem(item.id);
                                console.log(item.sameDay);
                                // setModalVisible(true);
                            }}
                                style={{ padding: 5,justifyContent:'center',alignItems:'center', backgroundColor: '#BF243D', marginTop: 8, width: 78, borderRadius: 20, height: 37 }}
                            >
                                <Text style={{ color: 'white' }}>Delete</Text>
                            </TouchableOpacity> */}
                            {/* 
                    <TouchableOpacity onPress={setTest(item.sameDay)}
                        style={{ backgroundColor: '#BF243D', marginLeft: 60, width: 55, borderRadius: 20, height: 20 }}
                    >
                        <Text style={{ color: 'white', marginLeft: 10 }}>Set</Text>
                    </TouchableOpacity> */}
                            {/* <Text>Test = {test}</Text> */}
                        </Minicard3>
                     




   )}
/>
</View>

        
               
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
                </ScrollView>
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
            <Stack.Screen
                name="NewScreen"
                component={NewScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="WorkoutForm"
                component={WorkoutForm}
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
    },
    paragraph: {
      position:"absolute",
      top:90,
      left:25,
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    paragraph2: {
      position:"absolute",
      top:0.564*windowHeight,
      left:25,
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    todayHeading:{
      fontSize:17,
      marginLeft:13,
      marginTop:14,
      margin:'1.79%'
    },
    image: {
        flex: 0.92,
        resizeMode: "cover",
        justifyContent: "center",
        borderRadius:22,
        
      },

      tag1:{
        width:wp('57.3%'),
        height:hp('30.97%'),
        backgroundColor:'white',
        
        marginLeft:4,
        borderRadius:22
       
      }
});