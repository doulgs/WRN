import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { Container, Lista, Title } from "./styles";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Moviments from "../../components/Moviments";
import { TouchableOpacity, View } from "react-native";
import ButtonAction from "../../components/ButtonAction";
import Actions from "../../components/Actions";

const list = [
  {
    id: "1",
    label: "Conta de Luz",
    value: "2.500,00",
    date: "15/12/2022",
    type: 0,
  },
  {
    id: "2",
    label: "Salario",
    value: "7.500,00",
    date: "15/12/2022",
    type: 1,
  },
  {
    id: "3",
    label: "Conta de Internet",
    value: "2.500,00",
    date: "15/12/2022",
    type: 0,
  },
];

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Header />

      <Balance totalSaldo={0} totalGasto={0} />

      <Actions />

      <Title>Ultimas movimentações</Title>

      <Lista
        data={list}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Moviments data={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#DADADA" }}
          />
        }
      />
    </Container>
  );
};

export default Home;
