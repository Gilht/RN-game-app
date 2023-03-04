import { Text,StyleSheet } from "react-native"
import Colors from "../../constants/Colors"

export const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({

title: {
    fontSize: 24,
    fontWeight: 'bold' ,
    color: Colors.guessingColor,
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    paddingTop: 10,
    borderColor: Colors.guessingColor,
    padding:36,
    maxWidth: '80%',
    width: 300
  }
})