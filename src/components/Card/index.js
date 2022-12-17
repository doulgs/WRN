import React, { useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import { Feather, Entypo, AntDesign } from "@expo/vector-icons";

import {
  Container,
  Simbol,
  Left,
  Right,
  Separator,
  Title,
  ButtonVisibility,
  ContainerVisible,
  TitleVisible,
} from "./styles";

const Card = ({ saldo, gasto }) => {
  const { user, showValue, fShowValue } = useContext(AuthContext);
  return (
    <Container>
      <Left>
        <Title>Total de Gastos</Title>
        <Simbol>R$ {saldo === 0 ? "..." : saldo} </Simbol>
      </Left>
      <Separator />
      <Right>
        <Title>Limite de Gastos</Title>
        <Simbol>R$ {saldo === 0 ? "..." : saldo} </Simbol>
      </Right>

      <ContainerVisible onPress={fShowValue}>
        <ButtonVisibility>
          {showValue ? (
            <Entypo name="eye-with-line" size={25} color="#4a89a5" />
          ) : (
            <Entypo name="eye" size={25} color="#4a89a5" />
          )}
        </ButtonVisibility>
        <TitleVisible>EXIBIR</TitleVisible>
      </ContainerVisible>
    </Container>
  );
};

export default Card;
