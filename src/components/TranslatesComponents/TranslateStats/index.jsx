import React from "react";
import { StyleSheet, View, Text} from "react-native";

export default function Stats({stats}) {

  const translateStatsName = (stats) => {
    const translationsType = {
      hp: 'vida',
      attack: 'ataque',
      defense: 'defesa',
      speed: 'velocidade',
      'special-attack': 'ataque especial',
      'special-defense': 'defesa especial'
    };
    return translationsType[stats] || stats;
  };

  return(
    <View style={{textAlign: 'center', alignItems: 'center'}}>
      <Text style={{textAlign: 'center', alignItems: 'center'}}>{translateStatsName(stats)}</Text>
    </View>
  )
}