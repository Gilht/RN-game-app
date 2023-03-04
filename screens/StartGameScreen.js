import {
  TextInput, View, Button, Text, StyleSheet,
  Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView, Dimensions
} from "react-native"
import PrimaryButton from '../Components/UI/PrimaryButton';
import { useState } from "react";
import Colors from "../constants/Colors";
import { Title } from "../Components/UI/Title";
import Card from "../Components/UI/Card";
import InstructionText from "../Components/UI/InstructionText";

function StartGameScreen({ onPickNumber }) {

  const [enteredNumber, setEnteredNumber] = useState('');

  const { width, height } = useWindowDimensions();

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

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
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
      </KeyboardAvoidingView>

    </ScrollView>

  );
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    // marginTop: deviceHeight < 380 ? 30 : 100,
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