import React,{useState} from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity,Dimensions } from 'react-native';
import Constants from 'expo-constants';
  const windowsWidth=Dimensions.get('window').width;
import AsyncStorage from '@react-native-async-storage/async-storage';
 
 
 let obj={
    fitnessGoal:" ",
    physicalActivity:0,
    gynecomastia:'false'
  }
export default function Question2() {



 


  const [color1,setColor1]=useState('black');
  const [color2,setColor2]=useState('black');
  const [color3,setColor3]=useState('black');
  const [wWidth,setwWidth]=useState(windowsWidth);
  

  




  function changeColor1(){

    if(color1=='black')
    {
      setColor1('green');
      setColor2('black');
      setColor3('black');
      
    }
    else if(color1=='green')
    {
      setColor1('black');
      
      
    }
    


obj.fitnessGoal='LooseWeight';
console.log(obj);

  let x=JSON.stringify(obj);
  AsyncStorage.setItem('@options', x)
  }

  function changeColor2(){

    if(color2=='black')
    {
      setColor2('green');
      setColor1('black');
      setColor3('black');
      
      
    }
    else if(color2=='green')
    {
      setColor2('black');
      
      
    }
    const fitnessGoal="gainWeight";


obj.fitnessGoal='gainWeight';
console.log(obj);
let x=JSON.stringify(obj);
  AsyncStorage.setItem('@options', x)
  }

  function changeColor3(){

    if(color3=='black')
    {
      setColor3('green');
      setColor1('black');
      setColor2('black');
      
      
    }
    else if(color3=='green')
    {
      setColor3('black');
      
      
    }

  


obj.fitnessGoal='maintainCurrentPhysique';
console.log(obj);
let x=JSON.stringify(obj);
  AsyncStorage.setItem('@options', x)
  }

  function dikhao(){

    console.log(obj);
  }



  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
      Choose Your Goal
      </Text>
      <View style={{justifyContent:'center',alignItems:'center',marginTop:74}}>
      <TouchableOpacity style={{backgroundColor:color1,alignItems:'center',padding:14,width:windowsWidth*0.75,marginBottom:40,borderRadius:25}} onPress={changeColor1}>
      <Text style={{color:'white',fontSize:17}}>Loose Weight</Text>
      </TouchableOpacity>
    
     <TouchableOpacity style={{backgroundColor:color2,alignItems:'center',padding:14,width:windowsWidth*0.75,marginBottom:40,borderRadius:25}} onPress={changeColor2}>
      <Text style={{color:'white',fontSize:17}}>Gain Weight</Text>
      </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:color3,alignItems:'center',padding:14,width:windowsWidth*0.75,marginBottom:40,borderRadius:25}} onPress={changeColor3}>
      <Text style={{color:'white',fontSize:17}}>Maintain Current Physique</Text>
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
   
    padding: 8,
  },
  paragraph: {
    position:'absolute',
    top:windowsWidth*0.22,
   left:windowsWidth*0.05,
   right:windowsWidth*0.02,
    fontSize: 30,
    
  },

  
});
