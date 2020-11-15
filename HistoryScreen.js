import React, { PureComponent, useState } from 'react';
import { StyleSheet,Text, View } from 'react-native';


export const HistoryScreen = () => {
    return (
        <View style={styles.container}>
            <Text>History</Text>
            
        </View>
    );
}

export default HistoryScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});