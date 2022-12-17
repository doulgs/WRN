import React, { useContext, useState } from "react";

import {
  Container,
  Content,
  ContentLabel,
  ContentBalance,
  ContentExpense,
  Date,
  Skeleton,
  ContentData,
  IconContent,
  CContainer,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";

import { AuthContext } from "../../contexts/auth";

const Moviments = ({ data }) => {
  const { showValue } = useContext(AuthContext);

  return (
    <Container>
      <ContentData>
        <Date>{data.date}</Date>
      </ContentData>

      <Content>
        <CContainer>
          <IconContent>
            <Ionicons name="md-cart-outline" size={24} color="white" />
          </IconContent>
          <ContentLabel>{data.label}</ContentLabel>
        </CContainer>

        {showValue ? (
          <>
            {data.type === 1 ? (
              <ContentBalance>R$ + {data.value}</ContentBalance>
            ) : (
              <ContentExpense>R$ - {data.value}</ContentExpense>
            )}
          </>
        ) : (
          <Skeleton />
        )}
      </Content>
    </Container>
  );
};

export default Moviments;
