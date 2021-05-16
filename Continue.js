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
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './Dashboard';
import Signin from './Login';
import axios from 'axios';
import { Button, Card, Modal } from '@ui-kitten/components';
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

const pic2 = { uri: 'https://www.linkpicture.com/q/imageedit_3_4884348579.jpg' };

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

const Continue = ({ navigation, route }) => {

    const { fn, ln, eml, pwd } = route.params.ran;
    //console.log(fn);




    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
    const [selectedIndex2, setSelectedIndex2] = React.useState(new IndexPath(0));
    const [inch, setInch] = useState('');
    const [age, setAge] = useState('');
    const [err1, setErr1] = useState('');
    const [err2, setErr2] = useState('');
    const [err3, setErr3] = useState('');
    const [visible1, setVisible1] = useState('');
    const [visible2, setVisible2] = useState('');
    const [visible3, setVisible3] = useState('');

    const data1 = [
        'Kg',
        'Pounds',
    ];

    const data2 = [
        "FeetInches",
        'Meter',
    ];




    const displayValue = data1[selectedIndex.row];
    const displayValue2 = data2[selectedIndex2.row];

    const renderOption = (title) => (
        <SelectItem title={title} />
    );




    function wgtCheck() {

        if (weight == '') {
            setErr1("Weight Can't Be Empty");
            setVisible1('true');
        }
        else {
            setErr1('');
            setVisible1('');
            return 'true';
        }
    }

    function hgtCheck() {

        if (height == '') {
            setErr2("Height Can't Be Empty");
            setVisible2('true');
        }
        else {
            setErr2('');
            setVisible2('');
            return 'true';
        }

    }

    function ageCheck() {

        if (age == '') {
            setErr3("Age Can't Be Empty");
            setVisible3('true');
        }
        else {
            setErr3('');
            setVisible3('');
            return 'true';
        }
    }







    function Validations() {

        const c1 = wgtCheck();
        const c2 = hgtCheck();
        const c3 = ageCheck();

        if (c1 == 'true' && c2 == 'true' && c3 == 'true') {



            const ran = {

                firstName: fn,
                lastName: ln,
                email: eml,
                password: pwd,
                bmi: weight / Math.pow(height + inch, 2),
                weight: weight,
                height: height,
                age: age,


            }


            // axios.get('http:// 192.168.0.105:3010/api-gateway/current-user/user', { withCredentials: true })
            //     .then(response => {
            //         console.log(response.data)
            //     })
            //     .catch(error => {
            //         console.log(error)
            //     })







            console.log(ran);
            try{
                axios.post('http://192.168.0.105:3010/api-gateway/sign-up/user', ran, { withCredentials: true })
                .then(response => {
                    console.log(response.data);
                    navigation.navigate('Dashboard')
                })
                .catch(error => {
                    console.log(error);
                })
            
            }
            catch (error) {
                console.log(error);
            }
        }

    }


    const handleHeighttF = (e) => {
        console.log(displayValue2);


        if (displayValue2 === "FeetInches") {

            const i = e.toString().split(".")
            setHeight(parseFloat(i[0]) * 0.3048)
            handleHeighttI(i[1]);
        }
        else {

            handleHeighttM(e)
        }
        console.log(height)
        console.log(inch)


    }
    const handleHeighttM = (e) => {
        setHeight(parseFloat(e))
    }
    const handleHeighttI = (e) => {
        if (displayValue2 === "FeetInches") {
            setInch(parseFloat(e) * 0.0254)
        }

    }




    const handleWeightOptions = (e) => {



        setSelectedIndex(e);

        if (e === 1)
            handleWeight(weight);

    }

    const handleHeightOptions = (e) => {

        setSelectedIndex2(e);

        if (e === 0) {
            handleHeight(height);
        }
    }




    const handleWeight = (e) => {

        if (displayValue === "Pounds") {
            if (e)
                setWeight(parseFloat((parseFloat(e) * 0.453592).toFixed(2)))


        }
        else {
            if (e)
                setWeight(parseFloat((parseFloat(e)).toFixed(2)))
        }
        console.log(e);
        console.log(displayValue);
        console.log(weight);

    }





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
                            onChangeText={handleWeight} placeholderTextColor="#EDDDDF" keyboardType={'numeric'} />

                        {/*<RNPickerSelect
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
                           
                            items={[
                                { label: 'Kg', value: 'wgt1' },
                                { label: 'lbs', value: 'wgt2' },
                            ]}
                        />*/}

                        <Select level='1'
                            style={styles.select}
                            placeholder='Default'
                            value={displayValue}
                            selectedIndex={selectedIndex}
                            onSelect={index => handleWeightOptions(index)}>
                            {data1.map(renderOption)}
                        </Select>


                    </View>


                    {/*<Text style={{color: 'red'}}>{err1}</Text>*/}

                    <Modal
                        visible={visible1}
                        backdropStyle={styles.backdrop}
                        onBackdropPress={() => setVisible1(false)}>
                        <Card disabled={true}>
                            <Text>{err1}</Text>
                            <Button onPress={() => setVisible1(false)} style={{ width: 127, backgroundColor: 'red', marginLeft: 100, marginTop: 10, borderRadius: 20 }}>
                                OK
                    </Button>
                        </Card>
                    </Modal>



                    <View style={styles.inputField}>
                        <MaterialCommunityIcons name="human-male" style={styles.heightIcon} color="#EDDDDF" />
                        <TextInput style={styles.textInput2} placeholder="Height"
                            onChangeText={handleHeighttF} placeholderTextColor="#EDDDDF" keyboardType={'numeric'} />
                        {/*<RNPickerSelect
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
                        />*/}


                        <Select level='1'
                            style={styles.select}
                            placeholder='Default'
                            value={displayValue2}
                            selectedIndex={selectedIndex2}
                            onSelect={index => handleHeightOptions(index)}>
                            {data2.map(renderOption)}
                        </Select>

                    </View>
                    {/*<Text style={{color: 'red'}}>{err2}</Text>*/}

                    <Modal
                        visible={visible2}
                        backdropStyle={styles.backdrop}
                        onBackdropPress={() => setVisible2(false)}>
                        <Card disabled={true}>
                            <Text>{err2}</Text>
                            <Button onPress={() => setVisible2(false)} style={{ width: 127, backgroundColor: 'red', marginLeft: 100, marginTop: 10, borderRadius: 20 }}>
                                OK
                </Button>
                        </Card>
                    </Modal>

                    <View style={styles.inputField}>
                        <Feather name="users" style={styles.icon} />
                        <TextInput style={styles.textInput2} placeholder="Age"
                            value={age} onChangeText={setAge} placeholderTextColor="#EDDDDF" keyboardType={'numeric'} />
                    </View>
                    {/*<Text style={{color: 'red'}}>{err3}</Text>*/}
                    <Modal
                        visible={visible3}
                        backdropStyle={styles.backdrop}
                        onBackdropPress={() => setVisible3(false)}>
                        <Card disabled={true}>
                            <Text>{err3}</Text>
                            <Button onPress={() => setVisible3(false)} style={{ width: 127, backgroundColor: 'red', marginLeft: 100, marginTop: 10, borderRadius: 20 }}>
                                OK
                </Button>
                        </Card>
                    </Modal>

                    <TouchableOpacity style={styles.btn}
                        onPress={Validations}>

                        <Text style={{ color: 'white' }}>CONFIRM REGISTRATION</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ color: 'white', fontSize: 14, marginTop: 22 }}>Already Have An Account?
           <Text style={{ fontWeight: 'bold' }} onPress={() => navigation.navigate('Login')}>  Login Here</Text>
                </Text>
            </ImageBackground>

        </SafeAreaView>
    );

}

export const ContinueScreen = ({ navigation }) => {

    return (
        <Stack.Navigator initialRouteName="Continue">
            <Stack.Screen
                name="Continue"
                component={Continue}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Signin}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>


    );
}


export default ContinueScreen;



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
    },
    select: {

        marginLeft: 20,
        marginTop: 20,
        width: 120
    }
})