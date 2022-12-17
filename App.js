import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
// import firebase from './src/services/firebaseConnection';

import AuthProvaider from "./src/contexts/auth";

import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";

import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import themes from "./src/theme";

const App = () => {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || theme.dark;

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor="transparent" style="auto" />
        <AuthProvaider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </AuthProvaider>
      </ThemeProvider>
    </>
  );
};

export default App;
