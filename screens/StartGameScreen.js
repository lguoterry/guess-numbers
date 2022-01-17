import React, { useState } from 'react';
import { View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Text, Alert } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [approvedNumber, setApprovedNumber] = useState();
    const [approval, setApproval] = useState(false);
    const numberInputHandler = inputText => { 
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };
    const resetInputHandler = () => {
        setEnteredValue('');
        setApproval(false);
    };
    const approveNumberHandler = () => {
        const enteredNumber = parseInt(enteredValue);
        if (isNaN(enteredNumber)|| enteredNumber===0||enteredNumber>99) {
            Alert.alert(
                'Not this!',
                'Apple only guesses a number between 1 and 99.',
                [{text:'Fine', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }
        setApproval(true);
        setApprovedNumber(enteredNumber);
    };
    let result;
    if (approval) {
        result = (
            <NumberContainer onStart={props.onStart}> 
                {approvedNumber}
            </NumberContainer>
        );
    };

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View style={styles.screen}>
                <Card style={styles.inputContainer}>
                    <Input
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={5}
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <Button title='Nope' onPress={resetInputHandler} color={Colors.secondary} />
                        <Button title='Alright' onPress={approveNumberHandler} color={Colors.primary} />
                    </View>
                </Card>
                {result}
            </View>
        </TouchableWithoutFeedback>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    inputContainer: {
        marginTop: 20,
        width: '95%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 12
    },
});

export default StartGameScreen;