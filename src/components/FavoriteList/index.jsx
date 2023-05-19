import { View, Image, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PokemonCard from '../Cards/PokemonCards';

const FavoritesList = () => {
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favoritePokemons');
        if (storedFavorites) {
          setFavoritePokemons(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.log('Error retrieving favorites:', error);
      }
    };

    fetchFavorites();
  }, []);

  const clearFavorites = async () => {
    try {
      await AsyncStorage.removeItem('favoritePokemons');
      setFavoritePokemons([]);
    } catch (error) {
      console.log('Error clearing favorites:', error);
    }
  };

  return (
    <View>
      <FlatList
        data={favoritePokemons}
        renderItem={({ item }) => <PokemonCard 
        item={item}
        pokemonImage={item.image} />
        }
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          contentContainerStyle={styles.cardContainer}
      />
      <TouchableOpacity onPress={clearFavorites}>
        <Text>Limpar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'space-between',
  }
});

export default FavoritesList;