import { View, Image, Text, StyleSheet, Dimensions } from "react-native"
import { Title } from "../Components/UI/Title"
import Colors from "../constants/Colors"
import PrimaryButton from "../Components/UI/PrimaryButton"

function GameOverScreen ({roundsNumber, userNumber, onStartGame}) {
  return (
    <View style={styles.rootContainer}>
     <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.Image} source={require('../assets/success.png')} />
      </View>
      <Text> Your device needs <Text style={styles.highligh}>X</Text>{roundsNumber}<Text style={styles.highligh}>{userNumber}</Text>
 <Text></Text>
</Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}
export default GameOverScreen

const deviceWidth = Dimensions.get('window'.width);

const styles = StyleSheet.create({
  rootContainer: {
   padding: 54,
   justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
      width: deviceWidth < 380 ? 150 : 300,
      height: deviceWidth < 380 ? 150 : 300,
      borderRadius: 200,
      borderWidth: 3,
      borderColor: Colors.gradient2,
      overflow: 'hidden',
      margin:36 
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