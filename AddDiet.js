import  React,{useState} from 'react';
import { Button, View, TextInput ,Image,StyleSheet,Dimensions,TouchableOpacity,ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import Carousel, { Pagination } from 'react-native-x-carousel';
import {  IndexPath,Datepicker, Layout,  Select, SelectItem } from '@ui-kitten/components';
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import { MaterialIcons } from '@expo/vector-icons';

import Chart from './Chart';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;









const AddDiet=()=>{


    
     






    const DATAX = [
        { text: '#1',img:'https://cdn.pixabay.com/photo/2015/07/17/09/20/bmw-848904_1280.jpg'},
        { text: '#2' },
        { text: '#3' },
      ];


     
      

      


     







    const [limit,setLimit]=useState('26');
    const [quantity,setQuantity]=useState('');
    const [date, setDate] = React.useState(new Date());
   

    
    const renderItem = data => (
        <View key={data.text} style={styles.item}>
         
          <ImageBackground source={data.img} style={{width:'100%',height:'100%'}}><Text>Check</Text></ImageBackground>
    
        </View>
      );


   





    return(
        
            <View style={styles.container}>
                <View style={{marginTop:-40}}>               
                <Text style={{fontSize:24,fontWeight:'bold',paddingBottom:7}}>Days Limit Left: {limit}</Text>
                <Carousel
                    pagination={Pagination}
                    renderItem={renderItem}
                    data={DATAX}
                    
                />
                </View>
                
              <View>
                <Chart />
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

export default AddDiet;



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