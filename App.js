import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen"
import ListScreen from "./src/screens/ListScreen"
import DetailScreen from "./src/screens/DetailScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Home"} screenOptions={{headerShown: false}}>
          <Stack.Screen name={"Home"} component={HomeScreen}/>
          <Stack.Screen name={"List"} component={ListScreen}/>
          <Stack.Screen name={"Detail"} component={DetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}


export default App;
