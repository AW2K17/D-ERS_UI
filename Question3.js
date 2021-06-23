import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Question3 = () => {
  
  const [color1,setColor1]=useState('black');
  const [color2,setColor2]=useState('black');
  const [color3,setColor3]=useState('black');
  const [color4,setColor4]=useState('black');
  const [color5,setColor5]=useState('black');
  
  

  




  const changeColor1=async()=>{

    if(color1=='black')
    {
      setColor1('green');
      setColor2('black');
      setColor3('black');
      setColor4('black');
      setColor5('black');
      
      
      
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
    x.activityLevel=1.5
    
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
      setColor3('black');
          setColor4('black');
      setColor5('black');
      
      
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
    x.activityLevel=1.6
    
    let y=JSON.stringify(x);
    console.log('updated:');
    console.log(y);
  AsyncStorage.setItem('@options', y)
  } catch(e) {
    // error reading value
  }
  
  }

  const changeColor3=async()=>{

    if(color3=='black')
    {
      setColor3('green');
      setColor1('black');
      setColor2('black');
          setColor4('black');
      setColor5('black');
      
      
    }
    else if(color3=='green')
    {
      setColor3('black');
      
      
    }
    try {
    const jsonValue = await AsyncStorage.getItem('@options')
    const x=JSON.parse(jsonValue);
    console.log('mili: ');
    console.log(x);
    x.activityLevel=1.8
    
    let y=JSON.stringify(x);
    console.log('updated:');
    console.log(y);
  AsyncStorage.setItem('@options', y)
  } catch(e) {
    // error reading value
  }

  



  }


const changeColor4=async()=>{

    if(color4=='black')
    {
      setColor4('green');
      setColor1('black');
      setColor2('black');
      setColor3('black');
      setColor5('black');
      
      
      
    }
    else if(color4=='green')
    {
      setColor4('black');
      
      
    }
    try {
    const jsonValue = await AsyncStorage.getItem('@options')
    const x=JSON.parse(jsonValue);
    console.log('mili: ');
    console.log(x);
    x.activityLevel=2
    
    let y=JSON.stringify(x);
    console.log('updated:');
    console.log(y);
  AsyncStorage.setItem('@options', y)
  } catch(e) {
    // error reading value
  }
}


const changeColor5= async()=>{

    if(color5=='black')
    {
      setColor5('green');
      setColor1('black');
      setColor2('black');
      setColor3('black');
      setColor4('black');
      
      
      
    }
    else if(color5=='green')
    {
      setColor5('black');
      
      
    }
    try {
    const jsonValue = await AsyncStorage.getItem('@options')
    const x=JSON.parse(jsonValue);
    console.log('mili: ');
    console.log(x);
    x.activityLevel=2.1
    
    let y=JSON.stringify(x);
    console.log('updated:');
    console.log(y);
  AsyncStorage.setItem('@options', y)
  } catch(e) {
    // error reading value
  }
}


  const show = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@options')
    const x=JSON.parse(jsonValue);
    console.log('mili: ');
    console.log(x);
    
    let y=JSON.stringify(x);
  AsyncStorage.setItem('@options', x)
  } catch(e) {
    // error reading value
  }

  
}









  return (
    <View style={styles.container}>
      <Text style={styles.Qus}>
        Rate Your Physical Activity Level From 1 To 5
      </Text>
      <TouchableOpacity  onPress={changeColor1}>
        <View style={{ width: 290,backgroundColor: color1,borderRadius: 19,padding: 12,marginTop: 5,alignItems: 'center'}}>
          <Text style={styles.choice}>Little / No Exercise</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity  onPress={changeColor2}>
        <View style={{ width: 290,backgroundColor: color2,borderRadius: 19,padding: 12,marginTop: 20,alignItems: 'center'}}>
          <Text style={styles.choice}>Light Exercise</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity  onPress={changeColor3}>
        <View style={{ width: 290,backgroundColor: color3,borderRadius: 19,padding: 12,marginTop: 20,alignItems: 'center'}}>
          <Text style={styles.choice}>Prefer Moderate</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={changeColor4}>
        <View style={{ width: 290,
    backgroundColor: color4,
    borderRadius: 19,
    padding: 12,
    marginTop: 20,
    alignItems: 'center'}}>
          <Text style={styles.choice}>
             Very Active{' '}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={changeColor5}>
        <View style={{ width: 290,
    backgroundColor: color5,
    borderRadius: 19,
    padding: 12,
    marginTop: 20,
    alignItems: 'center'}}>
          <Text style={styles.choice}> Everyday There Is One </Text>
        </View>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },

  Qus: {
    marginTop: 50,
    fontSize: 29,
    margin: 30,
  },

  
  option2: {
    width: 290,
    backgroundColor: 'black',
    borderRadius: 19,
    padding: 12,
    marginTop: 20,
    alignItems: 'center',
  },

  option3: {
    width: 290,
    backgroundColor: 'black',
    borderRadius: 19,
    padding: 12,
    marginTop: 20,
    alignItems: 'center',
  },

  choice: {
    color: 'white',
    fontSize: 14,
  },
});

export default Question3;
