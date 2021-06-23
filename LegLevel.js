import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity,Dimensions } from 'react-native';
import Constants from 'expo-constants';

const windowsWidth=Dimensions.get('window').width;
import AsyncStorage from '@react-native-async-storage/async-storage';





const change3=async()=>{

    
    try {
    const jsonValue = await AsyncStorage.getItem('@options2')
    const x=JSON.parse(jsonValue);
    console.log('mili: ');
    console.log(x);
    x.legsLevel=3
    
    let y=JSON.stringify(x);
    console.log('updated:');
    console.log(y);
  AsyncStorage.setItem('@options2', y)
  } catch(e) {
    // error reading value
  }
}


const change2=async()=>{

    
    try {
    const jsonValue = await AsyncStorage.getItem('@options2')
    const x=JSON.parse(jsonValue);
    console.log('mili: ');
    console.log(x);
    x.legsLevel=2
    
    let y=JSON.stringify(x);
    console.log('updated:');
    console.log(y);
  AsyncStorage.setItem('@options2', y)
  } catch(e) {
    // error reading value
  }
    


  }


  const change1=async()=>{

    
    try {
    const jsonValue = await AsyncStorage.getItem('@options2')
    const x=JSON.parse(jsonValue);
    console.log('mili: ');
    console.log(x);
    x.legsLevel=1
    
    let y=JSON.stringify(x);
    console.log('updated:');
    console.log(y);
  AsyncStorage.setItem('@options2', y)
  } catch(e) {
    // error reading value
  }
    


  }










export default function LegLevel() {
  return (
    <View style={styles.container}>
    <Text style={styles.paragraph}>
    Select Your Nearest Leg Level
    </Text>
    <TouchableOpacity style={{position:'absolute',top:140,left:105}} onPress={change3}>
        <Image
            source={{
          uri: 'https://res.cloudinary.com/daers/image/upload/v1621507229/legs_level_3_p3ckl9.jpg',
        }}

        resizeMode={'cover'}
        style={{width:200,height:160,borderRadius:12}}
        />
        
  </TouchableOpacity>
  <TouchableOpacity style={{position:'absolute',top:320,left:105}} onPress={change2}>
        <Image
            source={{
          uri: 'https://res.cloudinary.com/daers/image/upload/v1621507229/legs_level_2_qmivj6.jpg',
        }}

        resizeMode={'cover'}
        style={{width:200,height:160,borderRadius:12}}
        />
        
  </TouchableOpacity>
  <TouchableOpacity style={{position:'absolute',top:500,left:105}} onPress={change1}>
        <Image
            source={{
          uri: 'https://res.cloudinary.com/daers/image/upload/v1621507229/legs_level_1_lursgb.jpg',
        }}

        resizeMode={'cover'}
        style={{width:200,height:160,borderRadius:12}}
        />
        
  </TouchableOpacity>
 
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        
      },
      paragraph: {
        flex:1,
        margin: 24,
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
      },
});
