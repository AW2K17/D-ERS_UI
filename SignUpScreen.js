import { StyleSheet,SafeAreaView, Text,View ,TextInput,Platform,Dimensions,TouchableOpacity,ImageBackground,KeyboardAvoidingView} from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React, { PureComponent, useState } from 'react';
import { Fontisto } from '@expo/vector-icons';

const pic2= {uri:'https://www.linkpicture.com/q/imageedit_3_4884348579.jpg'};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Test =()=>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
  
    const [show, setShow] = useState(false);
    return(
   







    <SafeAreaView style={styles.container}>

        <ImageBackground style={styles.header} source={pic2}>
        <Text style={styles.text}>
                Create Account
            </Text>

            <View>
                <View style={styles.inputField}>
                <FontAwesome name="user-o" color="#EDDDDF" style={styles.icon} />
                    <TextInput style={styles.textInput} placeholder="Full Name"
                        value={name} onChangeText={setName} placeholderTextColor="#EDDDDF" />
                </View>

                <View style={styles.inputField}>
                <Fontisto name="email" size={24} color="black" style={styles.icon} />
                    <TextInput style={styles.textInput} placeholder="Email"
                        value={email} onChangeText={setEmail}  placeholderTextColor="#EDDDDF"/>
                </View>

                <View style={styles.inputField}>
                <Feather name="lock" size={24} color="#EDDDDF"  style={styles.passwordIcon} />
                    <TextInput style={styles.textInput} placeholder="Password"
                        secureTextEntry={true} value={password} onChangeText={setPassword}  placeholderTextColor="#EDDDDF"/>
                </View>

                <View style={styles.inputField}>
                    <FontAwesome style={styles.icon} name="globe" />
                    <TextInput style={styles.textInput} placeholder="Country"
                        value={country} onChangeText={setCountry} placeholderTextColor="#EDDDDF" />
                </View>
             
                <TouchableOpacity style={styles.btn}>
                    <Text style={{color:'white'}}>REGISTER</Text>
                </TouchableOpacity>
            </View>
            <Text style={{color: 'white',fontSize:14,marginTop:22}}>Already Have An Account?
           <Text style={{fontWeight:'bold'}}>  Login Here</Text>
           </Text>
        </ImageBackground>

    </SafeAreaView>
    );

}


export default Test;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      
      paddingTop: Constants.statusBarHeight,
      
    },
  
    header:{
  
      flex:1,
      width:windowWidth,
      alignItems: 'center',
      height:windowHeight,
    
     },
     text: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 120,
        paddingBottom:14,
        fontSize: 30,
        color:'white'
    },
    inputField: {
        paddingTop: 40,
        flexDirection: 'row',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        width: 220,
       
    },
    icon: {
        marginTop: 5,
        marginLeft: 2,
        marginBottom:4,
        fontSize: 20,
        color:'white'
    },
    passwordIcon: {
        fontSize: 25,
        marginLeft: 1,
        width: 20,
        color:'white'
    },
    textInput: {
        marginLeft: 10,
        color:'white'
    },
    dateTime: {
        marginTop: 20,
        width: 220
    },
    btn: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40,
        padding: 10,
        width: 220,
        borderRadius: 15,
        backgroundColor:'#BF243D',
    }
})