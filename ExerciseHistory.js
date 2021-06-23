import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Dimensions,FlatList,ScrollView,TouchableOpacity,Image,TextInput,Button } from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
  } from 'react-native-chart-kit';

  let num;

  
  let mila;
  
  const Item = ({ exerciseName,reps,wtg }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{exerciseName}</Text>
      <Text style={styles.title2}>{reps} Reps Done</Text>
      <Text style={styles.title3}>{wtg} Kg Lifted</Text>
      
    </View>
  );


  let a=[];
  let b=[];
  let wazan;
  let dumbbell;




  

export default function ExerciseHistory() {


  const renderItem = ({ item }) => (
    <Item exerciseName={item.exerciseName} reps={item.reps} wtg={item.wtg} />
  );


  const [search,setSearch]=useState('');
    const [dxx,setDXX]=useState('');
     const [r,setR]=useState('');
     const [avg,setAvg]=useState(0);
     const [xx,setX]=useState([0,0,0,0]);
  const [yy,setY]=useState([0,0,0,0]);
   
    const [content,setContent]=useState([]);
   
 


    

  function sendRequest(){


    

    axios.get('http://192.168.0.102:3023/api-gateway/current-user/exercise-track/'+search.replace(' ','-'))
  .then(function (response) {
    console.log('Yeh mila wahan se!');
    console.log(response);
    setX(response.data.reps);

     setY(response.data.weight);
    console.log('andr se nikalo!');
    console.log(wazan);
 
    console.log('ajao bc');

    
    let x=wazan;
    
  })
  .catch(function (error) {
    // handle error
    console.log('bhand');
    console.log('http://192.168.0.102:3023/api-gateway/current-user/exercise-track/'+search)
    console.log(error);
  })
  .then(function () {
    // always executed
  });



  }

   
    

    const loadIt= async ()=>{
 

      let hty=await AsyncStorage.getItem('@wkHistory');
      let dis=await AsyncStorage.getItem('@distance');
      setR(JSON.parse(dis));


      console.log('data milgaya!:');
      console.log(hty);
      
       mila=JSON.parse(hty);
      console.log(mila[0]);
      setContent(mila);
      
      
      
     }
  
     let tareekh=new Date();
     let x=tareekh.toISOString();
     let ran=x.slice(5,10);


  

     useEffect(() => {
    loadIt();
    }, []);
  return (
    <View style={styles.container}>
    <ScrollView>
    <View style={{flexDirection:'row',position:'absolute',top:110}} >
        <View style={styles.tag1}>
        <Text style={styles.paragraph}>
        <MaterialCommunityIcons name="weight-lifter" size={64}  color="black" />
      </Text>
      <Text style={{marginTop:1,marginLeft:23,fontSize:15,fontWeight:'bold'}}>{content.length} Workouts Done</Text>
        </View>
        <View style={styles.tag2}>
        <Text style={styles.paragraph}>
        <FontAwesome5 name="running" size={54} color="black" />
      </Text>
      <Text style={{marginLeft:16,fontSize:17,fontWeight:'bold'}}>Running {r}km</Text>
        </View>
        </View>
        
        <Text style={{fontSize:22,fontWeight:'bold',marginLeft:9,marginBottom:20,marginTop:372}}>Exercises Done Recently</Text>
        {/* <View style={{marginTop:40}}>
        
  </View> */}
     {/* <View style={styles.tag3}>
        <Text style={styles.paragraph}>
        <FontAwesome5 name="dumbbell" size={54} color="black" />
      </Text>
      <Text style={{marginLeft:16,fontSize:17,fontWeight:'bold'}}>{avg} Avg. Reps Performed</Text>
        </View> */}
        {/* <FlatList
        data={content}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <TextInput 
      placeholder={'Exercise Name'} 
      style={{backgroundColor:'silver',padding:10,borderRadius:10,width:280,marginLeft:10}}
      onChangeText={setSearch}
      value={search} 
      />
      <TouchableOpacity style={{backgroundColor:'black',borderRadius:10,marginLeft:5,width:wp('15%'),height:hp('6%')}} onPress={sendRequest}>
      <Text style={{fontSize:22,marginTop:5,color:'white',textAlign:'center'}}>Go</Text>
      </TouchableOpacity>
      {/* <Button title="GO"  onPress={sendRequest}/> */}
      </View> 

        <LineChart
        data={{
          labels: yy,
          datasets: [
            {
              data:xx,
            },
          ],
        }}
        width={Dimensions.get('window').width - 16} // from react-native
        height={220}
        
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
         
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      /> 

        </ScrollView>
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
