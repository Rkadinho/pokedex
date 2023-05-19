import React from "react";
import {  StyleSheet, View, Text} from "react-native";

export default function DefaultCards({
  title,
  subTitle,
  backgroundColor,
  color,
  borderRadius,
  padding,
  width, 
  height,
  alignItems,
  marginVertical,
  alignText,
  borderColor,
  borderWidth
}) {
  
  return(
    <View style={[styles.container, 
      {backgroundColor: backgroundColor, 
      borderRadius: borderRadius, 
      padding: padding, 
      width: width, 
      height: height, 
      alignItems: alignItems,
      marginVertical: marginVertical,
      borderColor: borderColor,
      borderWidth: borderWidth
}]}>
    <View style={{alignItems: alignText}}>
      <Text style={{color: color}}>{title}</Text>
      <Text style={{color: color}}>{subTitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginRight: 10,
    alignSelf: 'center'
  }
});