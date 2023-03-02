import { View, Image, Text, StyleSheet } from "react-native"
import { Title } from "../Components/UI/Title"
import Colors from "../constants/Colors"

function GameOverScreen () {
  return (
    <View style={styles.rootContainer}>
     <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.Image} source={require('../assets/success.png')} />
      </View>
      <Text> Your device needs x rounds to guess</Text>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  rootContainer: {
   padding: 54,
   justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
      width: 300,
      height: 300,
      borderRadius: 200,
      borderWidth: 3,
      borderColor: Colors.gradient2,
      overflow: 'hidden',
      margin:36 
  },
  Image: {
    width: '100%',
    height: '100%',
  }
})