import React from "react";
import { TouchableOpacity, Text, StyleSheet} from "react-native";

export default function DefaultButton({
  buttonText,
  handlePress,
  width,
  height,
}) {
  
  return(
    <TouchableOpacity activeOpacity={0.7}
      onPress={handlePress}
      style={[styles.button, {width: width, height: height}]}>
        <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 20
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  }
})