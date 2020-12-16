import React, { PureComponent, useState } from 'react';
import { StyleSheet,Text, View,Dimensions, ImageBackground,Image,TouchableOpacity,ScrollView } from 'react-native';

import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const pic1={uri:'https://realhousemoms.com/wp-content/uploads/Eggs-in-a-Basket-IG.jpg'}
const pic2={uri:'https://thestayathomechef.com/wp-content/uploads/2020/04/Grilled-Chicken-2-scaled.jpg'}
const pic3={uri:'https://media-cdn.tripadvisor.com/media/photo-s/12/4e/29/14/500g-t-bone-steak-with.jpg'}

const Stack = createStackNavigator();

const DinnerScreen = () => {

    const [workouts,setWorkouts]=useState([
        pic1,
        pic2,
        pic3,
        pic1,
        pic2,
        pic3,
    ]);





    return (
        <View style={styles.container}>
           <ScrollView>
            <View style={styles.today}>
                <Text style={styles.h1}>Today's Dinner</Text>
                <ImageBackground source={pic3} style={styles.workoutPic}>
               
                </ImageBackground>
            </View>

            <View>
            <Text style={{marginTop:30,marginLeft:32,fontSize:23,fontWeight:'bold'}}>T-Bone Steak With Chips and Sauce</Text>
                
                <Text style={{marginTop:30,marginLeft:15,fontSize:25}}>{"    "}Fats{"                           "}14g</Text>
                <Text style={{marginTop:30,marginLeft:15,fontSize:25}}>{"    "}Proteins{"                    "}27g</Text>
                <Text style={{marginTop:30,marginLeft:15,fontSize:25}}>{"    "}Calories{"                    "}239g</Text>
                
            </View>
            
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

            </ScrollView>
        </View>

       
    );
}

export const Dinner = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Dinner"
                component={DinnerScreen}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )

}

export default Dinner;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
        paddingTop: Constants.statusBarHeight,
    },
    head:{
        position:'absolute',
        top:34,
        width:windowWidth,
        height:70,
        backgroundColor:'#f2f2f2',
        alignItems:'center',
        flexDirection:'row'
    },
    title:{
        marginTop:7,
        marginLeft:100,
        fontSize:26
    },
    h1:{
        fontSize:33,
        marginRight:90,
        marginTop:50,
        marginLeft:20

    },
    today:{
        marginTop:7
        
    },
    today2:{
        marginTop:8,
        marginRight:42
    },
    
    today3:{
        marginTop:4,
        marginRight:42,
        paddingBottom:20
    },

    workoutPic:{
        width:370,
        height:320,
        marginTop:40,
        marginLeft:10
    },
    Btn:{

        marginTop:140,
        marginLeft:170,
        borderRadius:20,
        width:120,
        backgroundColor:'#BF243D',
        alignItems:'center',
        padding:8,
       },
       upcoming:{
            marginTop:14,
            marginRight:130
       },
       h2:{
           fontSize:30,
           marginRight:-75,
           marginTop:39,
           paddingBottom:3
           
       }
       ,
       h3:{
        fontSize:30,
        marginRight:-75,
        marginTop:59,
       }
});