import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import EndGameScreen from './screens/EndGameScreen';

export default function App() {
  const [selection, setSelection] = useState();
  const [rounds, setRounds] = useState(0);
  const startGameHandler = () => {
    setRounds(0);
    setSelection(null)
  }
  const endGameHandler = (numRounds)=> {
    setRounds(numRounds);
  };
  const selectionHandler = (approvedNumber) => {
    setSelection(approvedNumber);
  };
  let content = <StartGameScreen onStart={selectionHandler}/>;
  if (selection && rounds===0) {
    content=<GameScreen selection={selection} onEnd={endGameHandler}/>;
  } else if (rounds>0) {
    content=<EndGameScreen selection={selection} rounds={rounds} onRestart={startGameHandler}/>;
  }
  return (
    <View style={styles.screen}>
      <Header title='Apple Guesser' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
