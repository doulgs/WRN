import React, { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { AuthContext } from "../contexts/auth";

import AppRoutes from "./app.routes";
import AppBarRoutes from "./appBar.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#131313" />
      </View>
    );
  }

  return signed ? <AppBarRoutes /> : <AuthRoutes />;
};

export default Routes;
