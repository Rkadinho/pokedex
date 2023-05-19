import React from "react";
import { StyleSheet, View, Text} from "react-native";

export default function Habitat({
  habitat,
  marginTop
}) {

  const translateHabitatName = (habitat) => {
    const translationsType = {
      grassland: 'planície',
      urban: 'urbano',
      mountain: 'montanha',
      sea: 'mar',
      forest: 'floresta',
      cave: 'caverna',
      rare: 'Raro',
      'waters-edge': 'margem de água',
      'rough-terrain': 'terreno irregular'

    };
    return translationsType[habitat] || habitat;
  };

  return(
    <View style={{marginTop: marginTop}}>
      <Text>Habitate: {translateHabitatName(habitat)}</Text>
    </View>
  )
}