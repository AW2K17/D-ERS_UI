import React,{useState} from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity,Dimensions,TextInput } from 'react-native';
import Constants from 'expo-constants';
  const windowsWidth=Dimensions.get('window').width;
import AsyncStorage from '@react-native-async-storage/async-storage';
 
 
 let obj={
    targetGoal:0,
    activityLevel:0,
    waist:0,
    lat:0
  }
export default function Question2() {



 


  const [color1,setColor1]=useState('black');
  const [color2,setColor2]=useState('black');
  const [color3,setColor3]=useState('black');
  const [wWidth,setwWidth]=useState(windowsWidth);
  const [target,setTarget]=useState();
  

  




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
    


obj.targetGoal=1;
console.log(obj);

  let x=JSON.stringify(obj);
  AsyncStorage.setItem('@options', x)
  }

  function changeColor(){

   

obj.targetGoal=parseInt(target, 10);
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

  


obj.targetGoal=parseInt(target);
console.log(obj);
let x=JSON.stringify(obj);
  AsyncStorage.setItem('@options', x)
  }

  function dikhao(){

    console.log(obj);
  }



  return (
    <View style={styles.container}>
      <Text style={{  marginTop: -190,
    fontSize: 39,
    margin: 30,
    fontWeight: 'normal'}}>
      Choose Your Target Weight
      </Text>
      <View
        style={{
          
          marginTop: 40,
          borderBottomWidth: 2,
          borderTopWidth: 2,
          borderRightWidth: 2,
          borderLeftWidth: 2,
          borderRadius: 9,
        }}>
        <TextInput
          style={styles.textInput}
          placeholder="Target Weight"
          value={target}
          onChangeText={setTarget}
          placeholderTextColor="black"
        />
         
        
       
      </View>
      <TouchableOpacity style={{backgroundColor:'black',borderRadius:26,marginTop:15,padding:15}} onPress={changeColor}>
        <Text style={{color:'white',textAlign:'center'}}>Set Value</Text>
      </TouchableOpacity>
      
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
  

  textInput: {
    marginLeft: 10,
    color: 'black',
    marginRight: -55,
    fontSize: 27,
    width: 300,
    padding:10
  }

  
});
