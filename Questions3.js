import React from 'react';
import { StyleSheet, Button, Text,View ,TextInput,Platform,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';


const Questions3 = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.Qus}>Are You Currently Suffering From Diabetes </Text>

        <TouchableOpacity>
        <View style={styles.option}>
            <Text style={styles.choice}>No, I Am Not</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.option2}>
            <Text style={styles.choice}>Yes, I Am Suffering From Diabetes</Text>
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

  
  choice:{

    color:'white',
    fontSize:14,
  }

  
 
});

export default Questions3;
