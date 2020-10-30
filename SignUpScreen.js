import React, { PureComponent, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatePicker from '@react-native-community/datetimepicker';



export const SignUpScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        //     // setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(!show);
    };

    const onCancel = () => {
        setShow(!show);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Create Account
            </Text>

            <View>
                <View style={styles.inputField}>
                    <FontAwesome style={styles.icon} name="user" />
                    <TextInput style={styles.textInput} placeholder="Full Name"
                        value={name} onChangeText={setName} />
                </View>

                <View style={styles.inputField}>
                    <FontAwesome style={styles.icon} name="envelope" />
                    <TextInput style={styles.textInput} placeholder="Email"
                        value={email} onChangeText={setEmail} />
                </View>

                <View style={styles.inputField}>
                    <FontAwesome style={styles.passwordIcon} name="lock" />
                    <TextInput style={styles.textInput} placeholder="Password"
                        secureTextEntry={true} value={password} onChangeText={setPassword} />
                </View>

                <View style={styles.inputField}>
                    <FontAwesome style={styles.icon} name="globe" />
                    <TextInput style={styles.textInput} placeholder="Country"
                        value={country} onChangeText={setCountry} />
                </View>

                <DatePicker
                    value={date}
                    onDateChange={setDate}
                    placeholder="Select date of birth!"
                    style={styles.dateTime}
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
                />

                <TouchableOpacity style={styles.btn}>
                    <Text>REGISTER</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80,
        // backgroundColor: '#00ff88'
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60,
        fontSize: 30
    },
    inputField: {
        paddingTop: 30,
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: 220
    },
    icon: {
        marginTop: 5,
        marginLeft: 2,
        fontSize: 20
    },
    passwordIcon: {
        fontSize: 25,
        marginLeft: 4,
        width: 20
    },
    textInput: {
        marginLeft: 10
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
        backgroundColor: '#eeeeee',
        borderRadius: 15
    }
});