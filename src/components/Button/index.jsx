import React from "react";
import { TouchableOpacity, Text, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DefaultButton({
  buttonText,
  handlePress,
  width,
  height,
  icon,
  colorIcon
}) {
  
  return(
    <TouchableOpacity activeOpacity={0.7}
      onPress={handlePress}
      style={[styles.button, {width: width, height: height}]}>
        <Icon name={icon} size={30} color={colorIcon} />
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
    marginBottom: 20,
    flexDirection: 'row'
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 10
  }
})