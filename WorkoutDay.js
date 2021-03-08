import React, { PureComponent, useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import Minicard from './Minicard copy';
import DietDetail from './DietDetail';
import WorkoutDetail from './WorkoutDetail';
import axios from 'axios';

const Stack = createStackNavigator();



// const deleteItem=(id)=>{


//         setShow(
//           prevItems=>{return prevItems.filter(item=>item.id!=id);
//           }
//           )
//       }


const WorkoutDay = ({ route, navigation }) => {

    // const [date, setDate] = useState('');
    const {item} = route.params;
    const {scheduleId} = route.params;
    const {sameDay} = item;

    console.log(route.params);
    // console.log(item.item.sameDay);
    // setDate(item.item.sameDay)
    // const random = route.params;

    // const [show,setShow]=useState();

    // setShow(item.day);

    //console.log("Check: "+item.day);

    return (
        <View style={styles.container}>
            <ScrollView>
            
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10, marginTop: 30, width: 90, height: 40, backgroundColor: '#BF243D', borderRadius: 30 }}>
                    <Text style={{ color: 'white', fontSize: 19,textAlign:'center', marginTop: 5 }}>Back</Text>
                </TouchableOpacity>
                <FlatList
                    data={item.day}
                    //             keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Minicard style={{flex: 1}}>
                            {/* <Image source={{ uri: item.day[0].time[0].nutrition.photos[0] }} style={{ width: 100, height: 80, marginLeft: 7 }} /> */}

                            {/* <Text style={{ marginLeft: 20 }}>Date : {item.sameDay}</Text> */}
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 5 }}>{item.exercise.exerciseName}</Text>

                            <TouchableOpacity onPress={() => navigation.navigate('WorkoutDetail', {screen: 'WorkoutDetail', param: {item, sameDay}})}
                                style={{ padding: 5, backgroundColor: '#BF243D', marginLeft: 30, width: 68, borderRadius: 20, height: 30 }}
                            >
                                <Text style={{ color: 'white', marginLeft: 10 }}>View</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                try{
                                    axios.delete('http://192.168.43.126:3021/api-gateway/current-user/schedulee/object/' + scheduleId + '/' + item.sameExercise + '/' + sameDay.replace("-", "").replace("-", ""))
                                    .then(res => {
                                        console.log(res);
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })
                                }
                                catch(error){
                                    console.log(error)
                                }

                                //deleteItem(item.id);
                            }}
                                style={{ padding: 5, backgroundColor: '#BF243D', marginLeft: 30, width: 75, borderRadius: 20, height: 30 }}
                            >
                                <Text style={{ color: 'white', marginLeft: 10 }}>Delete</Text>
                            </TouchableOpacity>
                        </Minicard>
                    )}
                />
                {/* <Text>{item.item.sameDay}</Text> */}
                
            </ScrollView>
        </View>
    );

}



export const WorkoutDayScreen = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="WorkoutDay">
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

export default WorkoutDayScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7F2F2',
        paddingTop: Constants.statusBarHeight,
    },
})