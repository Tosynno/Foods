import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SearchScreen from "./SearchScreen";
import ResultsShowScreen from "./ResultsShowsScreen";

const Stack = createStackNavigator();

const NavStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
    </Stack.Navigator>
  );
};
export default NavStack;
