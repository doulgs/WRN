import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../pages/HomeScreen/Index";
import Profile from "../pages/Profile";
import New from "../pages/New";

const Tab = createBottomTabNavigator();

export default function AppBarRoutes() {
  const amountBadge = 5;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#4a89a5",
        tabBarShowLabel: false,
        tabBarBadgeStyle: {
          backgroundColor: "#000",
        },
        tabBarStyle: {
          backgroundColor: "#1c1d27",
          borderTopWidth: 1,
          borderTopColor: "#4a89a5",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),

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
      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarLabel: "New Mov",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="credit-card"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          tabBarBadge: amountBadge,
        }}
      />
    </Tab.Navigator>
  );
}
