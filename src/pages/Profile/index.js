import React, { useContext } from "react";
import {
  Container,
  Logout,
  LogoutText,
  NewLink,
  NewText,
  Nome,
} from "./styels";

import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  const { user, signOut } = useContext(AuthContext);
  return (
    <Container>
      <Nome>{user && user.nome}</Nome>

      <NewLink onPress={() => navigation.navigate("New")}>
        <NewText>Registrar Gasto</NewText>
      </NewLink>

      <Logout onPress={() => signOut()}>
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
};

export default Profile;
