import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const GuessLogItem = ({ roundNumber, guess }) => {
    return (
        <View>
            <Text style={styles.itemText}># {roundNumber}</Text>
            <Text style={styles.itemText}>Oponent guess {guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.guessingColor,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemText: {
        fontFamily: 'open-sans'
    }
})
