import { View, StyleSheet, Text} from "react-native" 
import Colors from "../../constants/Colors";

function InstructionText ({children, style}) {
    return (
       <Text style={[styles.text, style]}>{children}</Text>
      )
}


export default InstructionText;

const styles = StyleSheet.create({
text: {
    color: Colors.primary,
    fontSize: 24
 }
})