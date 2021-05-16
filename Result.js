import React,{useState,useEffect} from 'react';
import { Text,Modal, View, StyleSheet,Dimensions,TouchableOpacity,ImageBackground,FlatList,ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import CheckList from './CheckList';
import { Pressable } from 'react-native';
import axios from 'axios';


console.log(windowHeight);
console.log(windowWidth);

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    img:image
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    img:image
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    img:image
  },
];


let upcomingObj=[]



const Item = ({ title,img }) => (
  <TouchableOpacity style={{marginTop:14,marginLeft:8}} disabled={true}>
      <View style={styles.tag2}>  
      
          <ImageBackground source={img} imageStyle={{ borderTopLeftRadius: 26,borderTopRightRadius:26}} style={styles.image}>
      
    </ImageBackground>
   
    <Text style={styles.todayHeading}>{title}</Text>
      </View>
       </TouchableOpacity>
 
);

let image='';

export default function Result({navigation}) {

  const [modalVisible, setModalVisible] = useState(false);
  const [content,setContent]=useState([]);
  const [todayPic,setTodayPic]=useState('');

   image = { uri: todayPic };

async function getIt(){


  let i,j;
        
  let tareekh=new Date();
  let x=tareekh.toISOString();
  let ran=x.slice(0,10);

  try{
  const res= await axios.get('http://192.168.0.105:3021/api-gateway/current-user/schedulee-user/getschedule', { withCredentials: true })
  .then(res=> {
    console.log("Kuch yun aya:");
    console.log(res.data.schedulee[0].document[0].day[0].exercise.photos[0]);
    
    console.log('tariq');
    console.log(ran);
    for(i=0;i<(res.data.schedulee[0].document.length);i++){
      if(ran===res.data.schedulee[0].document[i].sameDay){
        
      console.log(res.data.schedulee[0].document.length);
      console.log(res.data.schedulee[0].document[i].day[0].exercise.exerciseName)
      setTodayPic(res.data.schedulee[0].document[i].day[0].exercise.photos[0])
  

}}

let c=0;
for(i=0;i<(res.data.schedulee[0].document.length);i++){
  if(ran!=res.data.schedulee[0].document[i].sameDay){
  console.log('diff haii i');
  for(j=0;j<29;j++){
  //console.log(response.data.schedulee[0].document[0].day.length);
  
  c=c+1;
  upcomingObj.push({id:i,title:'Pending Workouts ',pic:res.data.schedulee[0].document[i].day[j].exercise.photos[0]})
  }      
  console.log('baaki ka');
  console.log(upcomingObj);


}}

console.log(upcomingObj);





})}
  catch(error) {
    console.log(error);
  };

}

useEffect(() => {
  getIt();
}, []);










 const renderItem = ({ item }) => (
    <Item title={item.title} img={item.pic}/>
  );


  return (
   
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.paragraph}>
       Today's Workout
      </Text>
      <TouchableOpacity style={{position:'absolute',top:90,left:20}} onPress={()=>navigation.navigate('CheckList')} >
      <View style={styles.tag1}>  
          <ImageBackground source={image} imageStyle={{ borderTopLeftRadius: 26,borderTopRightRadius:26}} style={styles.image}>
      
    </ImageBackground>
    <Text style={styles.todayHeading}>Check It Out</Text>
      </View>
       </TouchableOpacity>
       <View style={{marginTop:0.54*windowHeight}}>

      <FlatList
        data={upcomingObj}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
      </View>

      <Text style={styles.paragraph2}>Upcoming Workouts</Text>
     </ScrollView>
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>OOPS<Text>{'\n'}</Text> The following plan is for another day. Can't see today!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          
          </View>
        </View>
      </Modal>
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
    position:"absolute",
    top:30,
    left:25,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph2: {
    position:"absolute",
    top:0.464*windowHeight,
    left:25,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  tag1:{
    width:wp('57.3%'),
    height:hp('30.97%'),
    backgroundColor:'white',
    
    marginLeft:4,
    borderRadius:22
   
  },
  tag2:{
    width:wp('56.3%'),
    height:hp('30.97%'),
    backgroundColor:'white',
     
    marginLeft:14,
    borderRadius:22
   
  },image: {
    flex: 0.92,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius:22,
    
  },
  todayHeading:{
    fontSize:17,
    marginLeft:13,
    marginTop:14,
    margin:'1.79%'
  },
  overlay: {
    backgroundColor:'rgba(255,0,0,0.5)',
},
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row',
  
  },
  title: {
    fontSize: 22,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },},
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
});
