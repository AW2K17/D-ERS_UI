import * as React from 'react';

import { Text, View, StyleSheet,Dimensions,TouchableOpacity,ImageBackground,FlatList,ScrollView,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let x=340/windowWidth;

export default function CheckDetail({route}) {

 // console.log(route);
  //let x=route;
  const { pic,naam } = route.params;
  return (
   

   <View style={styles.container}>
   
 
     <Image source={{uri:pic}} style={{width:wp('94.4%'),height:hp('50.5%'),borderRadius:16,position:'absolute',top:60,left:10}}/>
     <Text style={{position:'absolute',top:490,left:10,fontSize:30,fontWeight:'bold'}}> {naam}</Text>

      <View style={{position:'absolute',top:590,left:18}}>
     <View style={{flexDirection:'row'}}>
      <Text style={styles.textz}>Calories: 67         </Text>
      <Text style={styles.textz}>Proteins: 44         </Text>
     </View>

      <View style={{flexDirection:'row'}}>
      <Text style={styles.textz}>Fats: 41         </Text>
      <Text style={styles.textz}>       Carbohydrates: 98         </Text>
     </View>

    </View>
     

   </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
   
  },
  textz:{
    fontSize:18,
    marginBottom:10,
    fontWeight:'100'
  }
});
