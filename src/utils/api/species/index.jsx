import axios from 'axios';

const fetchSpecieData = async (pokemonId) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
    return response.data;
  } catch (error) {
    console.log('Error fetching Pokemon data:', error);
    throw error;
  }
};

export default fetchSpecieData;