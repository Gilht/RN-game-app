import { View, Image, Text, StyleSheet, useWindowDimensions, ScrollView } from "react-native"
import { Title } from "../Components/UI/Title"
import Colors from "../constants/Colors"
import PrimaryButton from "../Components/UI/PrimaryButton"

function GameOverScreen({ roundsNumber, userNumber, onStartGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image style={styles.Image} source={require('../assets/success.png')} />
        </View>
        <Text> Your device needs <Text style={styles.highligh}>X</Text>{roundsNumber}<Text style={styles.highligh}>{userNumber}</Text>
          <Text></Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>

  )
}
export default GameOverScreen


const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    padding: 54,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.gradient2,
    overflow: 'hidden',
    margin: 36
  },
  highligh: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary
  },
  Image: {
    width: '100%',
    height: '100%',
  }
})