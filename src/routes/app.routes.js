import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";

import New from "../pages/New";
import Profile from "../pages/Profile";
import { useTheme } from "styled-components/native";
import themes from "../theme";
import { Text, View } from "react-native";
const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  const colors = useTheme(themes);
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.background,
        },
        drawerActiveTintColor: colors.colorFont,
        drawerActiveBackgroundColor: "#98dad9",
        drawerInactiveTintColor: colors.FontOutOfFocus,
        drawerInactiveBackgroundColor: colors.bgSubBalance,
        drawerItemStyle: {
          marginVertical: 5,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="New"
        component={New}
        options={{
          headerTitle: "Movimentações",
          headerTintColor: "#FFF",
          headerBackground: () => (
            <View
              style={{
                flex: 1,
                backgroundColor: colors.bgHeader,
                borderBottomWidth: 1,
                borderBottomColor: colors.colors.primary,
              }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: "Perfil",
          headerTintColor: "#FFF",
          headerBackground: () => (
            <View
              style={{
                flex: 1,
                backgroundColor: colors.bgHeader,
                borderBottomWidth: 1,
                borderBottomColor: colors.colors.primary,
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
