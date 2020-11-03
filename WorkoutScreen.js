import React, { PureComponent, useState } from 'react';
import { StyleSheet,Text, View } from 'react-native';


export const WorkoutScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Workout</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});