import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useState} from 'react';
import Colors from './constants/colors';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  
  const selectedNumberHandler = (chosenNumber) => {
    setUserNumber(chosenNumber);
  }

  let screen =  <StartGameScreen  onPickNumber={selectedNumberHandler}/>;

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient colors={[Colors.gradient1, Colors.gradient2]} style={styles.container}>
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
