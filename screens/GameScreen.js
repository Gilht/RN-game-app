import { Text, StyleSheet, View, Alert } from 'react-native'
import { Title } from '../Components/UI/Title'
import { useState, useEffect } from 'react';
import NumberContainer from '../Components/game/NumberContainer';
import PrimaryButton from '../Components/UI/PrimaryButton';
import Card from '../Components/UI/Card';
import InstructionText from "../Components/UI/InstructionText";
import {Ionicons} from '@expo/vector-icons';

const generateRandomBetween = (min, max, exclude) => {
  const randNumber = Math.floor(Math.random() * (max - min)) + min;


  if (randNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
  const [currentGuess, setcurrentGuess] = useState(initialGuess)

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver])

  const nextGuessHandler = (direction) => {
    if ((direction === 'lower' && currentGuess < userNumber || direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert('Error, incorrect number', [{ text: 'Ok', style: 'cancel' }])
      return;
    }


    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandmNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setcurrentGuess(newRandmNumber);
  }


  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card style={styles.card}>
        <InstructionText >Higher or lower </InstructionText>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name='md-remove' size={24} color='white' />
            </PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            <Ionicons name='md-remove' size={24} color='white' />
            </PrimaryButton>
          </View>
        </View>
        {/* + - */}
      </Card>
      {/* <View>Log Rounds</View> */}
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    padding: 24
  },
  instructionText: {
    marginBottom: 12
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
 
})