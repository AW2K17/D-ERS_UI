import React from 'react';
import { StyleSheet,Button, Text,View ,TextInput,Platform,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';


const Questions = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.Qus}>Fitness Transformation You Intend To Achieve </Text>

        <TouchableOpacity>
        <View style={styles.option}>
            <Text style={styles.choice}>Lose Weight</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.option2}>
            <Text style={styles.choice}>Gain Weight</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.option3}>
            <Text style={styles.choice}>Maintain Current Physique</Text>
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
    marginTop:120,
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

export default Questions;
