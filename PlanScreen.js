import React, { PureComponent, useState } from 'react';
import { StyleSheet,Text, View } from 'react-native';


export const PlanScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Plan</Text>
            
        </View>
    );
}

export default PlanScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});