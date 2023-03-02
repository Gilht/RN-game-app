import { View, Text, Pressable, StyleSheet } from "react-native"

const PrimaryButton = ({ children, onPress }) => {

  return (
    <View style={styles.buttonOuterContainer}>
       <Pressable style={ ({pressed}) => 
        pressed ? [styles.buttonInnerContainer, styles.dedicatedIos ] 
        : styles.buttonInnerContainer
      }
      onPress={onPress}
      >
      <View>
        <Text style={styles.text}>{children}</Text>
    </View>
    </Pressable>
    </View>
   
    
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  text: {
    color: 'white'
  },
  buttonOuterContainer: {
    borderRadius:28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: '#67567c',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  dedicatedIos: {
    opacity:0.75
  }
  
})