import { Text, StyleSheet} from 'react-native'
import { Title } from '../Components/Title'
import { useState } from 'react';

const generateRandomBetween = (min, max, exclude) => {
  const randNumber = Math.floor(Math.random() * (max - min)) + min;


if (randNumber === exclude) {
  return generateRandomBetween(min, max, exclude);
} else {
  return randNumber;
}
}

const GameScreen = ({userNumber}) => {
  const initialGuess = generateRandomBetween(1, 1000)
  const [currentGuess, setcurrentGuess] = useState()

  return (
    <View style={styles.screen}>
      <Title>
      Opponent's guess
      </Title>
ß
      <View>
        <Text>Higher or lower </Text>
       {/* + - */}
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 24
    }
})