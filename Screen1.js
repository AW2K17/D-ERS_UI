import  React,{useState} from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import Screen2 from './Screen2';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';


//console.log(global.Waqtt);




export default function Screen1({route,navigation}) {

    let samaan=route.params;

    const [waqt,setWaqt]=useState(samaan.times);

     console.log('size agaya:');
     console.log(samaan.times);
     console.log('item1 agaya:');
     console.log(samaan.naashta);
    
     console.log('item2 agaya:');
     console.log(samaan.lunch);
     
     console.log('item3 agaya:');
     console.log(samaan.dinner[0]);

   
     console.log(samaan);
    // console.log(samaan.lunch.length);
    // console.log(samaan.dinner.length);
    
    let b=samaan.naashta.length.toString();
    let l=samaan.lunch.length.toString();
    let d=samaan.dinner.length.toString();
    
    AsyncStorage.setItem("@bfOne",b);
    AsyncStorage.setItem("@lhOne",l);
    AsyncStorage.setItem("@drOne",d);
    



    // AsyncStorage.setItem('@bf',samaan.naashta.length);
    // AsyncStorage.setItem('@lnh',samaan.lunch.length);
   
    

    let naashta=route.params;
    console.log("time kya");
    //console.log(waqt);
    console.log(naashta.dinner);
    


    async function check(t){

       await AsyncStorage.setItem("@waqt",JSON.stringify(t));
      
       console.log('DDDDD');
       console.log(t);
       
        if(t==="breakfast"){
            
          console.log('samaan ka naashta');
          console.log(samaan.naashta);
            navigation.navigate('Screen2',samaan.naashta);

        }

        else if(t==="lunch"){
            navigation.navigate('Screen2',samaan.lunch);
            
        }
        else if(t==="dinner"){
            navigation.navigate('Screen2',samaan.dinner);
        }

    }
    
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
        data={waqt}
       
       renderItem={({item})=>
       
       <TouchableOpacity onPress={()=>check(item.wo)}>
       <View style={styles.item}>
       <TouchableOpacity  onPress={()=>check(item.wo)}>
         <Text style={styles.title}>{item.wo}</Text>
         {/* <TouchableOpacity 
         style={{backgroundColor:'#8C2020',padding:10,width:100,borderRadius:22,position:'absolute',left:240,top:20}}
         onPress={()=>check(item.wo)}>
           <Text style={{color:'white',textAlign:'center'}}>Views</Text>
         </TouchableOpacity> */}
         
         </TouchableOpacity>
       </View>
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
    padding: 40,
    marginHorizontal:4,
    flexDirection:'row',
    marginVertical:10
  },
  title: {
    fontSize: 18,
  },
});
