import React,{useState} from 'react';
import { StyleSheet, Button, Text,View ,TextInput,Platform,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';


const Questions4 = () => {

    
  return (
    
   
    <View style={styles.container}>
        <Text style={styles.Qus}>Rate Your Physical Activity Level From 1 To 5</Text>
        <TouchableOpacity>
        <View style={styles.option}>
            <Text style={styles.choice}>1: No Activity At All</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.option2}>
            <Text style={styles.choice}>2: Once In A While</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.option3}>
            <Text style={styles.choice}>3: Prefer Moderate</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.option3}>
            <Text style={styles.choice}>4: Occurs Within One Or Two Day Gap </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.option3}>
            <Text style={styles.choice}>5: Everyday There Is One  </Text>
        </View>
        </TouchableOpacity>

     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    
  },

Qus:{

    marginTop:100,
    fontSize:32,
    margin:30
},



  option:
  {
    width:290,
    backgroundColor:'black',
    borderRadius:19,
    padding:12,
    marginTop:30,
    alignItems: 'center',
    
  },
  option2:
  {
    width:290,
    backgroundColor:'black',
    borderRadius:19,
    padding:12,
    marginTop:60,
    alignItems: 'center',
    
  },
  
  option3:
  {
    width:290,
    backgroundColor:'black',
    borderRadius:19,
    padding:12,
    marginTop:60,
    alignItems: 'center',
    
  },

  
  choice:{

    color:'white',
    fontSize:14,
  }

  
 
});

export default Questions4;
