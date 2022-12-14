import React, { useContext } from "react";

import {
  CContent,
  Container,
  Content,
  ContentButton,
  ContentText,
  ButtonVisibility,
  ContentTitle,
  Title,
  ActionHeader,
} from "./styles";

import { AuthContext } from "../../contexts/auth";

import { Feather, Entypo, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  const { user, showValue, fShowValue } = useContext(AuthContext);
  return (
    <Container>
      <Content>
        <ActionHeader onPress={() => navigation.openDrawer()}>
          <AntDesign name="menu-unfold" size={27} color="#FFF" />
        </ActionHeader>
        <ContentTitle>
          <Title>Bem Vindo</Title>
          <ContentText>{user && user.nome}</ContentText>
        </ContentTitle>

        <CContent>
          <ButtonVisibility onPress={fShowValue}>
            {showValue ? (
              <Entypo name="eye-with-line" size={27} color="#FFF" />
            ) : (
              <Entypo name="eye" size={27} color="#FFF" />
            )}
          </ButtonVisibility>

          <ContentButton onPress={() => navigation.navigate("Profile")}>
            <Feather name="user" size={27} color="#FFF" />
          </ContentButton>
        </CContent>
      </Content>
    </Container>
  );
};

export default Header;
