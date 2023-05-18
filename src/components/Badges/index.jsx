import { Badge, HStack } from 'native-base';

import React from "react";
import { TouchableOpacity, StyleSheet} from "react-native";

export default function DefaultBadge({
  buttonText,
  handlePress,
  backgroundColor,
  color,
  variant
}) {
  
  return(
      <TouchableOpacity 
        activeOpacity={0.7}
        onPress={handlePress} >
        <Badge variant={variant} colorScheme={color}
        style={[styles.filterBadge, 
          {backgroundColor: backgroundColor}]}>
            {buttonText}
        </Badge>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  filterBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
  }
});