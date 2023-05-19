import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import Type from '../../TranslatesComponents/TranslateType';

const PokemonCard = ({ item, pokemonImage }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Specie', { pokemon: item });
  };

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

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.card, { backgroundColor: getCardBackgroundColor(item.primaryType) }]}>
        <Image source={{ uri: pokemonImage }} style={styles.image}/>
        <Text style={styles.id} accessibilityLabel={`pokemon ${item.id}`}>#{item.id}</Text>
        <Text style={styles.name} accessibilityLabel={item.name} allowFontScaling={true}>{item.name}</Text>
        <View style={styles.type}>
          <Type 
            style={styles.teste} 
            type={item.primaryType} 
            fontSize={10} 
            marginRight={5} 
            backgroundColor={getCardBackgroundColor(item.primaryType)}
            padding={2}
            borderRadius={5}
            shadowColor={'#000'}
            width={0}
            height={2}
            shadowOpacity={0.3}
            shadowRadius={4}
            accessibilityLabel={`tipo ${item.primaryType}`}
            />
          {item.secondaryType ? 
            <Type 
              type={item.secondaryType} 
              fontSize={10} 
              backgroundColor={getCardBackgroundColor(item.secondaryType)}
              padding={2}
              borderRadius={5}
              shadowColor={'#000'}
              width={0}
              height={2}
              shadowOpacity={0.3}
              shadowRadius={4}
              accessibilityLabel={`tipo primario ${item.secondaryType}`}
              /> : ''}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width / 3 - 20,
    borderRadius: 20,
    margin: 5,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4
  },
  image: {
    width: 100,
    height: 100,
  },
  id: {
    fontSize: 10
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  type: {
    flexDirection: 'row'
  }
});

export default PokemonCard;