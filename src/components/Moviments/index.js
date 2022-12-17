import React, { useContext, useState } from "react";

import {
  Container,
  Content,
  ContentLabel,
  ContentBalance,
  ContentExpense,
  Date,
  Skeleton,
} from "./styles";

import { AuthContext } from "../../contexts/auth";

const Moviments = ({ data }) => {
  const { showValue } = useContext(AuthContext);

  return (
    <Container>
      <Date>{data.date}</Date>

      <Content>
        <ContentLabel>{data.label}</ContentLabel>

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
