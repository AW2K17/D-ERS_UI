import React, { PureComponent, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import LoginScreen from './Login';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const Logout = ({ navigation }) => {


    useEffect(() => {
        function Signout() {

            axios.post('http://192.168.0.105:3010/api-gateway/sign-out/user', { withCredentials: true })
                .then(response => {
                    // console.log(document.cookie)
                    // var c = document.cookie.getCookie('express:sess')
                    // document.cookie =
                    //     'express:sess=cookieremove; expires=Thu, 22 Dec 2019 20:47:11 UTC; path=/'
                    // response.clearCookie('express:sess')
                    console.log(response);
                    // console.log(document.cookie)

                    navigation.navigate('Login');

                }).catch(error => {
                    console.log(error);
                })
        }
        Signout()
    }, []);

    
    return (
        <View style={styles.container}>


        </View>
    );
}

export const LogoutScreen = ({ navigation }) => {

    return (

        <Stack.Navigator initialRouteName="Logout">
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen independent={true}
                name="Logout"
                component={Logout}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>

    );
}

export default LogoutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});