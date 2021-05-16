import React,{useState,useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Button,Image,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import CheckDetail2 from './CheckDetail2';
import axios from 'axios';


const DATA = [
  {
    id: 1,
    title: 'Squats Workout',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTab107NaBRuqMUtHkL26VUoq_H7iGk7k8LGA&usqp=CAU'
  },
  {
    id: 2,
    title: 'Biceps Workout',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTab107NaBRuqMUtHkL26VUoq_H7iGk7k8LGA&usqp=CAU'
  },
  {
    id: 3,
    title: 'Chest Workout',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTab107NaBRuqMUtHkL26VUoq_H7iGk7k8LGA&usqp=CAU'
  },
  {
    id: 4,
    title: 'Legs Workout',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTab107NaBRuqMUtHkL26VUoq_H7iGk7k8LGA&usqp=CAU'
  },
  {
    id: 5,
    title: 'Triceps Workout',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTab107NaBRuqMUtHkL26VUoq_H7iGk7k8LGA&usqp=CAU'
  },
];


let dataObj=[];



const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const CheckList = ({navigation}) => {


  const [dLength,setDayLength]=useState('');

  

  function getIt(){


    let i,j;
          
    let tareekh=new Date();
    let x=tareekh.toISOString();
    let ran=x.slice(0,10);
  
     axios.get('http://192.168.0.105:3021/api-gateway/current-user/schedulee-user/getschedule', { withCredentials: true })
    .then(res=> {
      console.log("Kuch yun aya:");
      console.log(res.data.schedulee[0].document[0].day[0].exercise.photos[0]);
      for(i=0;i<(res.data.schedulee[0].document.length);i++){
        if(ran===res.data.schedulee[0].document[i].sameDay){
        console.log('Aaj hi aaj');
        
        console.log(res.data.schedulee[0].document[i].day.length);
        setDayLength(res.data.schedulee[0].document[i].day.length);



        for(j=0;j<dLength;j++){

          console.log('Naam agaye');
          console.log(res.data.schedulee[0].document[i].day[j].exercise.exerciseName);
          console.log(res.data.schedulee[0].document[i].day[j].exercise.photos[0]);
          
          dataObj.push({id:j+1,title:res.data.schedulee[0].document[i].day[j].exercise.exerciseName,pic:res.data.schedulee[0].document[i].day[j].exercise.photos[0]})
        }


        




    
  
  }}
console.log('bhargai');
console.log(dataObj)})
    .catch(function (error) {
      console.log(error);
    });
  
  }
  
  useEffect(() => {
    getIt();
  }, []);
  
  


  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  const [list,setList]=useState(dataObj);


  

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
        data={dataObj}
        
        renderItem={({item})=>
        <TouchableOpacity onPress={()=>navigation.navigate('CheckDetail2',{pic:item.pic,naam:item.title})}>
         
        <View style={styles.item}>
       
        <Image source={{uri:item.pic}} style={{width:90,height:90,borderRadius:12}}/>
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

export default CheckList;