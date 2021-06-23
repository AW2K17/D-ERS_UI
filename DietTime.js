import React, { PureComponent, useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity,Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import Minicard from './Minicard copy';
import { FontAwesome } from '@expo/vector-icons';
import DietDetail from './DietDetail';
import { AntDesign } from '@expo/vector-icons';

import axios from 'axios';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const Stack = createStackNavigator();


const DietTime = ({ route, navigation }) => {

    const {item} = route.params;
    // const {scheduleId} = route.params;
    const {sameDay} = route.params;
    const {scheduleId} = route.params;
    //const {nutritionName}=item.params.item.nutrition.nutritionName;
    console.log('pic hai andr?');
    //console.log(route.params);
    const dayTime = item.dayTime;
    console.log('pic times:');
    console.log(item.time[0].nutrition.photos[0]);
  
    
    let image;
   //console.log(item.params.item.nutrition.photos[0]);
//    if(dayTime==='Breakfast'){
//    image={ uri: item.time[0].nutrition.photos[0] }
//    }
//    else if(dayTime==='Lunch'){
//      image={ uri: item.time[1].nutrition.photos[0] }
//    }
    //const image = { uri: route.params.item.nutrition.photos[0] };
    // console.log(navigation);
    // const random = route.params;

    return (
        <View style={styles.container}>
            <ScrollView>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10,paddingTop:5,marginTop: 30, width:160, height: 55, backgroundColor: '#BF243D', borderRadius: 20 }}>
            <Text style={{ color: 'white', fontSize: 19,textAlign:'center', marginTop: 5 }}><AntDesign name="arrowleft" size={24} color="white" /> Go Back</Text>
                 </TouchableOpacity>
                <FlatList
                    data={item.time}
                    //             keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('DietDetail', {screen: 'DietDetail', params: {item, dayTime, sameDay, scheduleId}})} >
                        <Minicard >
                             <Image source={ {uri: item.nutrition.photos[0] }} style={{ width: 100, height: 90, marginLeft: 12,borderRadius:15 }} />  

                            {/* <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 5 }}>{item.dayTime}</Text> */}
                            <Text style={{ fontSize: 25, marginLeft: 30, marginTop: 5 }}>{item.nutrition.nutritionName}</Text>

                            {/* <TouchableOpacity onPress={() => navigation.navigate('DietDetail', {screen: 'DietDetail', params: {item, dayTime, sameDay, scheduleId}})}
                                style={{ padding: 5, backgroundColor: '#BF243D', marginLeft: 30, width: 68, borderRadius: 20, height: 37,justifyContent:'center',alignItems: 'center'}}
                            >
                                <Text style={{ color: 'white'}}>View</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                try{
                                    axios.delete('http://192.168.0.102:3031/api-gateway/current-user/schedulenf/object/' + scheduleId + '/' + item.sameNutrition + '/' + sameDay.replace("-", "").replace("-", "") + '/' + dayTime, { withCredentials: true })
                                    .then(res => {
                                        console.log(res);
                                    })
                                    .catch(err => {
                                        console.log("Error: ",err);
                                    });
                                }
                                catch(error) {
                                    console.log(error);
                                }
                            }}
                                style={{ padding: 5, backgroundColor: '#BF243D', marginLeft: 20, width: 75, borderRadius: 20, height: 37,justifyContent:'center',alignItems:'center' }}
                            >
                                <Text style={{ color: 'white' }}>Delete</Text>
                            </TouchableOpacity> */}
                        </Minicard>
                        </TouchableOpacity>
                    )}
                />
                {/* <Text>{item.item.sameDay}</Text> */}
                
            </ScrollView>
        </View>
    );

}



export const DietTimeScreen = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="DietTime">
            <Stack.Screen
                name="DietTime"
                component={DietTime}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DietDetail"
                component={DietDetail}
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

export default DietTimeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2F2F2',
        paddingTop: Constants.statusBarHeight,
    },
})