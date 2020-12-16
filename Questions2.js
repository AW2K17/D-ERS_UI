import React,{useState} from 'react';
import { StyleSheet, Button, Text,View ,TextInput,Platform,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';


const Questions2 = () => {

    const [firstName, setFname] = useState('');

  return (

    <View style={styles.container}>
       <Text style={styles.Qus}>Enter Your Waist / Lats Length </Text> 
       <View style={{ flexDirection:'row',marginTop:70 ,  borderBottomWidth:2,borderTopWidth:2,borderRightWidth:2,borderLeftWidth:2,borderRadius:9}}>
        <TextInput style={styles.textInput} placeholder="Length"
                        value={firstName} onChangeText={setFname} placeholderTextColor="black" />
        <RNPickerSelect
                 placeholder={{
              label: 'Select Unit',
              value: null,
              color: 'red',
            }}

            style={{inputAndroid:{
                fontSize:19,
                color: 'black',
                backgroundColor: 'transparent',
                width:120,
                marginLeft:10,
                

            }}}
            placeholderColor= 'black'
            
            
            
            onValueChange={(value) => console.log(value)}
            
            items={[
                { label: 'Inches', value: 'ht1' },
                { label: 'CM', value: 'ht2' },
                
            ]}
        />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    
  },

Qus:{

    marginTop:100,
    fontSize:39,
    margin:30,
    fontWeight:'normal'
},

textInput: {
    
    marginLeft: 10,
    color:'black',
    marginRight:-55,
    fontSize:27,
    width:143
    

}

  
 
});

export default Questions2;
