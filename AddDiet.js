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
        { text: '#1',img:'data:image/jpeg;base64,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'},
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