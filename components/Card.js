import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const Card = props => {
    return (<View style={{ ...styles.card, ...props.style }}>
        {props.children}
    </View>);
};

const styles = StyleSheet.create({
    card: {
        shadowColor: Colors.primary,
        shadowOffset: { width: -5, height: 5 },
        shadowRadius: 5,
        shadowOpacity: 0.20,
        backgroundColor: 'white',
        padding:20,
        borderRadius: 8,
        elevation: 5,
    },
});

export default Card;