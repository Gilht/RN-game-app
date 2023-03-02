import { TextInput, View, Button, Text, StyleSheet, Alert } from "react-native"
import PrimaryButton from '../Components/UI/PrimaryButton';
import { useState } from "react";
import Colors from "../constants/Colors";
import { Title } from "../Components/UI/Title";
import Card from "../Components/UI/Card";
import InstructionText from "../Components/UI/InstructionText";

function StartGameScreen({ onPickNumber }) {

  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (text) => {
    setEnteredNumber(text);
  }

  const resetInputHandler = () => {
    setEnteredNumber('');
  }

  const confirmNumberInput = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('invalid value', [{ text: 'okaydkd', style: 'destructive', onPress: resetInputHandler }]);
    };

    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess the number</Title>
      <Card>
        <InstructionText >Enter a number</InstructionText >
        <TextInput style={styles.numberInput}
          maxLength={2}
          value={enteredNumber}
          autoCorrect={false}
          keyboardType='number-pad'
          onChangeText={numberInputHandler}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}> Reset </PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmNumberInput}> Confirm </PrimaryButton>
          </View>
        </View>
      </Card  >
    </View>

  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    alignItems: 'center'
  },
  instructionsText: {
    color: Colors.guessingColor,
    fontSize: 24,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.InputborderColor,
    borderBottomWidth: 2,
    color: Colors.InputborderColor,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
})