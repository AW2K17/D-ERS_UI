import  React,{useState} from 'react';
import { Text, View, StyleSheet,Button,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import Screen2 from './Screen2';
import { FlatList } from 'react-native-gesture-handler';


//console.log(global.Waqtt);




export default function Screen1({route,navigation}) {

    let samaan=route.params;

    const [waqt,setWaqt]=useState(samaan.times);

    console.log('Agaya:');
    

    console.log('Yeh:');
    console.log(waqt);
    let naashta=route.params;
    //console.log("Naashta:");
    //console.log(samaan.naashta);
    


    function check(t){

      
        if(t==="Breakfast"){
            navigation.navigate('Screen2',samaan.naashta);

        }

        else if(t==="Lunch"){
            navigation.navigate('Screen2',samaan.lunch);
            
        }
        else if(t==="Dinner"){
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
       
       <View style={styles.item}>
         <Text style={styles.title}>{item.wo}</Text>
         <TouchableOpacity 
         style={{backgroundColor:'red',padding:10,width:100,borderRadius:22,position:'absolute',left:240,top:20}}
         onPress={()=>check(item.wo)}>
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
