import React, { PureComponent, useState } from 'react';
import { StyleSheet,Text, View,Dimensions,TouchableOpacity,TextInput,Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

const pic1={uri:'https://www.dymatize.com/wp-content/uploads/2017/08/brandan-fokkens-best-chest-workout-header-v2-DYMATIZE-830x467.jpg'}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const MealsScreen = () => {


    const [checked, setChecked] = React.useState('first');


     
return(

    <View style={styles.container}>
    
        <View style={{flexDirection:'row'}}>
        <TextInput style={{backgroundColor:'silver',width:230,height:20,borderRadius:20}} placeholder={'Search Diet'}/>
        <MaterialIcons name="send" size={24} color="black" style={{marginLeft:4}} />
        </View>
        
        
        
        <View style={{marginTop:10,flexDirection:'row'}}>
    
        
        <View style={{flexDirection:'row',marginLeft:7}}>
        <Text>Bicep</Text>
        <MaterialIcons name="radio-button-checked" size={24} color="black"  />
        </View>
    
        <View  style={{marginLeft:7,flexDirection:'row'}}>
        <Text>Tricep</Text>
        <MaterialIcons name="radio-button-checked" size={24} color="black"  />
      
        </View>
    
        <View  style={{marginLeft:7,flexDirection:'row'}}>
        <Text>Lats</Text>
        <MaterialIcons name="radio-button-checked" size={24} color="black" />
        
        </View>
    
        <View  style={{marginLeft:7,flexDirection:'row'}}>
        <Text>Chest</Text>
        <MaterialIcons name="radio-button-checked" size={24} color="black"  />
        
        </View>
        </View>
        
        
        <View
            style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            width: '100%',
            marginTop:10,
            marginLeft:40
            }}
        />
    
                <View >            
                <ScrollView>
                
                <View style={{flexDirection: 'row',marginTop:30,marginRight:210,backgrounColor:'white'}}>
                    <Image source={pic1} style={{width:100,height:90,marginLeft:62}} />
                    <Text style={{marginLeft:14,fontSize:15}}>Chest Workout</Text>
                    
                    <TouchableOpacity>
                            <View style={{backgroundColor:'#8c1503',color:'white',width:50,height:30,borderRadius:13,marginLeft:'250%'}}>
                            <Text style={{color:'white',margin:6,paddingBottom:2,paddingLeft:3}}>Add</Text>
                            </View>
                        </TouchableOpacity>
                   
                </View>
                <View
            style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            width: '100%',
            marginTop:10,
            marginLeft:40
            }}
        />
    
                <View style={{flexDirection: 'row',marginTop:30,marginRight:210,color:'lightGrey'}}>
                    <Image source={pic1} style={{width:100,height:90,marginLeft:62}} />
                    <Text style={{marginLeft:14,fontSize:15}}>Chest Workout</Text>
                    
                    <TouchableOpacity>
                            <View style={{backgroundColor:'#8c1503',color:'white',width:50,height:30,borderRadius:13,marginLeft:'250%'}}>
                            <Text style={{color:'white',margin:6,paddingBottom:2,paddingLeft:3}}>Add</Text>
                            </View>
                        </TouchableOpacity>
                   
                </View>
                <View
            style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            width: '100%',
            marginTop:10,
            marginLeft:40
            }}
        />
    
                <View style={{flexDirection: 'row',marginTop:30,marginRight:210,color:'lightGrey'}}>
                    <Image source={pic1} style={{width:100,height:90,marginLeft:62}} />
                    <Text style={{marginLeft:14,fontSize:15}}>Chest Workout</Text>
                    
                    <TouchableOpacity>
                            <View style={{backgroundColor:'#8c1503',color:'white',width:50,height:30,borderRadius:13,marginLeft:'250%'}}>
                            <Text style={{color:'white',margin:6,paddingBottom:2,paddingLeft:3}}>Add</Text>
                            </View>
                        </TouchableOpacity>
                   
                </View>
                <View
            style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            width: '100%',
            marginTop:10,
            marginLeft:40
            }}
        />
    
                <View style={{flexDirection: 'row',marginTop:30,marginRight:210,color:'lightGrey'}}>
                    <Image source={pic1} style={{width:100,height:90,marginLeft:62}} />
                    <Text style={{marginLeft:14,fontSize:15}}>Chest Workout</Text>
                    
                    <TouchableOpacity>
                            <View style={{backgroundColor:'#8c1503',color:'white',width:50,height:30,borderRadius:13,marginLeft:'250%'}}>
                            <Text style={{color:'white',margin:6,paddingBottom:2,paddingLeft:3}}>Add</Text>
                            </View>
                        </TouchableOpacity>
                   
                </View>
                <View
            style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            width: '100%',
            marginTop:10,
            marginLeft:40
            }}
        />
                
               
                </ScrollView>
                </View>
    
            
    
    
         
    
    </View>
    
    
    
    )
    
    
    
 }
  

export default MealsScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: Constants.statusBarHeight,
      
    }})

