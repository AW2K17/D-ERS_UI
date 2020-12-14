import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput,Button, Platform, Dimensions, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import SignUpScreen from './SignUpScreen';
import Dashboard from './Dashboard';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const pic = { uri: 'https://www.linkpicture.com/q/log2.jfif' };

const Stack = createStackNavigator();

const Login = ({ navigation }) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError]=useState('');
  const [show,setShow]=useState('false');
  const [visible,setVisible]=useState('true');





  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground style={styles.header} source={pic}>
        <Text style={{ fontSize: 50, marginTop: 100, fontWeight: 'bold', color: 'white' }}>D&ERS</Text>

        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#EDDDDF' }}>
          <FontAwesome name="user-o" size={24} color="#EDDDDF" style={{ marginTop: 70 }} />
          <TextInput placeholder='Email' placeholderTextColor="#EDDDDF" style={styles.inner1} onChangeText={setEmail} />
        </View>

        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#EDDDDF' }}>
          <Feather name="lock" size={24} color="#EDDDDF" style={{ marginTop: 70 }} />
          <TextInput placeholder='Password' placeholderTextColor="#EDDDDF" secureTextEntry={visible} style={styles.inner2} onChangeText={setPassword} />
          <TouchableOpacity style={{marginTop:70}} onPress={()=>{setShow(!show),setVisible(!visible)}}>
            <MaterialCommunityIcons name={show===false ? 'eye-outline' : 'eye-off-outline'} size={26} color={'white'}/>
          </TouchableOpacity>
        </View>

        <Button title={'Login'} style={styles.Btn}  onPress={()=>{ 
            const ran={
                
                email: email,
                password: password
            
            }


            console.log(ran);
            
            axios.post('http://localhost:3010/api-gateway/sign-in/user',ran,{withCredentials : true}).then(response =>{
                console.log(navigation);
                
                navigation.navigate('dash');
                
            }).catch(error => {
                if(error){
                  setError("Email Or Password Not Correct, Make Sure You're Registered!");
                }
            })
        }}
           />
           <Text style={{color:'red'}}>{error}</Text>

          

        <Text style={{ color: 'white', fontSize: 18, marginTop: 30 }}>Or Join With</Text>

        <View style={{ flexDirection: 'row', marginTop: 28 }}>

          <View style={styles.FB}>
            <Text style={{ color: 'white', fontSize: 15, marginRight: 10 }}>Facebook</Text>
            <FontAwesome name="facebook" size={24} color="white" />
          </View>
          <View style={styles.Google}>
            <Text style={{ color: 'white', fontSize: 15, marginRight: 16 }}>Google</Text>
            <FontAwesome name="google" size={24} color="white" />
          </View>

        </View>

        <Text style={{ color: 'white', fontSize: 14, marginTop: 22 }}>Don't Have An Account?
          <Text style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('signup')} >  Create Here</Text>
        </Text>
      </ImageBackground>

    </SafeAreaView>
  )
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    paddingTop: Constants.statusBarHeight,

  },

  header: {

    flex: 1,
    width: windowWidth,
    alignItems: 'center',
    height: windowHeight,





  },

  inner1: {


    marginTop: 70,
    width: 203,
    marginLeft: 10,
    color: 'white'
  },


  inner2: {


    marginTop: 70,
    width: 203,
    marginLeft: 10,
    color: 'white',

  },

  Btn: {

    marginTop: 90,
    borderRadius: 20,
    width: 244,
    backgroundColor: '#BF243D',
    alignItems: 'center',
    padding: 10,
  },

  FB: {

    width: 120,
    backgroundColor: '#0D1E82',
    padding: 10,
    marginRight: 28,
    flexDirection: 'row',


  },

  Google: {

    width: 120,
    backgroundColor: '#BF4811',
    padding: 10,
    flexDirection: 'row',


  }



});

export default Login;
