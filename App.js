import { NavigationContainer } from "@react-navigation/native";
import React from "react";
// import { StyleSheet, Text, View } from 'react-native';
import NavStack from "./src/screen/navstack";

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import { NavigationContainer } from '@react-navigation/native';
// import SearchScreen from "./src/screen/SearchScreen";

// const navigator = createStackNavigator(
//   {
//     Search: SearchScreen,
//   },
//   {
//     initialRouteName: "Search",
//     defaultNavigationOptions: {
//       title: "Business Search",
//     },
//   }
// );

// export default createAppContainer(navigator);
