import React, { PureComponent, useState } from 'react';
import { StyleSheet,Text, View } from 'react-native';


export const MealsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Meals</Text>
            
        </View>
    );
}

export default MealsScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});