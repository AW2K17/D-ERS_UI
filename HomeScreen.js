import React, { PureComponent, useState } from 'react';
import { StyleSheet,Text, View,TouchableOpacity,Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
         
             <TouchableOpacity style={styles.option}>
            <Text style={styles.choice}>Capture Physique</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option2}>
            <Text style={styles.choice}>Answer Questions</Text>
        </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
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
      marginLeft:120,
      fontSize:26
  },
    option:
  {
    width:283,
    backgroundColor:'black',
    borderRadius:19,
    padding:13,
    marginTop:20,
    alignItems: 'center',
    
  },
  option2:
  {
    width:290,
    backgroundColor:'black',
    borderRadius:19,
    padding:13,
    marginTop:40,
    alignItems: 'center',
    
  },
  choice:{

    color:'white',
    fontSize:14,
  }
});