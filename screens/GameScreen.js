import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Button, Text, Alert } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';

const generateRandBetween = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
const GameScreen = props => {
    const [guess, setGuess] = useState(generateRandBetween(1, 100));
    const low = useRef(1);
    const high = useRef(100);
    const [rounds, setRounds] = useState(0);
    const {selection, onEnd} = props;
    useEffect(() => {
        if (guess===props.selection) {
            props.onEnd(rounds+1);
        }
    }, [
        guess,
        selection,
        onEnd,
    ]);

    const nextGuessHandler = direction => {
        if ((direction && props.selection < guess) || (!direction && props.selection > guess)) {
            Alert.alert(
                'Don\'t lie!',
                'Apple can tell if you do.',
                [{ text: 'Oops', style: 'cancel' }]
            );
            return;
        }
        if (direction) {
            low.current = guess + 1;
        } else {
            high.current = guess;
        }
        setGuess(generateRandBetween(low.current, high.current));
        setRounds(rounds=>rounds+1);
    };
    return (
        <View style={styles.screen}>
            <Card style={styles.guessContainer}>
                <Text style={styles.guess}>
                    Apple guesses
                </Text>
                <Text style={styles.guess}>
                    {guess}
                </Text>
            </Card>
            <Card style={styles.buttonContainer}>
                <Button title='Lower' style={styles.button} onPress={() => nextGuessHandler(false)} color={Colors.primary} />
                <Button title='Higher' style={styles.button} onPress={() => nextGuessHandler(true)} color={Colors.primary} />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    guessContainer: {
        height: '50%',
        marginTop: 20,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    guess: {
        color: Colors.ternary,
        fontSize: 20,
        padding: 20,
    },
    button: {
        padding: 20,
    },
    buttonContainer: {
        marginTop: 20,
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
export default GameScreen;