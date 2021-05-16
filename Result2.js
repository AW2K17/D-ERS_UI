import * as React from 'react';
import { Text, View, StyleSheet,Dimensions,TouchableOpacity,ImageBackground,FlatList,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import CheckDiet from './CheckDiet';

const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ21ki14yx0cKNNkQYmsO3xqjJiY4ACBTOyw&usqp=CAU" };
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


const Item = ({ title,img }) => (
  <TouchableOpacity style={{marginTop:10,marginLeft:8}} disabled={true}>
      <View style={styles.tag2}>  
      
          <ImageBackground source={img} imageStyle={{ borderTopLeftRadius: 26,borderTopRightRadius:26}} style={styles.image}>
      
    </ImageBackground>
   
    <Text style={styles.todayHeading}>{title}</Text>
      </View>
       </TouchableOpacity>
 
);


export default function Result2({navigation}) {

 const renderItem = ({ item }) => (
    <Item title={item.title} img={item.img}/>
  );


  return (
   
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.paragraph}>
       Today's Diet Plan
      </Text>
      <TouchableOpacity style={{position:'absolute',top:92,left:20}} onPress={()=>navigation.navigate("CheckDiet")}>
      <View style={styles.tag1}>  
          <ImageBackground source={image} imageStyle={{ borderTopLeftRadius: 26,borderTopRightRadius:26}} style={styles.image}>
      
    </ImageBackground>
    <Text style={styles.todayHeading}>Check It Out</Text>
      </View>
       </TouchableOpacity>
       <View style={{marginTop:0.57*windowHeight}}>

      <FlatList
        data={DATA}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
      </View>

      <Text style={styles.paragraph2}>Upcoming Plans</Text>
     </ScrollView>
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
    top:20,
    left:25,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph2: {
    position:"absolute",
    top:0.494*windowHeight,
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
    fontSize:19,
    margin:'1.72%'
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
});
