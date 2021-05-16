import React, { useState } from "react";
import { TextInput ,SafeAreaView, ScrollView, View, Text,Dimensions,StyleSheet,TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const WorkoutForm = ({route,navigation}) => {
  const [inputFields, setInputFields] = useState(0);
  const [repps,setRepps]=useState();
  const [textValues, setTextValues] = useState({});
  const [weight1,setWeight]=useState();
  let Val=[];


  let workout=route.params;
  const genarateInputs = () => {


      // onPress={() => {
        //   const ran = {



        //   }


        //   console.log(ran);
        //   try {
           
        //     axios.post('', ran)
        //       .then(response => {
        //         console.log(response);
                
                

        //       }).catch(error => {
        //         if (error) {
        //           console.log("Inside", error)
                  
        //         }
        //       })
        //   }
        //   catch (error) {
        //     console.log(errror);
        //   }
        // }}
      



















const [weight,setWeight]=useState();


    let list = [];
    
    for (let i = 0; i < inputFields; i++) {
      list.push(
        <>
          <TextInput
            key={i.toString()}
            style={styles.inputStyle2}
            value={textValues[i]}
            onChangeText={(text) => onChangeText(i, text)}
            placeholder="Enter Reps"
          />
        
        </>
       
      );
      Val[i]=textValues[i]
    }
    return list;
  };

  let Check=Val;
  const onChangeText = (index, text) => {
    textValues[index] = text;
    setTextValues({ ...textValues });
  };



const sendWorkout= async ()=>{

  let x={

    weightCapacity:{

      exerciseName:workout,
      reps:12,
      weight:weight1
    }
  }

  let weightCapacity={

    exerciseName:workout,
    reps:12,
    weight:weight1
  }

  

  let ran=weight1;
  
  
  await AsyncStorage.setItem('@wtg',JSON.stringify(ran));
  await AsyncStorage.setItem('@exName',JSON.stringify(workout));
  let c=await AsyncStorage.getItem('@repsTotal');
  let w=await AsyncStorage.getItem('@waznTotal');
  
  console.log("gdd");
  let conv=Number(JSON.parse(c));
  let conv2=Number(JSON.parse(w));
  
  console.log(typeof conv2);
  console.log(weight1);
  

  conv+=Number(repps);
  conv2+=Number(weight1); 
  console.log(conv);
  


  await AsyncStorage.setItem('@repsTotal',JSON.stringify(conv));
  await AsyncStorage.setItem('@waznTotal',JSON.stringify(conv2));
  
  
 
  
  
//   console.log(ran);
try {

axios.post('http://192.168.0.105:3023/api-gateway/current-user/exercise-track/addWeight', {

  weightCapacity:{

    exerciseName:workout,
    reps:repps,
    weight:weight1
  }
})
  .then(response => {
      console.log("Gaya!");
    console.log(response);
    
    

  }).catch(error => {
    if (error) {
      console.log("Inside", error)
      
    }
  })
}
catch (error) {
console.log(error);
}

}














console.log("This:"+global.workOut);





  return (
    <View style={{ flex: 1, alignItems: "center"}}>
    <ScrollView>
    <Text style={{fontSize:29,fontWeight:'normal',marginTop:20,textAlign:'left',marginLeft:14}}>Data Related Your {workout}</Text>
    <View style={{marginTop:60}}>

        <View style={{justifyContent: 'center',alignItems:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold',marginTop:20,marginRight:102}}>Weight of Dumbbells</Text>
        <TextInput  style={{padding:8,backgroundColor:'silver',width:320,height:50,marginTop:10}} placeholder="In Kilos" onChangeText={(text)=>setWeight(text)}/>
        
        </View>
        <View style={{justifyContent: 'center',alignItems:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold',marginTop:20,marginRight:152}}>Reps Performed</Text>
        <TextInput  style={{padding:8,backgroundColor:'silver',width:320,height:50,marginTop:10}} onChangeText={(text)=>setRepps(text)}/>
        
        </View>
        
      <View style={{marginTop:30,align:'center',justifyContent:'center',marginLeft:43}}>
          <TouchableOpacity style={{padding:10,backgroundColor:'#8C2020',width:windowWidth*0.79,borderRadius:10,alignItems:'center'}}
          onPress={sendWorkout}>
      <Text style={{color:'white'}}>Submit</Text>
      </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    </View>
  );
};
export default WorkoutForm;



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
   inputStyle:{
    backgroundColor:'silver',marginTop:10,padding:10,width:windowWidth*0.45,borderRadius:30
  },
  inputStyle2:{
   backgroundColor:'silver',marginTop:20,marginBottom:10,padding:10,width:windowWidth*0.45,borderRadius:30
 }
});
