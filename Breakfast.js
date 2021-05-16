import React,{useState} from 'react';
import { Text, View, StyleSheet,FlatList,SafeAreaView,Image,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import CheckDetail from './CheckDetail';

const DATA = [
  {
    id: 1,
    title: 'Half Fried Egg',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKPkbLGu6-G5QsJuMNYUkS3RP2hsYxPMPpg&usqp=CAU'
  },
  {
    id: 2,
    title: 'Strawberry',
    img:'https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-strawberrie-558x600.jpg'
  }
];



const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


export default function Breakfast({navigation}) {


  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  const [list,setList]=useState(DATA);






  return (
    <SafeAreaView style={styles.container}>
    <View>
      <FlatList
        data={list}
        
        renderItem={({item})=>
        <TouchableOpacity onPress={()=>navigation.navigate('CheckDetail',{pic:item.img,naam:item.title})}>
         
        <View style={styles.item}>
       
        <Image source={{uri:item.img}} style={{width:90,height:90,borderRadius:12}}/>
         <Text style={styles.title}>{item.title}</Text>
          <View style={{marginLeft:55,flexDirection:'row'}}>
         
        </View>
        </View>
        
        </TouchableOpacity>
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
  }
  ,
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
