import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Dimensions,Button } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function DietHistory() {

  const [b,setB]=useState('');
  const [l,setL]=useState('');
  const [d,setD]=useState('');
  const [p,setP]=useState(0);
  const [p2,setP2]=useState(0);
  const [p3,setP3]=useState(0);
  
  
  
  
  
  
  let ran;
  let ran2;
  let ran3;
  
  let xx={};

  const loadIt=async ()=>{
    
  
    try {
      const response = await axios.get('http://192.168.0.105:3033/api-gateway/current-user/diet-track/userId');
      console.log(response.data);
      console.log('EEXI');
     
    } catch (error) {
      console.error("bhand"+error);
    }
  
  
    
    
    let bb= await AsyncStorage.getItem("@bfOne");
    let llh= await AsyncStorage.getItem("@lhOne");
    let dnnr= await AsyncStorage.getItem("@drOne");
    //let sumObj=await AsyncStorage.getItem("@sumJama");
    let x=await AsyncStorage.getItem('nutritions');
    let y=await AsyncStorage.getItem('nutritions2');
    let z=await AsyncStorage.getItem('nutritions3');
    
    
    console.log('dxx');
    console.log(typeof JSON.parse(x));
    
    setB(bb);
    setL(llh);
    setD(dnnr);
    //let check=JSON.parse(bb);
    console.log('Saiis: ');

    //setB(JSON.parse(bb));
    ran=Number(x);
    ran2=Number(y);
    ran3=Number(z);
    
    //ran=x;
    
    // console.log('typehai');
    // console.log(JSON.parse(sumObj).S);
    

    // if(JSON.parse(sumObj).T==='Breakfast')
    // {
    //   setP(JSON.parse(sumObj).S);
    //   console.log('typeki');
    //   console.log(JSON.parse(sumObj).T);
    // }

    // else if(JSON.parse(sumObj).T==='Lunch'){
    //   setP2(JSON.parse(sumObj).S);
    // }
    
    // else if(JSON.parse(sumObj).T==='Dinner'){
    //   setP3(JSON.parse(sumObj).S);
    // }
    setP(ran);
    setP2(ran2);
    setP3(ran3);
    //console.log(ran);
    
    
    //obj.datasets[0].data.push(34);
    
    
    
   
    
   
    

    
  }

  
  useEffect(() => {
 
   loadIt();
  },[]);






  return (
    <View style={styles.container}>
      <Text style={{fontSize:28,fontWeight:'bold',marginTop:100,marginLeft:6}}>Nutritions Consumed Recently</Text>
     <View style={{flexDirection:'row',position:'absolute',top:70}} >
     
        <View style={styles.tag1}>
        <Text style={styles.paragraph2}>
        <MaterialIcons name="free-breakfast" size={54} color="black" />
      </Text>
      <Text style={{marginTop:16,marginLeft:16,fontSize:17,fontWeight:'bold'}}>{b} Items In Breakfast</Text>
        </View>
        <View style={styles.tag2}>
        <Text style={styles.paragraph}>
        <MaterialIcons name="lunch-dining" size={54} color="black" />
      </Text>
      <Text style={{marginLeft:16,fontSize:17,fontWeight:'bold'}}>{l} Items In Lunch</Text>
        </View>
        <View style={styles.tag3}>
        <Text style={styles.paragraph}>
        <MaterialIcons name="dinner-dining" size={54} color="black" />
      </Text>
      <Text style={{marginLeft:16,fontSize:17,fontWeight:'bold'}}>{d} Items In Dinner</Text>
        </View>
        </View>
        <View style={{marginTop:40}}>
        <LineChart
    data={{
      labels: ['Breakfast','Lunch','Dinner'],
      datasets: [{
        data: [p,p2,p3]}]
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
    margin: 20,
    
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  tag1:{
      width:118,
      height:170,
      borderRadius:20,
      backgroundColor:'white',
      position: 'absolute',
      top:0,
      left:14
      

  },
  paragraph2:{
    marginTop:32,textAlign:'center'
  }
  ,tag2:{
    width:120,
    height:170,
    borderRadius:20,
    backgroundColor:'white',
    position: 'absolute',
    padding:10,
    left:140,
    
    

},
tag3:{
  width:120,
  height:170,
  borderRadius:20,
  backgroundColor:'white',
  position: 'absolute',
  padding:10,
  left:270,
  
  

}
});
