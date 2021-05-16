import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
  } from 'react-native-chart-kit';

  let num;
  let rand=['25th March','26th April','29th April','30th April'];
  let rand2=[];
  

  

export default function ExerciseHistory() {


     const [d,setD]=useState('');
     const [r,setR]=useState('');
     const [avg,setAvg]=useState(0);
    const [ex,setEx]=useState('');
    const [wn,setWzn]=useState('');
 
    

    const loadIt= async ()=>{
  
      const x= await AsyncStorage.getItem('@keyOne');
      const R=await AsyncStorage.getItem('@runOne');
      let ran=await AsyncStorage.getItem('@wtg');
      let naam=await AsyncStorage.getItem('@exName');
      let rps=await AsyncStorage.getItem('@repsTotal');
      let wzn=await AsyncStorage.getItem('@waznTotal');
      
      
      console.log('kuch');
      console.log(wzn);
      
      
      let repsTotal=JSON.parse(rps);

      console.log(repsTotal);
      setD(JSON.parse(x));
      setR(JSON.parse(R));
      setAvg(Number(JSON.parse(rps))/d);
      setWzn(Number(JSON.parse(wzn))/d);
      
      
      setEx(JSON.parse(naam));
      
      
     }
  
   

    
    // useEffect(() => {
      
    //   loadIt()
    // }, []);

    loadIt();
  return (
    <View style={styles.container}>

    <View style={{flexDirection:'row',position:'absolute',top:110}} >
        <View style={styles.tag1}>
        <Text style={styles.paragraph}>
        <MaterialCommunityIcons name="weight-lifter" size={64}  color="black" />
      </Text>
      <Text style={{marginTop:1,marginLeft:23,fontSize:17,fontWeight:'bold'}}>Avg. Weight Lifted {wn} Kg</Text>
        </View>
        <View style={styles.tag2}>
        <Text style={styles.paragraph}>
        <FontAwesome5 name="running" size={54} color="black" />
      </Text>
      <Text style={{marginLeft:16,fontSize:17,fontWeight:'bold'}}>Running {r}km</Text>
        </View>
        </View>
        
        <Text style={{fontSize:22,fontWeight:'bold',marginLeft:12,marginBottom:20,marginTop:112}}>Exercises Done In Last Few Days</Text>
        <LineChart
    data={{
      labels:rand,
      datasets: [{
        data: [4,3,0,d]}]
    }}
    width={Dimensions.get('window').width} 
    height={200}
    chartConfig={{
      backgroundColor: 'black',
      backgroundGradientFrom: 'white',
      backgroundGradientTo: 'white',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity =0.6) => `rgba(61, 59, 59, ${opacity})`,
     
    }}
    bezier
  
  />
     <View style={styles.tag3}>
        <Text style={styles.paragraph}>
        <FontAwesome5 name="dumbbell" size={54} color="black" />
      </Text>
      <Text style={{marginLeft:16,fontSize:17,fontWeight:'bold'}}>{avg} Avg. Reps Performed</Text>
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
    fontSize: 58,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tag1:{
      width:170,
      height:180,
      borderRadius:20,
      backgroundColor:'white',
      position: 'absolute',
      top:0,
      left:22
      

  }
  ,tag2:{
    width:170,
    height:180,
    borderRadius:20,
    backgroundColor:'white',
    position: 'absolute',
    padding:10,
    left:210,
    
    

},
tag3:{
  width:170,
  height:180,
  borderRadius:20,
  backgroundColor:'white',
  position: 'absolute',
  top:620,
  left:32
  

}
});
