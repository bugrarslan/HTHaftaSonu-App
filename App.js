import React from "react";
import {View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../HTHaftaSonu/src/screens/HomeScreen"
import ListScreen from "../HTHaftaSonu/src/screens/ListScreen"

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"} screenOptions={{headerShown: false}}>
        <Stack.Screen name={"Home"} component={HomeScreen}/>
        <Stack.Screen name={"List"} component={ListScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;
