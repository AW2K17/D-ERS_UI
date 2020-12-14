import  React,{useState} from 'react';
import { Button, View, TextInput ,Image,Text,StyleSheet,Dimensions,TouchableOpacity,ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import Carousel, { Pagination } from 'react-native-x-carousel';
import {  IndexPath,Datepicker, Layout,  Select, SelectItem } from '@ui-kitten/components';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;






const AddExercise=()=>{


    const DATA = [
        { text: '#1',img:'https://cdn.pixabay.com/photo/2015/07/17/09/20/bmw-848904_1280.jpg'},
        { text: '#2' },
        { text: '#3' },
      ];

    const [limit,setLimit]=useState('26');
    const [sets,setSets]=useState('');
    const [reps,setReps]=useState('');
    const [date, setDate] = React.useState(new Date());

    const renderItem = data => (
        <View key={data.text} style={styles.item}>
         
          <ImageBackground source={data.img} style={{width:'100%',height:'100%'}}><Text>Check</Text></ImageBackground>
    
        </View>
      );


    return(
        
            <View style={styles.container}>
                <View style={{marginTop:-260}}>               
                <Text style={{fontSize:24,fontWeight:'bold',paddingBottom:7}}>Days Limit Left: {limit}</Text>
                <Carousel
                    pagination={Pagination}
                    renderItem={renderItem}
                    data={DATA}
                    
                />
                </View>

                <View style={{flexDirection: 'row',marginTop:33}}>
                <TextInput placeholder='Enter Sets' style={{width:130,backgroundColor:'silver',height:24,marginRight:6}} onChangeText={setSets}/>
                <TextInput placeholder='Enter Reps'style={{width:130,backgroundColor:'silver',height:24,marginLeft:6}} onChangeText={setReps}/>
                </View>
            
                <Text style={{fontSize:17,fontWeight: 'bold',marginRight:24,marginTop:34}}>Select Date</Text>
                <Layout level='1' style={{flexDirection: 'row',marginRight:24,marginTop:13}}>
                
                <Datepicker
                    date={date}
                    onSelect={nextDate => setDate(nextDate)}
                />
                </Layout>

                <TouchableOpacity style={{marginTop:30,width:270,height:40,backgroundColor:'green',borderRadius:30}}>
                    <Text style={{color:'white',fontSize:19,marginLeft:49,marginTop:5}}>CONFIRM CHANGES</Text>
                </TouchableOpacity>            
            
            
            
            
            </View>
            
       
    );
}

export default AddExercise;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: Constants.statusBarHeight
    },
    item: {
      width: 330,
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
        
    },
  });