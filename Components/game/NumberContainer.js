import { View, StyleSheet, Text} from "react-native" 
import Colors from "../../constants/Colors"

function NumberContainer ({children}) {

  return (
    <View style={styles.container}> 
        <Text style={styles.NumberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primary,
        padding: 28,
        margin: 28,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    NumberText : {
        color: Colors.guessingColor,
        fontSize: 36,
        fontWeight: 'bold'
    }
})
