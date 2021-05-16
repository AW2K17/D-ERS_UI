import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import DietHistory from './DietHistory';
import ExerciseHistory from './ExerciseHistory';



export default function History({navigation}) {
  return (
    <View style={styles.container}>
       <View style={styles.options} >
      <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate('DietHistory')}>
        <Text style={styles.font}>Nutrition Progresss</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2}
      onPress={()=>navigation.navigate('ExerciseHistory')}> 
        <Text style={styles.font}>Exercise Progress</Text>
      </TouchableOpacity>
  </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  options:{
    
    marginBottom:140,
    alignItems:'center',
    justifyContent:'center'
  },
  button1:{
    backgroundColor:'#8C2020',
    padding:15,
    paddingLeft:44,
    paddingRight:44,
    borderRadius:30,
    marginBottom:50
   
  },
  button2:{
    marginTop:5,
    backgroundColor:'#8C2020',
    padding:15,
    paddingLeft:54,
    paddingRight:54,
    borderRadius:30
   
  },
  font:{
    color:'white',
    fontSize:20
  }
});
