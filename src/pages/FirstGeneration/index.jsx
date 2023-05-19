import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { HStack } from 'native-base';
import React, { useState, useEffect } from 'react';
import { NativeBaseProvider } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

import fetchPokemonData from '../../utils/api/pokemon';
import PokemonCard from '../../components/Cards/PokemonCards';
import DefaultInput from '../../components/Input';
import fetchSpecieData from '../../utils/api/species';
import DefaultBadge from '../../components/Badges';

const FirstGeneration = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showLegendary, setShowLegendary] = useState(false);
  const [showMythical, setShowMythical] = useState(false);
  const [showShiny, setShowShiny] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        const data = await response.json();
        const results = data.results;
        const pokemons = await Promise.all(
          results.map(async (result) => {
            const pokemonData = await fetchPokemonData(result.name);
            const pokemonSpecies = await fetchSpecieData(result.name)
            return {
              id: pokemonData.id,
              name: pokemonData.name,
              image: pokemonData.sprites.front_default,
              shinyImage: pokemonData.sprites.front_shiny,
              primaryType: pokemonData.types[0].type.name,
              secondaryType: pokemonData.types[1]?.type?.name,
              isLegendary: pokemonSpecies.is_legendary,
              isMythical: pokemonSpecies.is_mythical,
              hpStatsName: pokemonData.stats[0].stat.name,
              hpStats: pokemonData.stats[0].base_stat,
              attackStatsName: pokemonData.stats[1].stat.name,
              attackStats: pokemonData.stats[1].base_stat,
              defenseStatsName: pokemonData.stats[2].stat.name,
              defenseStats: pokemonData.stats[2].base_stat,
              specialAtStatsName: pokemonData.stats[3].stat.name,
              specialAtStats: pokemonData.stats[3].base_stat,
              specialDeStatsName: pokemonData.stats[4].stat.name,
              specialDeStats: pokemonData.stats[4].base_stat,
              speedStatsName: pokemonData.stats[5].stat.name,
              speedStats: pokemonData.stats[5].base_stat,
              habitat: pokemonSpecies.habitat.name
            };
          })
        );
        setPokemonList(pokemons);
      } catch (error) {
        console.log('Error fetching Pokemon list:', error);
      }
    };

    fetchPokemons();
  }, []);

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

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const handleLengendaries = () => {
    setShowLegendary(!showLegendary);
  }

  const handleMythical = () => {
    setShowMythical(!showMythical);
  }

  const handleToggleShiny = () => {
    setShowShiny(!showShiny);
  };

  const handlePress = () => {
    navigation.navigate('Home');
  };

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    showMythical ? pokemon.isMythical : true &&
    showLegendary ? pokemon.isLegendary : true &&
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    translateTypeName(pokemon.primaryType).toLowerCase().includes(searchTerm.toLowerCase()) ||
    translateTypeName(pokemon.secondaryType)?.toLowerCase()?.includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <View style={styles.heading}>
          <TouchableOpacity onPress={handlePress} accessibilityLabel="Seta voltar para pagina inicial">
            <Icon name="arrow-left" size={30} color="#900" />
          </TouchableOpacity>
          <Text style={styles.title}>Pokedex Go</Text>
        </View>
        <NativeBaseProvider>
          <DefaultInput 
            placeholder={"Pesquisar Pokemon"} 
            value={searchTerm}
            onChangeText={handleSearch}
            variant={'rounded'} 
            accessibilityLabel="Barra de pesquisa pokemon"/>
          <HStack pace={{base: 2, sm: 4}} mx={{base: "auto",md: 0}}>
            <DefaultBadge 
              buttonText={'Lendario'} 
              handlePress={handleLengendaries}
              backgroundColor={showLegendary ? 'green' : 'white'}
              variant={showLegendary ? 'solid' : 'outline'}/>
            <DefaultBadge 
              buttonText={'Mitico'} 
              handlePress={handleMythical}
              backgroundColor={showMythical ? 'red' : 'white'}
              variant={showMythical ? 'solid' : 'outline'}/>
            <DefaultBadge 
              buttonText={'Brilhante'} 
              handlePress={handleToggleShiny}
              backgroundColor={showShiny ? 'yellow' : 'white'}
              variant={showShiny ? 'subtitle' : 'outline'}/>
          </HStack>
          <FlatList
            data={filteredPokemonList}
            renderItem={({ item }) => <PokemonCard 
              item={item}
              pokemonImage={showShiny ? item.shinyImage : item.image} />
            }
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            contentContainerStyle={styles.cardContainer}
          />
        </NativeBaseProvider>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 16,
    backgroundColor: 'white',
  },
  page:{
    flex: 2,
    marginTop: 20
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    marginRight: 95
  },
  cardContainer: {
    justifyContent: 'space-between',
  }
});

export default FirstGeneration;