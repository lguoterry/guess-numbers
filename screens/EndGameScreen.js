import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'; 

const EndGameScreen = props => {
    return (<View style={styles.screen}>
        <Text>Gotcha!</Text>
        <Text>{props.selection} </Text>
        <Text>Apple finds out your number after {props.rounds} tries! </Text>
        <Button title='Try again' onPress={props.onRestart}/>
    </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default EndGameScreen
