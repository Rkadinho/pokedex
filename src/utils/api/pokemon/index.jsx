import axios from 'axios';

const fetchPokemonData = async (pokemonId) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return response.data;
  } catch (error) {
    console.log('Error fetching Pokemon data:', error);
    throw error;
  }
};

export default fetchPokemonData;