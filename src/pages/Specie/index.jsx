import React from 'react';
import { View, StyleSheet} from 'react-native';
import {  } from "native-base";
import SpecieCard from '../../components/Cards/SpecieCard';

const Specie = () => {
  return (
    <View style={styles.container}>
      <SpecieCard/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});

export default Specie;