import { StyleSheet, SafeAreaView, Text, View, TextInput, Platform, Dimensions, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React, { PureComponent, useState } from 'react';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { Fontisto } from '@expo/vector-icons';

const pic2 = { uri: 'https://www.linkpicture.com/q/imageedit_3_4884348579.jpg' };

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Continue = () => {


    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');


    return (

        <SafeAreaView style={styles.container}>

            <ImageBackground style={styles.header} source={pic2}>
                <Text style={styles.text}>
                    Create Account
            </Text>

                <View>
                    <View style={styles.inputField}>
                        <FontAwesome5 name="weight-hanging" color="#EDDDDF" style={styles.icon} />
                        <TextInput style={styles.textInput1} placeholder="Weight"
                            value={weight} onChangeText={setWeight} placeholderTextColor="#EDDDDF" />
                        <RNPickerSelect
                            placeholder={{
                                label: 'Select Unit',
                                value: null,
                                color: 'red',
                            }}

                            style={{
                                inputAndroid: {
                                    fontSize: 34,
                                    color: 'white',
                                    backgroundColor: 'transparent',
                                    width: 120,
                                    marginLeft: 10

                                }
                            }}
                            placeholderColor='white'



                            onValueChange={(value) => console.log(value)}

                            items={[
                                { label: 'Kg', value: 'wgt1' },
                                { label: 'lbs', value: 'wgt2' },

                            ]}
                        />
                    </View>



                    <View style={styles.inputField}>
                        <MaterialCommunityIcons name="human-male" style={styles.heightIcon} color="#EDDDDF" />
                        <TextInput style={styles.textInput2} placeholder="Height"
                            value={height} onChangeText={setHeight} placeholderTextColor="#EDDDDF" />
                        <RNPickerSelect
                            placeholder={{
                                label: 'Select Unit',
                                value: null,
                                color: 'red',
                            }}

                            style={{
                                inputAndroid: {
                                    fontSize: 19,
                                    color: 'white',
                                    backgroundColor: 'transparent',
                                    width: 120,
                                    marginLeft: 10

                                }
                            }}
                            placeholderColor='white'



                            onValueChange={(value) => console.log(value)}

                            items={[
                                { label: 'Foot', value: 'ht1' },
                                { label: 'Meter', value: 'ht2' },

                            ]}
                        />
                    </View>

                    <View style={styles.inputField}>
                        <Feather name="users" style={styles.icon} />
                        <TextInput style={styles.textInput2} placeholder="Age"
                            value={age} onChangeText={setAge} placeholderTextColor="#EDDDDF" />
                    </View>

                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ color: 'white' }}>CONFIRM REGISTRATION</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ color: 'white', fontSize: 14, marginTop: 22 }}>Already Have An Account?
           <Text style={{ fontWeight: 'bold' }}>  Login Here</Text>
                </Text>
            </ImageBackground>

        </SafeAreaView>
    );

}


export default Continue;



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
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 120,
        paddingBottom: 14,
        fontSize: 40,
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
        marginTop: 12,
        marginLeft: 1,
        marginBottom: 4,
        fontSize: 30,
        color: 'white'
    },
    heightIcon: {
        fontSize: 54,
        marginLeft: -9,
        width: 36,
        color: 'white',
        marginTop: 1
    },
    textInput1: {
        marginLeft: 8,
        color: 'white', fontSize: 20
    },
    textInput2: {
        marginLeft: 16,
        color: 'white', fontSize: 20
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
})