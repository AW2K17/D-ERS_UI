import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, TextInput, Platform, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';


const LENGTH = 6;
const Questions = () => {

    const [index, setIndex] = useState(0);

    const increaseIndex = () => {
      setIndex(Math.min(index + 1, LENGTH - 1));
    };
    const decreaseIndex = () => {
      setIndex(Math.max(index - 1, 0));
    };


    return (
        <View style={styles.container}>
            <Text style={styles.Qus}>Fitness Transformation You Intend To Achieve </Text>

            <TouchableOpacity onPress={increaseIndex}>
                <View style={styles.option}>
                    <Text style={styles.choice}>Lose Weight</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={increaseIndex}>
                <View style={styles.option2}>
                    <Text style={styles.choice}>Gain Weight</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={increaseIndex}>
                <View style={styles.option3}>
                    <Text style={styles.choice}>Maintain Current Physique</Text>
                </View>
            </TouchableOpacity>

            <AnimatedDotsCarousel
                length={LENGTH}
                currentIndex={index}
                maxIndicators={6}
                interpolateOpacityAndColor={true}
                activeIndicatorConfig={{
                    color: 'red',
                    margin: 3,
                    opacity: 1,
                    size: 8,
                }}
                inactiveIndicatorConfig={{
                    color: 'black',
                    margin: 3,
                    opacity: 0.5,
                    size: 8,
                }}
                decreasingDots={[
                    {
                        config: { color: 'black', margin: 3, opacity: 0.5, size: 6 },
                        quantity: 1,
                    },
                    {
                        config: { color: 'black', margin: 3, opacity: 0.5, size: 4 },
                        quantity: 1,
                    },
                ]}
            />

            {/* <TouchableOpacity
                style={{ borderWidth: 1, marginTop: 20, backgroundColor: 'white' }}
                onPress={increaseIndex}
            >
                <Text>Increase</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
                style={{ alignItems: 'center', width: 100, marginBottom: 10, backgroundColor: '#BF243D', padding: 15, borderRadius: 15 }}
                onPress={decreaseIndex}
            >
                <Text style={{ color: 'white' }}>Back</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,

    },

    Qus: {

        marginTop: 60,
        fontSize: 32,
        margin: 30
    },



    option:
    {
        width: 290,
        backgroundColor: 'black',
        borderRadius: 19,
        padding: 12,
        marginTop: 40,
        alignItems: 'center',

    },
    option2:
    {
        width: 290,
        backgroundColor: 'black',
        borderRadius: 19,
        padding: 12,
        marginTop: 60,
        alignItems: 'center',

    },

    option3:
    {
        width: 290,
        backgroundColor: 'black',
        borderRadius: 19,
        padding: 12,
        marginTop: 60,
        marginBottom: 60,
        alignItems: 'center',

    },

    choice: {

        color: 'white',
        fontSize: 14,
    }



});

export default Questions;
