import { TextInput, View, Button, StyleSheet, Alert } from "react-native"
import PrimaryButton from '../Components/PrimaryButton';
import { useState } from "react";
import Colors  from "../constants/colors";

function StartGameScreen({onPickNumber}) {

const [enteredNumber, setEnteredNumber] = useState('');

const numberInputHandler = (text) => {
  setEnteredNumber(text);
}

const resetInputHandler = () => {
  setEnteredNumber('');
}

const confirmNumberInput = () => {
  const chosenNumber = parseInt(enteredNumber);

  if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
    Alert.alert('invalid value', [{text: 'okaydkd', style: 'destructive', onPress: resetInputHandler}]);
  }; 

  onPickNumber(chosenNumber);
}

  return (
  <View style={styles.inputContainer}>
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
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: '#FFFACD',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
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
    flex:1
  }
})