import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Dimensions,Button,FlatList } from 'react-native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  LineChart
} from "react-native-chart-kit";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let mila;



const Item = ({khana,cal,carb,fat,pro }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{khana}</Text>
    <Text style={styles.title3}>{cal} Calories</Text>
    <Text style={styles.title3}>{carb} Carbs</Text>
    <Text style={styles.title3}>{fat} Fats</Text>
    <Text style={styles.title3}>{pro} Proteins</Text>
    
    
    
  </View>
);

export default function DietHistory() {



  const renderItem = ({ item }) => (
    <Item khana={item.khana} cal={item.cal} carb={item.carb} fat={item.fat} pro={item.pro} />
  );


  const [b,setB]=useState('');
  const [l,setL]=useState('');
  const [d,setD]=useState('');
  const [p,setP]=useState(0);
  const [p2,setP2]=useState(0);
  const [p3,setP3]=useState(0);
  const [content,setContent]=useState([]);
  const [sumF,setSumF]=useState(0);
  const [sumCal,setSumCal]=useState(0);
  const [sumCarb,setSumCarb]=useState(0);
  const [sumPro,setSumPro]=useState(0);
  const [sum,setSum]=useState(0);

  let sumA=0;
  let sumB=0;
  let sumC=0;
  let sumD=0;
  
  
  
  
  




  
  
  
  
  
  
  let ran;
  let ran2;
  let ran3;
  
  let xx={};

  const loadIt=async ()=>{
    
  
    // try {
    //   const response = await axios.get('http://192.168.0.102:3033/api-gateway/current-user/diet-track/userId');
    //   console.log('yeh history:');
    //   console.log(response.data);
      
     
    // } catch (error) {
    //   console.error("bhand"+error);
    // }
  
    let hty2=await AsyncStorage.getItem('@nfHistory');


    console.log('data milgaya!2:');
    console.log(hty2);
    
     mila=JSON.parse(hty2);
     console.log('hell yeah');
    console.log(mila);
    setContent(mila);




    for (let i=0;i<mila.length;i++){

      sumA+=Number(mila[i].fat);
      sumB+=Number(mila[i].pro);
      sumC+=Number(mila[i].cal);
      sumD+=Number(mila[i].carb);
      

    }

    setSumF(sumA);
    setSumPro(sumB);
    setSumCarb(sumC);
    setSumCal(sumD);
    
    console.log('fat ka sum:');
    console.log(sumA);
    console.log('pro ka sum:');
    console.log(sumB);
    console.log('cal ka sum:');
    console.log(sumC);
    console.log('carb ka sum:');
    console.log(sumD);

    setSum(sumA+sumB+sumC+sumD);
    
    
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
    

    setP(ran);
    setP2(ran2);
    setP3(ran3);
    //console.log(ran);
    
    
    //obj.datasets[0].data.push(34);


    axios.get('http://192.168.0.102:3033/api-gateway/dietTrack/expectedWeight')
  .then(function (response) {
    console.log('ex vs real:');
    console.log(response.data);
  })
  .catch(function (error) {
    console.log('bugs:');
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    
    
    
   
    
   
    

    
  }

  
  useEffect(() => {
 
   loadIt();
  },[]);






  return (
    <View style={styles.container}>
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
        <View style={{marginTop:360}}>
        <LineChart
    data={{
      labels: ['Fat','Protein','Carbs','Calories'],
      datasets: [{
        data: [sumF,sumPro,sumCal,sumCarb]}]
    }}
    width={Dimensions.get('window').width} 
    height={200}
    chartConfig={{
      backgroundColor: 'black',
      backgroundGradientFrom: 'white',
      backgroundGradientTo: 'white',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity =0.3) => `rgba(61, 59, 59, ${opacity})`,
     
    }}
    bezier
  
  />
  </View>
  <Text style={{fontSize:28,fontWeight:'bold',position:'absolute',top:300,left:20}}>Nutrition Progress</Text>
  <View style={{position:'absolute',top:380,width:wp('100%'),backgroundColor:'white',paddingBottom:34,paddingTop:8}}>
  <Text style={{fontSize:32,fontWeight:'bold',marginLeft:23}}>{sum} gm</Text>
  <Text style={{marginLeft:23,fontSize:15}}>Overall Nutrition Consumed</Text>
  </View>
  
    {/* <View style={{flexDirection:'row'}}>
      <View>
          <Text>Expected Weight</Text>
      </View>
      <View>
          <Text>Current Weight</Text>
      </View>
    </View> */}
  {/* <View style={{marginTop:380}}>
  <FlatList
        data={content}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View> */}
    
     
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
  
  

},
item: {
  backgroundColor: 'white',
  padding: 40,
  marginVertical: 8,
  marginHorizontal: 16,
  flex:1,
  borderRadius:13
},
title: {
  fontSize: 18,
  fontWeight:'bold'
},
title2: {
  fontSize: 15,
},
title3: {
  fontSize: 15,
}
});
