import React, { PureComponent, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Constants from 'expo-constants';
import Continue from './Continue';
import Signin from './Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


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
    const [country, setCountry] = useState('');

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

                <View style={styles.inputField}>
                    <FontAwesome style={styles.icon} name="user" />
                    <TextInput style={styles.textInput} placeholder="Last Name"
                        value={lastName} onChangeText={setLname} placeholderTextColor="#EDDDDF" />
                </View>

                <View style={styles.inputField}>
                    <FontAwesome style={styles.icon} name="envelope" />
                    <TextInput style={styles.textInput} placeholder="Email"
                        value={email} onChangeText={setEmail} placeholderTextColor="#EDDDDF" />
                </View>

                <View style={styles.inputField}>
                    <FontAwesome style={styles.passwordIcon} name="lock" />
                    <TextInput style={styles.textInput} placeholder="Password"
                        secureTextEntry={true} value={password} onChangeText={setPassword} placeholderTextColor="#EDDDDF" />
                </View>

                <View style={styles.inputField}>
                    <FontAwesome style={styles.icon} name="globe" />
                    <TextInput style={styles.textInput} placeholder="Country"
                        value={country} onChangeText={setCountry} placeholderTextColor="#EDDDDF" />
                </View>
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

                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Continue')}>
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
        <NavigationContainer>
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
        </NavigationContainer>

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
        color: 'white'
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