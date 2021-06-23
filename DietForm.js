import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Flatlist,TouchableOpacity,TextInput,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



let match;
let history2=[];



export default function DietForm({route,navigation}) {

    let data=route.params;
    let values=[];
    console.log('peeche se');
    console.log(route.params);
    const [d,setD]=useState(data);
    match=d.t;
    console.log('match');
    console.log(match);
    for(let i=0;i<d.data.length;i++) {
      if(d.data[i].khana===match){
          values.push(d.data[i].cal);
          values.push(d.data[i].p);
          values.push(d.data[i].f);
           values.push(d.data[i].c);
      }
  }


  console.log(values);
  var total=0;
for(var i in values) { total += values[i]; }



   
    const [calo,setCal]=useState(values[0]);
    const [pro,setPro]=useState(values[1]);
    const [carb,setCarb]=useState(values[2]);
    const [fat,setFat]=useState(values[3]);
    const [nut,setNut]=useState(total);
    
    

    // console.log('Form me: ');
    // console.log(calo);


    let nutritionsIntake=0;
   
   
  // function setThemAll(){

 // }
 
  //  setCal(values[0]);
  //  setPro(values[1]);
  //  setFat(values[2]);
  //  setCal(values[3]);
   

    nutritionsIntake=total;
    
    //setNut(nutritionsIntake);

    // useEffect(() => {
    //   setThemAll();
    // },[]);



    async function confirmChanges(){

       let sum = parseInt(calo)+parseInt(fat)+parseInt(pro)+parseInt(carb);

       let wqt= await AsyncStorage.getItem('@waqt');
       let t=JSON.parse(wqt);
       setNut(sum);

       //let tt=[{S1,T1:" "},{S2,T2:" "},{S3,T3:" "}];
       let x=await AsyncStorage.getItem('nutritions');
       let y=await AsyncStorage.getItem('nutritions2');
       let z=await AsyncStorage.getItem('nutritions3');


       const hty2 = await AsyncStorage.getItem('@nfHistory');

       console.log('pehle2');
       console.log(hty2);
       history=JSON.parse(hty2);
           console.log('after2')
           console.log(history2);
   
   


       let obj2={
         
        khana:match,
        cal:parseInt(calo),
        carb:parseInt(carb),
        fat:parseInt(fat),
        pro:parseInt(pro)
    
    
      }

      console.log(obj2);
      history2.push({ khana:match,
        cal:parseInt(calo).toFixed(1),
        carb:parseInt(carb).toFixed(1),
        fat:parseInt(fat).toFixed(1),
        pro:parseInt(pro).toFixed(1)});
      console.log('pushitt2');
    
      console.log(history2);
    
    
      await AsyncStorage.setItem('@nfHistory', JSON.stringify(history2));
      






      //  if(t==='Breakfast'){

      //   //let s1=Number(JSON.parse(x))+sum;
      //   await AsyncStorage.setItem('nutritions',JSON.stringify(nut));
        
      //  }
      //  else if(t==='Lunch'){

      //   //let s2=Number(JSON.parse(y))+sum;
      //   await AsyncStorage.setItem('nutritions2',JSON.stringify(nut));

      // }
      //  else if(t==='Dinner'){

      //   //let s3=Number(JSON.parse(z))+sum;
      //   await AsyncStorage.setItem('nutritions3',JSON.stringify(nut));

      //  }
      //  await AsyncStorage.setItem('@sumJama',JSON.stringify(tt))
      let tareekh=new Date();
      let dte=tareekh.toISOString();
      let ran=dte.slice(0,10);

       console.log("Sums"+sum);

       axios.post('http://192.168.0.102:3033/api-gateway/current-user/diet-track/add', {
        //sum:sum,
        dietScheduleId:"tew7t7tw775gjdk",
        dayDate:ran,
        totalCaloriesIntake:parseInt(calo),
        totalProteinIntake:parseInt(pro),
        totalCarbohydratesIntake:parseInt(fat),
        totalFatsIntake:parseInt(carb),
        currentWeight:59
      })
      .then(function (response) {
        console.log('Gaii:');
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
            
            <Text style={{fontSize:32,marginTop:10,marginBottom:75}}>As Your Preference You've consumed {nut} amount of Nutritions</Text>
            
           

      <View style={{justifyContent:'center',alignItems: 'center'}}>
                    
                    <Text style={{fontWeight:'bold',marginTop:10,fontSize:20,marginRight:210}}>Calories</Text>
                    <TextInput style={{ width:330,padding: 10, marginTop: 20, marginLeft: 23, fontSize: 15 ,backgroundColor:'#E0DCDC' }} placeholder="Enter Calories" value={calo.toString()} onChangeText={(text)=>setCal(text)} />
                   
                   <Text style={{fontWeight:'bold',marginTop:30,marginRight:250,fontSize:20}}>Fats</Text>
                    <TextInput style={{  width:330,padding: 10, marginTop: 20, marginLeft: 23, fontSize: 15,backgroundColor:'#E0DCDC' }} placeholder="Enter Carbohydrates" value={fat.toString()} onChangeText={(text)=>setFat(text)} />
                   </View>
                   <View style={{justifyContent:'center',alignItems: 'center'}}>
                   <Text style={{fontWeight:'bold',marginTop:20,fontSize:20,marginRight:150}}>Carbohydrates</Text>

                    <TextInput style={{  width:330, padding: 10,paddingRight:36, marginTop: 20, marginLeft: 23, fontSize: 15,backgroundColor:'#E0DCDC' }} placeholder="Enter Fats" value={carb.toString()} onChangeText={(text)=>setCarb(text)} />
                    <Text style={{fontWeight:'bold',marginTop:20,fontSize:20,marginRight:200}}>Proteins</Text>
                   
                    <TextInput style={{  width:330,padding: 10, marginTop: 20,paddingRight:49, marginLeft: 22, fontSize: 15,backgroundColor:'#E0DCDC' }} placeholder="Enter Proteins" value={pro.toString()} onChangeText={(text)=>setPro(text)} />
                             
                </View>
                <View style={{justifyContent: 'center',alignItems: 'center'}}>
                <TouchableOpacity 
                style={{padding:13,backgroundColor:'#8C2020',marginBottom:50,borderRadius:12,marginTop:60,width:330}}
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
