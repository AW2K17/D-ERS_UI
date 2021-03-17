import React, { useState } from "react";
import { TextInput, SafeAreaView, ScrollView, View, Text,Dimensions,StyleSheet,TouchableOpacity } from "react-native";
import Constants from 'expo-constants';
import axios from 'axios';
const windowWidth = Dimensions.get('window').width;
const WorkoutForm = ({route,navigation}) => {
  const [inputFields, setInputFields] = useState(0);
  const [textValues, setTextValues] = useState({});
  const [weight,setWeight]=useState();
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
        //     console.log(error);
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



function sendWorkout(){
//   console.log(ran);
try {

axios.post('http://192.168.0.103:3023/api-gateway/current-user/exercise-track/addWeight', weight)
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
    <Text style={{fontSize:30,marginTop:20,textAlign:'center'}}>Enter the weight of dumbbells for {workout}</Text>
    <View style={{marginTop:60}}>

        <View style={{justifyContent: 'center',alignItems:'center'}}>
        <TextInput style={{padding:12,backgroundColor:'silver',width:150}} placeholder="Dumbbells Weight" onChangeText={(text)=>setWeight(text)}/>
        </View>
      <View style={{marginTop:150,align:'center',justifyContent:'center',marginLeft:90}}>
          <TouchableOpacity style={{padding:10,backgroundColor:'green',width:windowWidth*0.55,borderRadius:30,alignItems:'center'}}
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
