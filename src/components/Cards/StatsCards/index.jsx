import { View,StyleSheet } from 'react-native';
import React from 'react';

import Stats from '../../TranslatesComponents/TranslateStats';
import DefaultCards from '../DefaultCards';

const StatsCards = ({ pokemon }) => {
  return (
    <View>
      <View style={styles.stats}>
        <DefaultCards 
          title={<Stats stats={pokemon.hpStatsName}/>} 
          subTitle={pokemon.hpStats} 
          color={'white'} 
          borderRadius={10} 
          padding={15}
          width={150}
          height={60}
          marginVertical={5}
          alignText={'center'}
          borderWidth={1}
          borderColor={'white'}
          />
        <DefaultCards 
          title={<Stats stats={pokemon.attackStatsName}/>} 
          subTitle={pokemon.attackStats} 
          color={'white'} 
          borderRadius={10} 
          padding={15}
          width={150}
          height={60}
          marginVertical={5}
          alignText={'center'}
          borderWidth={1}
          borderColor={'white'}/>
      </View>
      <View style={styles.stats}>
        <DefaultCards
          title={<Stats stats={pokemon.defenseStatsName}/>} 
          subTitle={pokemon.defenseStats} 
          color={'white'} 
          borderRadius={10} 
          padding={15}
          width={150}
          height={60}
          marginVertical={5}
          alignText={'center'}
          borderWidth={1}
          borderColor={'white'}/>
        <DefaultCards 
          title={<Stats stats={pokemon.speedStatsName}/>} 
          subTitle={pokemon.speedStats} 
          color={'white'} 
          borderRadius={10} 
          padding={15}
          width={150}
          height={60}
          marginVertical={5}
          alignText={'center'}
          borderWidth={1}
          borderColor={'white'}/>
      </View>
      <View style={styles.stats}>
        <DefaultCards 
          title={<Stats stats={pokemon.specialAtStatsName}/>} 
          subTitle={pokemon.specialAtStats} 
          color={'white'} 
          borderRadius={10} 
          padding={15}
          width={150}
          height={60}
          marginVertical={5}
          alignText={'center'}
          borderWidth={1}
          borderColor={'white'}/>
        <DefaultCards 
          title={<Stats stats={pokemon.specialDeStatsName}/>} 
          subTitle={pokemon.specialDeStats} 
          color={'white'} 
          borderRadius={10} 
          padding={15}
          width={150}
          height={60}
          marginVertical={5}
          alignText={'center'}
          borderWidth={1}
          borderColor={'white'}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stats: {
    flexDirection: 'row'
  }
});

export default StatsCards;