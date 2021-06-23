
import React,{useState,useEffect} from 'react';
import { View, StyleSheet,Text } from 'react-native';
import {
   
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { HomeScreen } from './HomeScreen';
import { WorkoutScreen } from './WorkoutScreen';
import { DietScreen } from './DietScreen';
import {PhotosScreen} from './PhotosScreen';
import { ProgressScreen } from './ProgressScreen';
import Input from './Input';
import { WorkoutsScreen } from './WorkoutsScreen';
import { MealsScreen } from './MealsScreen';
import { HistoryTrack } from './HistoryTrack';
import { LogoutScreen } from './LogoutScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

let fn;
let eml;



async function lelo(){


       let x= await AsyncStorage.getItem('@fn');
       let y = await AsyncStorage.getItem('@eml');

        fn=JSON.parse(x);
        console.log("fucking");
        console.log(fn);
        eml=JSON.parse(y);
        console.log(eml);
       
}






 function DrawerContent(props) {




useEffect( () => {
    lelo();
}, []);

   
     

  

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://www.w3schools.com/w3images/avatar2.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Welcome User</Title>
                                <Caption style={styles.caption}>{eml}</Caption>
                            </View>
                        </View>

                       
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Entypo name="home" size={24} color={color} />
                            )}
                            label="Home"
                             onPress={() => {props.navigation.navigate('Home')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialIcons name="question-answer" size={24} color={color} />
                            )}
                            label="Input"
                            onPress={() => {props.navigation.navigate('Input')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                               <FontAwesome5 name="dumbbell" size={20} color={color} />
                            )}
                            label="Workouts"
                            onPress={() => {props.navigation.navigate('Workouts')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                               <FontAwesome5 name="history" size={22} color={color} />
                            )}
                            label="HistoryTrack"
                            onPress={() => {props.navigation.navigate('HistoryTrack')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialIcons name="photo" size={size} color={color} />
                            )}
                            label="PhotosScreen"
                            onPress={() => {props.navigation.navigate('PhotosScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                               <MaterialIcons name="logout" size={size} color={color} />
                            )}
                            label="Log Out"
                            onPress={() => {props.navigation.navigate('Log Out')}}
                        />
                       
                    </Drawer.Section>
                   
                </View>
            </DrawerContentScrollView>
         
        </View>
    );
}

export default DrawerContent;

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
