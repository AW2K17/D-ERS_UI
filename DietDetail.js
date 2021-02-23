import React, { PureComponent, useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Dimensions, ImageBackground, TextInput } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DietDetail = ({ route, navigation }) => {

    
    const {dayTime} = route.params;
    const item = route.params;
    const {sameDay} = route.params;
    console.log(item)
    const image = { uri: item.params.item.nutrition.photos[0] };
    const [scheduleId, setScheduleId] = useState();

    const [calories, setCalories] = useState(item.params.item.nutrition.calories);
    const [carbohydrates, setCarbohydrates] = useState(item.params.item.nutrition.carbohydrates);
    const [fats, setFats] = useState(item.params.item.nutrition.fats);
    const [proteins, setProteins] = useState(item.params.item.nutrition.protein);


    const diet = {
        nutritionName: item.params.item.nutrition.nutritionName,
        nutritionCategory: item.params.item.nutrition.nutritionCategory,
        fats: fats,
        carbohydrates: carbohydrates,
        protein: proteins,
        calories: calories,
        discription: item.params.item.nutrition.description,
        photos: item.params.item.nutrition.photos[0]
    
      }
      const time = [{
        sameNutrition: item.params.item.sameNutrition,
        nutrition: diet
      }]
      const day = [{
        dayTime: dayTime,
        time: time,
    
    
    
      }]
      const document = [{
        sameDay: sameDay,
        day: day
    
      }];


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.today}>
                    <Text style={styles.h1}>Today's {dayTime}</Text>
                    <ImageBackground source={image} style={styles.workoutPic}>

                    </ImageBackground>
                </View>

                <View>
                    <Text>Calories: </Text>
                    <TextInput style={{ padding: 10, marginTop: 30, marginLeft: 23, fontSize: 25, fontWeight: 'bold' }} value={calories.toString()} onChangeText={(text) => setCalories(text)}/>
                    <Text>Carbohydrates: </Text>
                    <TextInput style={{ padding: 10, marginTop: 30, marginLeft: 23, fontSize: 25, fontWeight: 'bold' }} value={carbohydrates.toString()} onChangeText={(text) => setCarbohydrates(text)}/>
                    <Text>Fats: </Text>
                    <TextInput style={{ padding: 10, marginTop: 30, marginLeft: 23, fontSize: 25, fontWeight: 'bold' }} value={fats.toString()} onChangeText={(text) => setFats(text)}/>
                    <Text>Proteins: </Text>
                    <TextInput style={{ padding: 10, marginTop: 30, marginLeft: 23, fontSize: 25, fontWeight: 'bold' }} value={proteins.toString()} onChangeText={(text) => setProteins(text)}/>
                    {/* 
                    <Text style={{ marginTop: 30, marginLeft: 15, fontSize: 25 }}>{"    "}Fats{"                           "}11g</Text>
                    <Text style={{ marginTop: 30, marginLeft: 15, fontSize: 25 }}>{"    "}Proteins{"                    "}13g</Text>
                    <Text style={{ marginTop: 30, marginLeft: 15, fontSize: 25 }}>{"    "}Calories{"                    "}100g</Text> */}

                </View>

                <TouchableOpacity onPress={async () => {

                    try{
                        const res = await axios.get('http://192.168.1.101:3031/api-gateway/current-user/schedulenf-user/getschedule', { withCredentials: true })
                        // .then(response => {
                        console.log(res);

                        if (res.data.schedulenf[0].id) {
                            setScheduleId(res.data.schedulenf[0].id)

                            axios.put('http://192.168.1.101:3031/api-gateway/current-user/schedulenf/object/' + res.data.schedulenf[0].id + '/' + nutrition.param.sameNutrition, { document: document }, { withCredentials: true })
                                .then(response => {
                                    // navigation.navigate('Search');
                                    console.log(response);
                                }).catch(error => {
                                    console.log(error);
                                })
                        }
                    }
                    catch(err) {
                        console.log(err);
                    }
                }} style={{ marginLeft: 10, marginTop: 30, width: 270, height: 40, backgroundColor: '#BF243D', borderRadius: 30 }}>
                    <Text style={{ color: 'white', fontSize: 19, marginLeft: 70, marginTop: 5 }}>UPDATE</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10, marginTop: 30, width: 270, height: 40, backgroundColor: '#BF243D', borderRadius: 30 }}>
                    <Text style={{ color: 'white', fontSize: 19, marginLeft: 70, marginTop: 5 }}>GO BACK</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default DietDetail;

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