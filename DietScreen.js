import React, { PureComponent, useState } from 'react';
import { StyleSheet,Text, View } from 'react-native';


export const DietScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Diet</Text>
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