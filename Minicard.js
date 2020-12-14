import  React,{useState} from 'react';
import { Button, View, TextInput ,Image,Text,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import Constant from 'expo-constants';
import {Card} from 'react-native-paper';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




const Minicard=(props)=> {
    return(
    
    <View style={styles.container}>
        

        <Card style={{paddingTop:35,paddingBottom:35,width:windowWidth,marginTop:42}}>
                <View style={{flexDirection: 'row'}}>
                <Image source={{uri:`${props.url}`}} style={{width:100,height:80,marginLeft:7}}/>
                <Text style={{fontSize:12,marginLeft:35,fontWeight: 'bold'}}>{props.title}{"\n"}</Text>
                
                </View>
                <TouchableOpacity style={{width:74,height:34,backgroundColor:'#7A0D0D',marginLeft:274,borderRadius:20}}>
                    <Text style={{color:'white',fontSize:12,marginTop:8,marginLeft:19}}>Add</Text>
                </TouchableOpacity>

                </Card>


    </View>

    
    );

}


export default Minicard;


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});