import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, Platform, Dimensions, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import SignUpScreen from './SignUpScreen';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const pic = { uri: 'https://www.linkpicture.com/q/log2.jfif' };

const Stack = createStackNavigator();

const Login = ({ navigation }) => {
  
  
    const [firstName, setFname] = useState('');
  const [password, setPassword] = useState('');


  
  
  
  return (
    <SafeAreaView style={styles.container}>

      <ImageBackground style={styles.header} source={pic}>
        <Text style={{ fontSize: 50, marginTop: 100, fontWeight: 'bold', color: 'white' }}>D&ERS</Text>

        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#EDDDDF' }}>
          <FontAwesome name="user-o" size={24} color="#EDDDDF" style={{ marginTop: 70 }} />
          <TextInput placeholder='Firstname' placeholderTextColor="#EDDDDF" style={styles.inner1}  onChangeText={setFname} />
        </View>

        <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#EDDDDF' }}>
          <Feather name="lock" size={24} color="#EDDDDF" style={{ marginTop: 70 }} />
          <TextInput placeholder='Password' placeholderTextColor="#EDDDDF" secureTextEntry={true} style={styles.inner2} onChangeText={setPassword} />
        </View>

        <TouchableOpacity>
          <View style={styles.Btn}>
            <Text style={{ color: 'white', fontSize: 15 }}>LOGIN</Text>
          </View>
        </TouchableOpacity>

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
          <Text style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('Register')} >  Create Here</Text>
        </Text>
      </ImageBackground>

    </SafeAreaView>
  )
}

const Signin = ({ navigation }) => {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
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

    marginTop: 70,
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
