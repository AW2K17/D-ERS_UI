import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, TextInput, Platform, Dimensions, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import SignUpScreen from './SignUpScreen';
import Dashboard from './Dashboard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
import { Button, Card, Modal, Text } from '@ui-kitten/components';
import Signin from './Signin';
import { NetworkInfo } from "react-native-network-info";
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const pic = { uri: 'https://www.linkpicture.com/q/log2.jfif' };

const Stack = createStackNavigator();

console.log(windowWidth);



const MAX_LEN = 15,
  MIN_LEN = 6,
  PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];
















const Login = ({ navigation }) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [show, setShow] = useState('false');
  const [visible, setVisible] = useState(true);
  const [visible1, setVisible1] = React.useState('');
  const [visible2, setVisible2] = React.useState('');
  const [visible3, setVisible3] = React.useState('');

  useEffect(() => {
    // async function getIP() {
    //   NetworkInfo.getIPV4Address().then(ipv4Address => {
    //     console.log(ipv4Address);
    //     this._continuePayment(ipv4Address);
    //   });
    // }
    // getIP();
    async function fetchData() {
      try {
        console.log('I am running')
        axios.get('http://192.168.0.102:3010/api-gateway/current-user/user', { withCredentials: true })
          .then((res) => {
            console.log(res);
            console.log('inside')
            if (res.status == '401') {
              navigation.navigate('Login')
            }
            else {
              navigation.navigate('Dashboard')
            }
          }).catch((error) => {
            navigation.navigate('Login')
            console.log(error)
          })


      }
      catch (err) {
        // navigation.navigate('Signin')
        console.log(err);
      }
    }
    fetchData();
  }, []);


async function loginKro(){



   AsyncStorage.setItem('@eml',JSON.stringify(email));


  console.log('nikala!');
  
  console.log('fff');

 const ran = {

            email: email,
            password: password

          }

          
          console.log(ran);
          try {
            console.log('Login running')
            axios.post('http://192.168.0.102:3010/api-gateway/sign-in/user', ran, { withCredentials: true })
              .then(response => {
                console.log('Login inside')
                console.log(response);
                setVisible1(false)
         
                //AsyncStorage.setItem('@eml',JSON.stringify(email));
                navigation.navigate('Dashboard');

              }).catch(error => {
                if (error) {
                  console.log("Inside", error)
                  setVisible1(true);
                  // setError(error);
                  setError("Email Or Password Not Correct, Make Sure You're Registered!");
                }
              })
          }
          catch (error) {
            console.log(error);
          }


}






  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground style={styles.header} source={pic}>
        <Text style={{ fontSize: 50, marginTop: 100, fontWeight: 'bold', color: 'white' }}>D&ERS</Text>

        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#EDDDDF',width:windowWidth*0.6198 }}>
          <FontAwesome name="user-o" size={24} color="#EDDDDF" style={{ marginTop: 70 }} />
          <TextInput placeholder='Email' placeholderTextColor="#EDDDDF" style={styles.inner1} onChangeText={setEmail} />
        </View>

        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#EDDDDF',width:windowWidth*0.6298 }}>
          <Feather name="lock" size={24} color="#EDDDDF" style={{ marginTop: 70 }} />
          <TextInput placeholder='Password' placeholderTextColor="#EDDDDF" keyboardType="default" secureTextEntry={visible} style={styles.inner2} onChangeText={setPassword} />
          <TouchableOpacity style={{ marginTop: 70 }} onPress={() => { setShow(!show), setVisible(!visible) }}>
            <MaterialCommunityIcons name={show === false ? 'eye-outline' : 'eye-off-outline'} size={26} color={'white'} />
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.Btn} onPress={()=>loginKro()}
        >
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableOpacity>

        {/* <Text style={{color:'red'}}>{error}</Text> */}
        <Modal
          visible={visible1}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setVisible1(false)}>
          <Card disabled={true}>
            <Text>{error}</Text>
            <Button onPress={() => setVisible1(false)} style={{ width: 127, backgroundColor: 'red', marginLeft: 100, marginTop: 10, borderRadius: 20 }}>
              OK
            </Button>
          </Card>
        </Modal>



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
          <Text style={{ fontWeight: 'bold', color: 'white' }} onPress={() => navigation.navigate('Signup')} >  Create Here</Text>
        </Text>
      </ImageBackground>

    </SafeAreaView>
  );
}

export const LoginScreen = ({ navigation }) => {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen independent={true}
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen independent={true}
          name="Signup"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen independent={true}
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
    width: windowWidth*0.493,
    marginLeft: 10,
    color: 'white'
  },


  inner2: {


    marginTop: 70,
    width: windowWidth*0.493,
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

export default LoginScreen;