import React, { useContext } from "react";

import {
  BalanceText,
  Container,
  ContentItem,
  ContentLeft,
  CurrencySymbol,
  Details,
  ItemTitle,
  TitleDetails,
} from "./styles";

import { AuthContext } from "../../contexts/auth";

import { Entypo } from "@expo/vector-icons";

const Balance = ({ totalSaldo, totalGasto }) => {
  const { showValue } = useContext(AuthContext);
  return (
    <Container>
      <ContentItem>
        <ItemTitle>Saldo</ItemTitle>
        {showValue ? (
          <ContentLeft>
            <CurrencySymbol>R$</CurrencySymbol>
            <BalanceText>{totalSaldo === 0 ? "0,0" : totalSaldo}</BalanceText>
          </ContentLeft>
        ) : (
          <ContentLeft>
            <CurrencySymbol>R$ ● ● ● ● ●</CurrencySymbol>
          </ContentLeft>
        )}
      </ContentItem>
      <Details>
        <TitleDetails>EXTRATO DETALHADO</TitleDetails>
        <Entypo name="chevron-right" size={24} color="black" />
      </Details>
    </Container>
  );
};

export default Balance;
