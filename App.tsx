import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import React from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { AuthProvider, useAuth } from "./src/hooks/auth";
import { Routes } from "./src/routes";

export default function App() {
  const { userStorageLoading } = useAuth();
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontsLoaded && userStorageLoading) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
