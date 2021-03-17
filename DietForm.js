import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Flatlist,TouchableOpacity,TextInput,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';







export default function DietForm({route,navigation}) {

    let data=route.params;
    let values=[];
    const [d,setD]=useState(data);
    const match=d.t;
    for(let i=0;i<d.data.length;i++) {
      if(d.data[i].khana===match){
          values.push(d.data[i].cal);
          values.push(d.data[i].p);
          values.push(d.data[i].f);
           values.push(d.data[i].c);
      }
  }


  console.log(values);




   
    const [calo,setCal]=useState(values[0]);
    const [pro,setPro]=useState(values[1]);
    const [carb,setCarb]=useState(values[2]);
    const [fat,setFat]=useState(values[3]);
    const [nut,setNut]=useState();
    
    

    console.log('Form me: ');
    console.log(calo);


    let nutritionsIntake=0;
   
   
  // function setThemAll(){

 // }
   var total=0;
for(var i in values) { total += values[i]; }
  //  setCal(values[0]);
  //  setPro(values[1]);
  //  setFat(values[2]);
  //  setCal(values[3]);
   

    nutritionsIntake=total;
    //setNut(nutritionsIntake);

    // useEffect(() => {
    //   setThemAll();
    // },[]);



    function confirmChanges(){

       let sum = parseInt(calo)+parseInt(fat)+parseInt(pro)+parseInt(carb);


       console.log("Sum"+sum);

       axios.post('http://192.168.0.103:3033/api-gateway/current-user/diet-track/add', {
        sum:sum
      })
      .then(function (response) {
        console.log('Gai:');
        console.log(response);
      })
      .catch(function (error) {
        console.log('bhand:');
        console.log(error);
      });
    }

  // setThemAll();
 
  return (
  
      <View style={styles.container}>
      <ScrollView>
            
            <Text style={{fontSize:32,marginTop:10,marginBottom:75}}>As Your Preference, You've consumed {nutritionsIntake} amount of Nutritions</Text>
            
           

      <View style={{flexDirection:'row'}}>
                    
                    <TextInput style={{ padding: 10, marginTop: 30, marginLeft: 23, fontSize: 15 ,backgroundColor:'#E0DCDC' }} placeholder="Enter Calories" value={calo.toString()} onChangeText={(text)=>setCal(text)} />
                   
                    <TextInput style={{ padding: 10, marginTop: 30, marginLeft: 23, fontSize: 15,backgroundColor:'#E0DCDC' }} placeholder="Enter Carbohydrates" value={fat.toString()} onChangeText={(text)=>setFat(text)} />
                   </View>
                   <View style={{flexDirection: 'row'}}>
                    <TextInput style={{ padding: 10,paddingRight:36, marginTop: 30, marginLeft: 23, fontSize: 15,backgroundColor:'#E0DCDC' }} placeholder="Enter Fats" value={carb.toString()} onChangeText={(text)=>setCarb(text)} />
                    
                    <TextInput style={{ padding: 10, marginTop: 30,paddingRight:49, marginLeft: 22, fontSize: 15,backgroundColor:'#E0DCDC' }} placeholder="Enter Proteins" value={pro.toString()} onChangeText={(text)=>setPro(text)} />
                             
                </View>
                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                <TouchableOpacity 
                style={{padding:13,backgroundColor:'red',borderRadius:22,marginTop:60,width:130}}
                onPress={confirmChanges}>
                
                
                  <Text style={{color:'white',textAlign:'center'}}>Confirm</Text>
                </TouchableOpacity>
                </View>

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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal:4,
    flexDirection:'row',
    marginVertical:10
  },
  title: {
    fontSize: 20,
  },
});
