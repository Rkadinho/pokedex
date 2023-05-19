import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Habitat from '../../TranslatesComponents/TranslateHabitat';
import StatsCards from '../StatsCards';
import TypeCards from '../TypeCards';
import { TouchableOpacity } from 'react-native';

const SpecieCard = () => {
  const route = useRoute();
  const { pokemon } = route.params;
  const navigation = useNavigation();
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

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

  const handlePress = () => {
    navigation.navigate('FirstGeneration');
  };

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favoritePokemons');
      const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      setFavoritePokemons(parsedFavorites);
    } catch (error) {
      console.log('Error loading favorites:', error);
    }
  };

  const addToFavorites = async (pokemon) => {
    const isAlreadyFavorited = favoritePokemons.some((favPokemon) => favPokemon.id === pokemon.id);
    if (isAlreadyFavorited) {
      return;
    }
    const updatedFavorites = [...favoritePokemons, pokemon];
    try {
      await AsyncStorage.setItem('favoritePokemons', JSON.stringify(updatedFavorites));
      setFavoritePokemons(updatedFavorites);
    } catch (error) {
      console.log('Error adding to favorites:', error);
    }
  };

  const removeFromFavorites = async (pokemon) => {
    const updatedFavorites = favoritePokemons.filter((favPokemon) => favPokemon.id !== pokemon.id);
    try {
      await AsyncStorage.setItem('favoritePokemons', JSON.stringify(updatedFavorites));
      setFavoritePokemons(updatedFavorites);
    } catch (error) {
      console.log('Error removing from favorites:', error);
    }
  };

  const isPokemonFavorited = favoritePokemons.some((favPokemon) => favPokemon.id === pokemon.id);

  return (
    <View style={[styles.card, {backgroundColor: getCardBackgroundColor(pokemon.primaryType)}]}>
      <TouchableOpacity 
        style={styles.arrow}
        onPress={handlePress} 
        accessibilityLabel="Seta voltar para pagina de pokemons">
        <Icon name="arrow-left" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.favorite} 
        onPress={() => (isPokemonFavorited ? removeFromFavorites(pokemon) : addToFavorites(pokemon))}
        accessibilityLabel={isPokemonFavorited ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}>
        <Icon name={'star'} color={isPokemonFavorited ? 'yellow' : 'white'} size={30}/>
      </TouchableOpacity>
      <View style={styles.card2}>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name} accessibilityLabel={pokemon.name}>{pokemon.name}</Text>
            <TypeCards pokemon={pokemon} accessibilityLabel={`tipo secundario ${pokemon.secondaryType}`}/>
            <Habitat habitat={pokemon.habitat} marginTop={10}/>
          </View>
      </View>
      <StatsCards pokemon={pokemon}/>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 10,
    marginVertical: 250,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'center'
  },
  arrow: {
    alignSelf: 'flex-start',
    marginBottom: 20
  },
  favorite: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 15,
    right: 20
  },
  card2: {
     flexDirection: 'row',
     marginBottom: 20
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginRight: 16,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2
  },
  detailsContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  }
});

export default SpecieCard;