import React,{useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Button,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const DATA = [
  {
    id: 1,
    title: 'Squats Workout',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ21ki14yx0cKNNkQYmsO3xqjJiY4ACBTOyw&usqp=CAU'
  },
  {
    id: 2,
    title: 'Biceps Workout',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ21ki14yx0cKNNkQYmsO3xqjJiY4ACBTOyw&usqp=CAU'
  },
  {
    id: 3,
    title: 'Chest Workout',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ21ki14yx0cKNNkQYmsO3xqjJiY4ACBTOyw&usqp=CAU'
  },
  {
    id: 4,
    title: 'Legs Workout',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ21ki14yx0cKNNkQYmsO3xqjJiY4ACBTOyw&usqp=CAU'
  },
  {
    id: 5,
    title: 'Triceps Workout',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ21ki14yx0cKNNkQYmsO3xqjJiY4ACBTOyw&usqp=CAU'
  },
];




const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Details2 = () => {


  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  const [list,setList]=useState(DATA);


  

  // function deleteItem(id) {
   
  //   const arr = [...DATA];
  //   arr.slice(id,1);
  //   setList(arr);
  // }

 const deleteItem=(id)=>{


    setList(

      prevItems=>{return prevItems.filter(item=>item.id!=id);
      });
  }



  return (
    <SafeAreaView style={styles.container}>
    <View>
      <FlatList
        data={list}
        
        renderItem={({item})=>
        <View>
         
        <View style={styles.item}>
       
        <Image source={{uri:item.img}} style={{width:90,height:90,borderRadius:12}}/>
         <Text style={styles.title}>{item.title}</Text>
          <View style={{marginLeft:55,flexDirection:'row'}}>
         
        </View>
        </View>
        
        </View>
        }
        keyExtractor={item => item.id}
        
        
          
    
      />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'#E6F0F0'
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row',
    borderRadius:12
  
  },
  title: {
    fontSize: 18,
    position:'absolute',
    left:122,
    top:32
  },
});

export default Details2;