import React, { PureComponent, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Constants from 'expo-constants';
import Continue from './Continue';
import Signin from './Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import validator from 'validator';


const pic2 = { uri: 'https://www.linkpicture.com/q/imageedit_3_4884348579.jpg' };

const Stack = createStackNavigator();


// const MyStack = () => {
//     return (
//         <NavigationContainer>

//         </NavigationContainer>
//     );
// };

const Register = ({ navigation }) => {
    const [firstName, setFname] = useState('');
    const [lastName, setLname] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bmi, setBmi] = useState('');
    const [show,setShow]=useState('false');
  const [visible,setVisible]=useState('true');
  const [err1,setErr1]= useState('');
  const [err2,setErr2]= useState('');
  const [err3,setErr3]= useState('');
  const [err4,setErr4]= useState('');
  const [err5,setErr5]= useState('');

  function fnCheck(){

   
    if(firstName==""){
        setErr1("* Firstname Can't Be Empty");
    }
    else if (/\s/.test(firstName)) {
        setErr1("* Can't Have Spaces, Must Be A Single Word");
    }
    else{
        setErr1("");
        return 'true';
    }
}


function lnCheck(){

   
    if(lastName==""){
        setErr2("* Lastname Can't Be Empty");
    }
    else if (/\s/.test(lastName)) {
        setErr1("* Can't Have Spaces, Must Be A Single Word");
    }
    else{
        setErr2("");
        return 'true';
    }
}

function emailCheck(){

   
    if(email==""){
        setErr3("* Email Can't Be Empty");
    }
    else if(!validator.isEmail(email)){

        setErr3("*Invalid Email, Try Again");
    }
    else{
        setErr3("");
        return 'true';
    }
}


function pwdCheck(){

   
    if(password==""){
        setErr4("* Password Can't Be Empty");
    }
    else if(password.length<7){

        setErr4("Password Must Be At Least 7 Characters Long");
    }
    else{
        setErr4("");
        return 'true';
    }
}



function bmiCheck(){

   
    if(bmi==""){
        setErr5("* BMI Can't Be Empty");
    }
    
    else{
        setErr5("");
        return 'true';
    }
}










  function Validations(){

    const c1=fnCheck();
    const c2=lnCheck();
    const c3=emailCheck();
    const c4=pwdCheck();
    const c5=bmiCheck();

    if(c1=='true' && c2=='true' && c3=='true' && c4=='true' && c5=='true')
    {
        const ran={fn:firstName,ln:lastName,eml:email,pwd:password,bm:bmi};
        console.log(ran);
        navigation.navigate( 'Continue',{screen: 'Continue', params: {ran}});
    }
    
  }

    return (
        <ImageBackground style={styles.container} source={pic2}>
            <Text style={styles.text}>
                Sign Up With Your Account!
            </Text>

            <View>
                <View style={styles.inputField}>
                    <FontAwesome style={styles.icon} name="user" />
                    <TextInput style={styles.textInput} placeholder="First Name"
                        value={firstName} onChangeText={setFname} placeholderTextColor="#EDDDDF" />
                </View>
                <Text style={{color: 'red'}}>{err1}</Text>

                <View style={styles.inputField}>
                    <FontAwesome style={styles.icon} name="user" />
                    <TextInput style={styles.textInput} placeholder="Last Name"
                        value={lastName} onChangeText={setLname} placeholderTextColor="#EDDDDF" />
                </View>
                <Text style={{color: 'red'}}>{err2}</Text>

                <View style={styles.inputField}>
                    <FontAwesome style={styles.icon} name="envelope" />
                    <TextInput style={styles.textInput} placeholder="Email"
                        value={email} onChangeText={setEmail} placeholderTextColor="#EDDDDF" />
                        
                </View>
                <Text style={{color: 'red'}}>{err3}</Text>
                        


                <View style={styles.inputField2}>
                    <FontAwesome style={styles.passwordIcon} name="lock" />
                    <TextInput style={{marginLeft:10,color:'white',marginTop:22}} placeholder="Password"
                        secureTextEntry={visible} value={password} onChangeText={setPassword} placeholderTextColor="#EDDDDF" />
                     <TouchableOpacity style={{marginTop:30}} onPress={()=>{setShow(!show),setVisible(!visible)}}>
            <MaterialCommunityIcons name={show===false ? 'eye-outline' : 'eye-off-outline'} size={26} color={'white'}/>
          </TouchableOpacity>
                </View>
                <Text style={{color: 'red'}}>{err4}</Text>

                <View style={styles.inputField}>
                    <FontAwesome style={styles.icon} name="globe" />
                    <TextInput style={styles.textInput} placeholder="BMI"
                        value={bmi} onChangeText={setBmi} placeholderTextColor="#EDDDDF" keyboardType={'numeric'} />
                </View>
                <Text style={{color: 'red'}}>{err5}</Text>
                {/*  
    <View>
        <Button onPress={showDatepicker} title="Select date of birth" />
    </View>
    {show && (
        <DateTimePicker
            testID="dateTimePicker"
            value={date}
            onChange={new Date()}
            placeholder="Select date of birth!"
            format="YYYY-MM-DD"
            customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36
                }
            }}
            mode="date"
            display="default"
        />
    )}
            */}

                <TouchableOpacity style={styles.btn} onPress={

                  /*  const ran={fn:firstName,ln:lastName,eml:email,pwd:password,bm:bmi}
                    
                    console.log(ran) navigation.navigate( 'Continue',{screen: 'Continue', params: {ran}})}*/
                    Validations
                    
                    }>
                    <Text style={{ color: 'white' }}>NEXT</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ color: 'white', fontSize: 14, marginTop: 22 }}>Already Have An Account?
            <Text style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('Signin')}>  Login Here</Text>
            </Text>

        </ImageBackground>
    )

}

export const SignUpScreen = ({ navigation }) => {

    return (
       
            <Stack.Navigator initialRouteName="Register">
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Continue"
                    component={Continue}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Signin"
                    component={Signin}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
      
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingTop: Constants.statusBarHeight
        // backgroundColor: '#00ff88'
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 14,
        fontSize: 38,
        marginLeft: 24,
        color: 'white'
    },
    inputField: {
        paddingTop: 40,
        flexDirection: 'row',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        width: 220,

    },
    
    inputField2: {
        paddingTop: 20,
        flexDirection: 'row',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        width: 220,

    },
    icon: {
        marginTop: 5,
        marginLeft: 2,
        marginBottom: 4,
        fontSize: 20,
        color: 'white'
    },
    passwordIcon: {
        fontSize: 25,
        marginLeft: 4,
        width: 20,
        color: 'white',marginTop:30
    },
    textInput: {
        marginLeft: 10,
        color: 'white'
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
        backgroundColor: '#BF243D',
    }
});
