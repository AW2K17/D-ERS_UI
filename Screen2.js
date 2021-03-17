import React,{useState} from 'react';
import { Text, View, StyleSheet,Flatlist,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';
import DietForm from './DietForm';

//console.log(global.Waqtt);







export default function Screen2({route,navigation}) {


    function check(t){

        let forForm={
            t:t,
            data:data
        };
    
        navigation.navigate('DietForm',forForm)
    }
        

    let data=route.params;
    const [d,setD]=useState(data);


   

    
    //console.log(checker);
  return (
  
      <View style={styles.container}>
    <FlatList
        
        data={d}
       
       renderItem={({item})=>
       
       <View style={styles.item}>
         <Text style={styles.title}>{item.khana}</Text>
         <TouchableOpacity 
         style={{backgroundColor:'red',padding:10,width:100,borderRadius:22,position:'absolute',left:240,top:20}}
          onPress={()=>check(item.khana)}>
           <Text style={{color:'white',textAlign:'center'}}>View</Text>
         </TouchableOpacity>
         
        
       </View>

       
       
       }
       keyExtractor={item => item.id}
       
       
         
   
        
          
    
      />
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
