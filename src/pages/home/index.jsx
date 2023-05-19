import DefaultButton from '../../components/Button';
import React from "react";
import { View, StyleSheet, Text} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  function handleNavFirstGeneration() {
    navigation.navigate("FirstGeneration");
  }
  function handleNavFavorite() {
    navigation.navigate("Favorite");
  }

  return(
    <View style={styles.container}>
      <View style={styles.page}>
        <Text style={styles.title}>Pokedex Go</Text>
        <View style={{ alignItems: 'center' }}>
          <DefaultButton buttonText={'Kanto'}
            width={250}
            height={50}
            handlePress={handleNavFirstGeneration}
            icon={'globe'}
          />
          <DefaultButton buttonText={'Favorito'}
            width={250}
            height={50}
            handlePress={handleNavFavorite}
            icon={'globe'}
          />
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  page:{
    flex: 2,
    marginTop: 20,
    padding: 10,
    alignContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    marginRight: 95
  },
});

export default Home;
