import React from 'react';
import { View, StyleSheet} from 'react-native';
import FavoritesList from '../../components/FavoriteList';

const Favorites = () => {
  return (
    <View style={styles.container}>
      <FavoritesList/>
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

export default Favorites;