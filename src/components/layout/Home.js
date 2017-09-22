import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from '../presentation';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header text={"All Messages"} /> 
                <Text style={styles.welcome}>
                    Welcome to Snapchat Clone!
                </Text>
                <Text style={styles.instruction}>
                    Edit index.ios.js
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255,255,255)',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default Home