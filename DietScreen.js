import React, { PureComponent, useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, Dimensions, ImageBackground, Image, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';

import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage, hideMessage } from "react-native-flash-message";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import DietForm from './DietForm';



import axios from 'axios';
import Dialog from './Dialog';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Minicard from './Minicard copy';
import DietDayScreen from './DietDay';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
// import Modal from 'modal-react-native-web';
import Modal from 'react-native-modal';
import { REMINDERS } from 'expo-permissions';


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


    async function fetchData2() {
        try {
            const res = await axios.get('http://192.168.0.105:3031/api-gateway/current-user/schedulenf-user/getschedule', { withCredentials: true })
            // .then(response => {
            console.log("Yahan Hai: ");
            console.log(res.data.schedulenf[1])
            if (res.data.schedulenf != null) {

                setScheduleId(res.data.schedulenf[0].id)
                //console.log(res.data.schedulenf[0])
                axios.get('http://192.168.0.105:3031/api-gateway/current-user/schedulenf/' + res.data.schedulenf[0].id, { withCredentials: true })
                    .then((response) => {
                        //console.log(response)
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
                        //console.log(datt2)
                        if (datt2 != null) {
                            diets = datt2
                            console.log(diets)
                            setDiet(diets)
                        }
                    })
                    .catch(error => {
                        console.log("Inside catch", error)
                    })
            }
            // console.log(response);
            // setExe(response.data.schedulee[0].document[1].day[0].exercise);
        }
        catch (err) {
            console.log("Outside catches", err);
        }
    }

    useEffect(() => {
        
        fetchData2();
    }, []);

        

        
        
        



    async function fetchData(){
        let i,j;


        let times=[];
        let naashta=[];
        let lunch=[];
        let dinner=[];
        
        let tareekh=new Date();
        let x=tareekh.toISOString();
        let ran=x.slice(0,10);
        let obj={};
        let waqt=[];
        
        

        //console.log("Chalraha: ");

        try{
            const res = await axios.get('http://192.168.0.105:3031/api-gateway/current-user/schedulenf-user/getschedule', { withCredentials: true })
            .then(res=>{
                //console.log(res.data.schedulenf[0].document[3].sameDay);
                for(i=0;i<(res.data.schedulenf[0].document.length);i++){
                    if(ran===res.data.schedulenf[0].document[i].sameDay){
                    //console.log('Mila kuch: ');
                //console.log(res.data.schedulenf[0].document[i].sameDay);
                for(j=0;j<(res.data.schedulenf[0].document[i].day.length);j++){

                    //workouts.push(res.data.schedulee[0].document[i].day[j].exercise.exerciseName);
                    waqt.push(res.data.schedulenf[0].document[i].day[j].dayTime);
                    Object.assign(obj,{id:j+1,wo:res.data.schedulenf[0].document[i].day[j].dayTime})
                    //console.log(obj);
                    times.push(obj);
                    obj={};

                    for(let k=0;k<(res.data.schedulenf[0].document[i].day[j].time.length);k++){

                        if(res.data.schedulenf[0].document[i].day[j].dayTime==="Breakfast"){

                            Object.assign(obj,{id:k+1,
                                khana:res.data.schedulenf[0].document[i].day[j].time[k].nutrition.nutritionName,
                                f:res.data.schedulenf[0].document[i].day[j].time[k].nutrition.fats,
                                c:res.data.schedulenf[0].document[i].day[j].time[k].nutrition.carbohydrates,
                                p:res.data.schedulenf[0].document[i].day[j].time[k].nutrition.protein,
                                cal:res.data.schedulenf[0].document[i].day[j].time[k].nutrition.calories})
                    
                            naashta.push(obj);
                            obj={};
                        }
                        else if(res.data.schedulenf[0].document[i].day[j].dayTime==="Lunch"){
                            Object.assign(obj,{id:k+1,
                                khana:res.data.schedulenf[0].document[i].day[j].time[k].nutrition.nutritionName,
                                f:res.data.schedulenf[0].document[i].day[j].time[k].nutrition.fats,
                                c:res.data.schedulenf[0].document[i].day[j].time[k].nutrition.carbohydrates,
                                p:res.data.schedulenf[0].document[i].day[j].time[k].nutrition.protein,
                                cal:res.data.schedulenf[0].document[i].day[j].time[k].nutrition.calories})
                    
                            lunch.push(obj);
                            obj={};
                        
                        }
                        else if(res.data.schedulenf[0].document[i].day[j].dayTime==="Dinner"){
                                Object.assign(obj,{id:k+1,
                                khana:res.data.schedulenf[0].document[i].day[j].time[k].nutrition.nutritionName,
                                f:res.data.schedulenf[0].document[i].day[j].time[k].nutrition.fats,
                                c:res.data.schedulenf[0].document[i].day[j].time[k].nutrition.carbohydrates,
                                p:res.data.schedulenf[0].document[i].day[j].time[k].nutrition.protein,
                                cal:res.data.schedulenf[0].document[i].day[j].time[k].nutrition.calories})
                    
                            dinner.push(obj);
                            obj={};
                        }

                        

                    }
                
                }
            }
                else{
                    console.log("No");
                }

            }
            // console.log("Mila:");
            // let dietLength={ 
            //     bf:naashta.length,
            //     lnh:lunch.length,
            //     dnr:dinner.length
            // }
            // AsyncStorage.setItem('@dietOne',JSON.stringify(dietLength))
            //console.log(naashta.length);
            
             console.log('Subah: ');
             console.log(naashta);
             
             let sum = 0;
             let sum2=0;
             let sum3=0;

             for(let i=0;i<naashta.length;i++){
                 sum+=naashta[i].c;
                 sum+=naashta[i].cal;
                 sum+=naashta[i].f;
                 sum+=naashta[i].p;
             }

             for(let i=0;i<lunch.length;i++){
                sum2+=lunch[i].c;
                sum2+=lunch[i].cal;
                sum2+=lunch[i].f;
                sum2+=lunch[i].p;
            }

            for(let i=0;i<dinner.length;i++){
                sum3+=dinner[i].c;
                sum3+=dinner[i].cal;
                sum3+=dinner[i].f;
                sum3+=dinner[i].p;
            }

             //for(let i = 0; i < naashta[].length; i++)
// for (let i of Object.values(typeof naashta[1].c)) {
//   sum += i;
// }
             console.log('SUm: ');
             console.log(sum);
             let x=sum.toString();
             let y=sum2.toString();
             let z=sum3.toString();
             
            
             AsyncStorage.setItem('nutritions',x);
             AsyncStorage.setItem('nutritions2',y);
             AsyncStorage.setItem('nutritions3',z);
             
             
           // console.log(naashta);
            //console.log(lunch);
            //console.log(dinner);
            //console.log("Nikala: "+waqt);
            
            
            
        })
        }
        catch(error){
            console.log(error)
        }

        let samaan={
            times:times,
            naashta:naashta,
            lunch:lunch,
            dinner:dinner,
        };

        // showMessage({
        //     message: 'Hi User, Tell Us About Your Meal', type: 'info', color: "white", type: 'info', icon: { icon: "auto", position: "left" },
        //     color: "white", backgroundColor: 'black',
        //     onPress: () => {
        //         navigation.navigate( 'Screen1',samaan);
        //        }
        //   })         

          setTimeout(() => {  showMessage({
            message: 'Hi User, Tell Us About Your Meal', type: 'info', color: "white", type: 'info', icon: { icon: "auto", position: "left" },
            color: "white", backgroundColor: 'black',
            onPress: () => {
                navigation.navigate( 'Screen1',samaan);
               }
          })    }, 7000);
        
    
    }

    // function Remind1(){


    //     showMessage({
    //         message: 'Time To Eat Something! ', type: 'info', color: "white", type: 'info', icon: { icon: "auto", position: "left" },
    //         color: "black", backgroundColor: '#F5FAFA'
    //       })

    //     setTimeout(() => {  Remind2() }, 4000);
    // }
    function Remind2(){


        showMessage({
            message: 'Hi User, Tell Us About Your Meal', type: 'info', color: "white", type: 'info', icon: { icon: "auto", position: "left" },
            color: "black", backgroundColor: '#F5FAFA',
            onPress: () => {
                navigation.navigate( 'Screen1',times,naashta);
               }
          })

     //     setTimeout(() => {  Remind2() }, 4000);
    }
    

    
    const deleteItem=(id)=>{


        setDiet(
    
          prevItems=>{return prevItems.filter(item=>item.id!=id);
          });
      }

    function deleteSchedule(d) {
        var dt = d.replace("-", "").replace("-", "");
        axios.delete('http://192.168.0.105:3031/api-gateway/current-user/schedulenf/day/' + scheduleId + '/' + dt, { withCredentials: true })
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
            axios.delete('http://192.168.0.105:3031/api-gateway/current-user/schedulenf/' + scheduleId, { withCredentials: true })
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

        setDiet([]);
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
    // if (diet == null) {

    //     return (
    //         <View>
    //             <Text>No Diet Plan</Text>
    //         </View>
    //     );
    // }
    // else {
        return (
            <View style={styles.centeredView}>


                <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{ flexDirection: 'row', padding: 12, backgroundColor: '#BF243D',marginRight:10, marginTop: 40, width: windowWidth*0.386,alignItems:'center', borderRadius: 20, height: windowHeight*0.057 }}
                    onPress={() => {
                        try {
                            axios.get('http://192.168.0.105:3032/api-gateway/current-user/nutrition-schedule/reschedule/' + scheduleId, { withCredentials: true })
                                .then(res => {
                                    //console.log(res);
                                    //console.log('I am running try')
                                })
                                .catch(error => {
                                    console.log('Reschedule ', error);
                                })
                        }
                        catch (err) {
                            console.log(err);
                        }
                    }} >
                    <MaterialIcons name="schedule" size={20} color="white" />
                    <Text style={{ fontSize: 15, color: 'white', marginLeft: 10 }}>Reschedule</Text>
                </TouchableOpacity>


                {/* <TouchableOpacity style={{ flexDirection: 'row',alignItems: 'center',padding: 9, backgroundColor: '#BF243D', marginLeft: 10, marginTop: 40, width: windowWidth*0.386, borderRadius: 20, height: windowHeight*0.057 }}
                    onPress={() => {
                        setModalVisible(true);
                    }} >
                    <MaterialIcons name={'delete'} style={{ color: 'white' }} size={20} />
                    <Text style={{ fontSize: 15, color: 'white' }}>Delete all</Text>
                </TouchableOpacity> */}

                <TouchableOpacity style={{ flexDirection: 'row', padding: 14, backgroundColor: '#BF243D',marginRight:5, marginTop: 40,alignItems: 'center',width: windowWidth*0.366, borderRadius: 20, height: windowHeight*0.057 }}
                    onPress={() => {
                        setModalVisible(true);
                    }} >
                    <MaterialIcons name={'delete'} style={{ color: 'white' }} size={20} />
                    <Text style={{ fontSize: 15, color: 'white', marginLeft:windowWidth*0.024}}>Delete All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', padding: 18, backgroundColor: '#BF243D', marginLeft: 2, marginTop: 40,alignItems: 'center',width: windowWidth*0.146, borderRadius: 50, height: windowHeight*0.057 }}
                    onPress={() => {
                        fetchData();
                        fetchData2();
                        
                        //Remind1();
                    }} >
                    <MaterialIcons name={'replay'} style={{ color: 'white' }} size={20} />
                    
                </TouchableOpacity>
               

                </View>


                <FlatList
                    data={diet}
                    // keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Minicard>
                            {/* <Image source={{ uri: item.day[0].time[0].nutrition.photos[0] }} style={{ width: 100, height: 80, marginLeft: 7 }} /> */}

                            <View style={{flexDirection:'column'}}>
                            <Text style={{ fontSize: 23,fontWeight:'700', marginLeft: 20, marginTop: 5 }}>Today's Plan</Text>
                            <Text style={{ fontSize: 13,fontWeight:'200', marginLeft: 20, marginTop: 5 }}>{item.sameDay}</Text>
                            </View>
                            

                            <TouchableOpacity onPress={() => navigation.navigate('DietDay', { screen: 'DietDay', params: { item, scheduleId } })}
                                style={{ padding: 5,justifyContent:'center',alignItems:'center', backgroundColor: '#BF243D', marginLeft: 30, marginTop: 8, width: 72, borderRadius: 20, height: 37 }}
                            >
                                <Text style={{ color: 'white' }}>View</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setDeleteDay(item.sameDay);
                                deleteSchedule(item.sameDay);
                                deleteItem(item.id);
                                console.log(item.sameDay);
                                // setModalVisible(true);
                            }}
                                style={{ padding: 5,justifyContent:'center',alignItems:'center', backgroundColor: '#BF243D', marginLeft: 30, marginTop: 8, width: 78, borderRadius: 20, height: 37 }}
                            >
                                <Text style={{ color: 'white' }}>Delete</Text>
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
    // }

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
            <Stack.Screen
                name="Screen1"
                component={Screen1}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Screen2"
                component={Screen2}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name="DietForm"
                component={DietForm}
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