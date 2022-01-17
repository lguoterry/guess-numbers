import React from 'react';
import {
    Button,
    Text,
    StyleSheet,
} from 'react-native';
import Colors from '../constants/colors';
import Card from '../components/Card';

const NumberContainer = props => {
    return (<Card style={styles.container}>
        <Text style={styles.number}>
            {props.children}
        </Text>
        <Button title='Start' color={Colors.ternary} onPress={()=>props.onStart(props.children)}/>
    </Card>);
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        fontSize: 20,
        padding: 20,
        color: Colors.ternary,
    },
});

export default NumberContainer;