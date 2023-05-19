import React from "react";
import { StyleSheet, View, Text} from "react-native";

export default function Type({
  type,
  fontSize,
  marginRight,
  backgroundColor, 
  padding,
  borderRadius,
  shadowColor,
  shadowWidth,
  shadowHeight,
  shadowOpacity,
  shadowRadius
}) {

  const translateTypeName = (type) => {
    const translationsType = {
      grass: 'grama',
      fire: 'fogo',
      water: 'água',
      electric: 'elétrico',
      rock: 'pedra',
      ground: 'terra',
      poison: 'venenoso',
      bug: 'inseto',
      flying: 'voador',
      normal: 'normal',
      psychic: 'psíquico',
      ghost: 'fantasma',
      dark: 'sombrio',
      fighting: 'lutador',
      steel: 'aço',
      fairy: 'fada',
      ice: 'gelo',
      dragon: 'dragão',
    };
    return translationsType[type] || type;
  };

  return(
    <View style={{
      marginRight: marginRight,
      backgroundColor: backgroundColor, 
      padding: padding, 
      borderRadius: borderRadius,
      shadowColor: shadowColor,
      shadowOffset: {width: shadowWidth, height: shadowHeight},
      shadowOpacity: shadowOpacity,
      shadowRadius: shadowRadius,}}>
      <Text style={{fontSize: fontSize}}>{translateTypeName(type)}</Text>
    </View>
  )
};