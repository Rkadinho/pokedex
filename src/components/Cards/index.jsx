import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import React, { useState} from 'react';

const PokemonCard = ({ item, pokemonImage }) => {
  const getCardBackgroundColor = (type) => {
    const backgroundColors = {
      grass: '#9bcc50',
      fire: '#fd7d24',
      water: '#4592c4',
      electric: '#eed535',
      rock: '#a38c21',
      ground: '#dd7748',
      poison: '#b97fc9',
      bug: '#729f3f',
      flying: '#3dc7ef',
      normal: '#a4acaf',
      psychic: '#f366b9',
      ghost: '#7b62a3',
      dark: '#707070',
      fighting: '#d56723',
      steel: '#9eb7b8',
      fairy: '#fdb9e9',
      ice: '#51c4e7',
      dragon: '#f16e57',
    };

    return backgroundColors[type] || '#FFFFFF';
  };

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

  return (
    <View style={[styles.card, { backgroundColor: getCardBackgroundColor(item.primaryType) }]}>
      <Image source={{ uri: pokemonImage }} style={styles.image} />
      <Text style={styles.id}>#{item.id}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.type}>
        {translateTypeName(item.primaryType)} 
        {item.secondaryType ? 
          <Text style={styles.type}> / {translateTypeName(item.secondaryType)}</Text> : ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width / 3 - 20,
    borderRadius: 20,
    margin: 5,
    padding: 10,
    alignItems: 'center',
    shadowColor: 'black',
  },
  image: {
    width: 100,
    height: 100,
  },
  id: {
    fontSize: 10
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  type: {
    fontSize: 10,
    textAlign: 'center',
  },
});

export default PokemonCard;