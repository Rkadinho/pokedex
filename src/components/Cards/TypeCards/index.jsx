import { View,StyleSheet } from 'react-native';
import React from 'react';

import DefaultCards from '../DefaultCards';
import Type from '../../TranslatesComponents/TranslateType';

const TypeCards = ({ pokemon }) => {

  const getCardBackgroundColor = (pokemon) => {
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

    return backgroundColors[pokemon] || '#FFFFFF';
  };

  return (
    <View>
      <View style={styles.type}>
        <DefaultCards 
          styles={styles.cardType} 
          title={<Type type={pokemon.primaryType}/>} 
          backgroundColor={getCardBackgroundColor(pokemon.primaryType)} 
          color={'black'} 
          width={80} 
          padding={6} 
          alignItems={'center'} 
          height={28} 
          borderRadius={20}
          accessibilityLabel={`tipo primario ${pokemon.primaryType}`}
          />
        {pokemon.secondaryType && (
          <DefaultCards 
            title={<Type type={pokemon.secondaryType}/>} 
            backgroundColor={getCardBackgroundColor(pokemon.secondaryType)} 
            color={'black'} 
            width={80} 
            padding={6} 
            alignItems={'center'} 
            height={28} 
            borderRadius={20}/>
        )} 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  type: {
    flexDirection: 'row'
  }
});

export default TypeCards;