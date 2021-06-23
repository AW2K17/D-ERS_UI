import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity ,Dimensions} from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowsWidth=Dimensions.get('window').width;


let obj={
    chestLevel:1,
    absLevel: 1,
    backLevel: 1,
    legsLevel: 1,
    shoulderLevel:1
  }


  async function change3(){

    obj.chestLevel=3;
    console.log(obj);

    let x=JSON.stringify(obj);
  AsyncStorage.setItem('@options2', x)
  

  } 


  async function change2(){

    obj.chestLevel=2;
    console.log(obj);

    let x=JSON.stringify(obj);
  AsyncStorage.setItem('@options2', x)
  

  } 


  async function change1(){

    obj.chestLevel=1;
    console.log(obj);

    let x=JSON.stringify(obj);
  AsyncStorage.setItem('@options2', x)
  

  }
export default function ChestLevel() {
  return (
    <View style={styles.container}>
    <Text style={styles.paragraph}>
    Select Your Nearest Chest Level
    </Text>
    <TouchableOpacity style={{position:'absolute',top:140,left:105}} onPress={change3}>
        <Image
            source={{
          uri: 'https://res.cloudinary.com/daers/image/upload/v1621506300/c3_jnsd_32_lbeeuc.jpg',
        }}

        resizeMode={'cover'}
        style={{width:200,height:160,borderRadius:12}}
        />
        
  </TouchableOpacity>
  <TouchableOpacity style={{position:'absolute',top:320,left:105}} onPress={change2}>
        <Image
            source={{
          uri: 'https://res.cloudinary.com/daers/image/upload/v1621506300/c2_jnsd_16_mftwej.jpg',
        }}

        resizeMode={'cover'}
        style={{width:200,height:160,borderRadius:12}}
        />
        
  </TouchableOpacity>
  <TouchableOpacity style={{position:'absolute',top:500,left:105}} onPress={change1}>
        <Image
            source={{
          uri: 'https://res.cloudinary.com/daers/image/upload/v1621506300/c1_jnsdffc_ufyzod.jpg',
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
