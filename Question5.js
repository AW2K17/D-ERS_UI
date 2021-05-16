import React,{useState} from 'react';
import { StyleSheet, Button, Text,View ,TextInput,Platform,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Question5 = () => {

  const [color1,setColor1]=useState('black');
  const [color2,setColor2]=useState('black');


  


  const changeColor1=async()=>{

    if(color1=='black')
    {
      setColor1('green');
      setColor2('black');
     
      
      
    }
    else if(color1=='green')
    {
      setColor1('black');
      
      
    }
    try {
    const jsonValue = await AsyncStorage.getItem('@options')
    const x=JSON.parse(jsonValue);
    console.log('mili: ');
    console.log(x);
    x.gynecomastia='false'

    
    let y=JSON.stringify(x);
    console.log('updated:');
    console.log(y);
  AsyncStorage.setItem('@options', y)
  } catch(e) {
    // error reading value
  }
    


  }

  const changeColor2=async()=>{

    if(color2=='black')
    {
      setColor2('green');
      setColor1('black');
     
      
      
    }
    else if(color2=='green')
    {
      setColor2('black');
      
      
    }
     try {
    const jsonValue = await AsyncStorage.getItem('@options')
    const x=JSON.parse(jsonValue);
    console.log('mili: ');
    console.log(x);
    x.gynecomastia='true'
    
    
    let y=JSON.stringify(x);
    console.log('updated:');
    console.log(y);
  AsyncStorage.setItem('@options', y)
  } catch(e) {
    // error reading value
  }
  
  }




  return (
    <View style={styles.container}>
        <Text style={styles.Qus}>Do Your Currently Have Gynecomastia In Your Chest? </Text>

        <TouchableOpacity onPress={changeColor1}>
        <View style={{ width:290,backgroundColor:color1,borderRadius:19,padding:12,marginTop:70,
    alignItems: 'center',}}>
            <Text style={styles.choice}>No, I Don't</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={changeColor2}>
        <View style={{width:290,backgroundColor:color2,borderRadius:19,padding:12,marginTop:20,
    alignItems: 'center',}}>
            <Text style={styles.choice}>Yes, I Have</Text>
        </View>
        </TouchableOpacity>

     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    
  },

Qus:{

    marginTop:100,
    fontSize:32,
    margin:30
},






  choice:{

    color:'white',
    fontSize:14,
  }

  
 
});

export default Question5;
