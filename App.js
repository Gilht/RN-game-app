import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useState} from 'react';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const selectedNumberHandler = (chosenNumber) => {
    setUserNumber(chosenNumber);
    setGameIsOver(false);  
  }

  const gameOverHandler = (numberRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberRounds);
  }

  const startNewGame = () => {
    setUserNumber(null),
    setGuessRounds(0)
  }

  let screen =  <StartGameScreen  onPickNumber={selectedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userNumber  ) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartGame={startNewGame}/>
  }

  

  return (
    <LinearGradient colors={['#fff4ff', 'red']} style={styles.container}>
      <ImageBackground 
        source={require('./assets/background.jpg')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView styles={styles.container}>
              {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },backgroundImage: {
    opacity: 0.15
  }
});
