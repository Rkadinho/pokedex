import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/home";
import FirstGeneration from "../pages/FirstGeneration";
import Specie from "../pages/Specie";
import Favorites from "../pages/Favorites";

const Stack = createNativeStackNavigator();

export default function AllPages() {

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='FirstGeneration' component={FirstGeneration}/>
        <Stack.Screen name='Specie' component={Specie}/>
        <Stack.Screen name='Favorite' component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}