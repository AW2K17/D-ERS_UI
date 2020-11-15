import React, { PureComponent, useState } from 'react';
import { StyleSheet,Text, View } from 'react-native';


export const WorkoutsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Workouts</Text>
            
        </View>
    );
}

export default WorkoutsScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});