import React, { PureComponent, useState } from 'react';
import { StyleSheet,Text, View,Dimensions, ImageBackground,Image,TouchableOpacity,ScrollView } from 'react-native';

import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const pic1={uri:'https://www.dymatize.com/wp-content/uploads/2017/08/brandan-fokkens-best-chest-workout-header-v2-DYMATIZE-830x467.jpg'}

const pic3={uri:'https://www.muscleandfitness.com/wp-content/uploads/2019/01/Bearded-Young-Man-Doing-Bicep-Workout-With-Preacher-Curls-Exercise.jpg?w=1109&quality=86&strip=all'}

const Lunch = () => {

    const [workouts,setWorkouts]=useState([
       
    ]);





    return (
        <View style={styles.container}>
           <ScrollView>
            <View style={styles.today}>
                <Text style={styles.h1}>Today's Workout</Text>
                <ImageBackground source={pic1} style={styles.workoutPic}>
               
                </ImageBackground>
            </View>

            <View>
            <Text style={{marginTop:30,marginLeft:62,fontSize:25,fontWeight:'bold'}}>Bicep Workout</Text>
                
                <Text style={{marginTop:30,marginLeft:1,fontSize:21}}>{"   "}Barbell Curls{"      "}6 Sets 4-20 Reps</Text>
                <Text style={{marginTop:30,marginLeft:1,fontSize:21}}>{"   "}Dumbbell Curls{"     "}6 Sets 10 Reps</Text>
                
                
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

export default Lunch;

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
        marginRight:100,
        marginTop:50

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
        borderRadius:30
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