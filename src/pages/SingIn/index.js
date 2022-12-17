import React, { useState, useContext } from "react";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from "./styles";

import { AuthContext } from "../../contexts/auth";

const SingIn = () => {
  const { singIn } = useContext(AuthContext);

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    singIn(email, password);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <Logo source={require("../../assets/Logo.png")} />

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Password"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>
        <SubmitButton onPress={handleLogin}>
          <SubmitText>Login</SubmitText>
        </SubmitButton>

        <Link onPress={() => navigation.navigate("SingUp")}>
          <LinkText>Create account!</LinkText>
        </Link>
      </Container>
    </Background>
  );
};

export default SingIn;
