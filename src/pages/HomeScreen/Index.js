import React from "react";
import { View } from "react-native";
import Actions from "../../components/Actions";
import ButtonAction from "../../components/ButtonAction";
import Card from "../../components/Card";
import CCredit from "../../components/CCredit";
import Moviments from "../../components/Moviments";

import { Container, Header, HeaderAction, Listagem } from "./styles";

import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
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
    {
      id: "4",
      label: "Conta de Luz",
      value: "2.500,00",
      date: "15/12/2022",
      type: 0,
    },
    {
      id: "5",
      label: "Salario",
      value: "7.500,00",
      date: "15/12/2022",
      type: 1,
    },
    {
      id: "6",
      label: "Conta de Internet",
      value: "2.500,00",
      date: "15/12/2022",
      type: 0,
    },
  ];
  return (
    <>
      <Header>
        <HeaderAction>
          <Ionicons name="notifications-outline" size={35} color="white" />
        </HeaderAction>
      </Header>
      <CCredit
        name="DOUGLAS DOMICIANO"
        NumberCard="**** **** **** 2101"
        date="24/29"
      />
      <Container>
        <Card saldo={0} />
        <Actions />

        <Listagem
          data={list}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Moviments data={item} />}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={
            <View
              style={{ borderBottomWidth: 1, borderBottomColor: "#DADADA" }}
            />
          }
          ListFooterComponent={<View style={{ marginBottom: 30 }} />}
          ListHeaderComponent={<View style={{ marginBottom: 2 }} />}
        />
      </Container>
      <ButtonAction />
    </>
  );
};

export default HomeScreen;
