import React, { PureComponent, useState } from 'react';
import { StyleSheet,Text, View } from 'react-native';


export const UsersScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Users</Text>
            
        </View>
    );
}

export default UsersScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});