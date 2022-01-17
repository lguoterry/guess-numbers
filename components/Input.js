import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
const Input = props=> {
    return <TextInput {...props} style={{...styles.input, ...props.style}} placeholder='Pick a number'/>
};

const styles = StyleSheet.create({
    input: {
        height: 34,
        fontSize: 20,
        color: Colors.primary,
        marginVertical: 17,
    }
});
export default Input;