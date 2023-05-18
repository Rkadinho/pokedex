import DefaultButton from '../../components/Button';
import React from "react";
import { View, ScrollView, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  function handleNavFirstGeneration() {
    navigation.navigate("FirstGeneration");
  }

  return(
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <DefaultButton buttonText={'1º Geração'}
            width={250}
            height={50}
            handlePress={handleNavFirstGeneration}
          />
        </View>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 50
  }
});

export default Home;
