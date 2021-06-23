import  React,{useState} from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import WorkoutForm from './WorkoutForm';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';



//console.log(global.Waqtt);




export default function Screen1({route,navigation}) {

  const workouts=route.params;  
  let showIt=workouts.workouts;    
  const [wrk,setWrk]=useState(showIt);
  const [totalExercises,setExercises]=useState(showIt.length);
    //console.log('Agaya:');
    console.log("Length: "+showIt.length);

    let rps=0;
    let wazn=0;
    console.log('daldaiii');
    console.log(rps);
    AsyncStorage.setItem('@repsTotal',JSON.stringify(rps));
    AsyncStorage.setItem('@waznTotal',JSON.stringify(wazn));
    

    
    

    //console.log("Naashta:");
    //console.log(samaan.naashta);

    function addIt(){
    
    AsyncStorage.setItem('@keyOne',JSON.stringify(totalExercises));
    

    }

     function check(t){

            navigation.navigate('WorkoutForm',t);


     }

     addIt();
    
  return (
    <View style={styles.container}>
    <FlatList
        // data={waqt}
       
        // renderItem={({item})=>
    
        // <View>
         
      
        // <View style={{backgroundColor:'white',flexDirection:'row'}}>
        // <Text style={{fontSize:23,fontWeight:"normal",marginLeft:8}}>{item.wo}</Text>
        // <TouchableOpacity style={{backgroundColor:'red',padding:10,borderRadius:22,marginLeft:}}>
        //     <Text style={{color:'white',textAlign:'center'}}>View</Text>
        // </TouchableOpacity>
        // </View> 
        
          
        
        
        // </View>
        // }
        // keyExtractor={item => item.id}
        data={wrk}
       
       renderItem={({item})=>
       
       <TouchableOpacity style={styles.item} onPress={()=>check(item.wo)}>
         <Text style={styles.title}>{item.wo}</Text>
         
         
        
       </TouchableOpacity>

       
       
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
    marginVertical:10,
    height:100,
    marginTop:15,
  },
  title: {
    fontSize: 20,
    marginTop:15
  },
});
