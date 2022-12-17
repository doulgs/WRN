import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingIn from "../pages/SingIn";
import SingUp from "../pages/SingUp";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SingIn"
        component={SingIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SingUp"
        component={SingUp}
        options={{
          headerTitle: "Voltar",
          headerTintColor: "#FFF",

          headerBackground: () => (
            <View
              style={{
                flex: 1,
                backgroundColor: "#131313",
                borderBottomWidth: 1,
                borderBottomColor: "#00b94a",
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
