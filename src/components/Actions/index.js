import React from "react";

import {
  ActionButton,
  AreaButton,
  Container,
  Content,
  LabelButton,
} from "./styles";

import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Actions = () => {
  const navigation = useNavigation();
  const opActions = [
    {
      title: "entradas",
      icon: "creditcard",
      action: () => navigation.navigate("New"),
    },
    {
      title: "compras",
      icon: "tagso",
      action: () => alert("Story"),
    },
    {
      title: "Data",
      icon: "calendar",
      action: () => console.log("Ao Vivo"),
    },
    {
      title: "Criptos",
      icon: "bank",
      action: () => alert("Story"),
    },
    {
      title: "config",
      icon: "setting",
      action: () => navigation.navigate("Profile"),
    },
  ];

  return (
    <Container showsHorizontalScrollIndicator={false} horizontal={true}>
      <ActionButton>
        {opActions.map((ac, i) => (
          <Content key={i}>
            <AreaButton onPress={ac.action}>
              <AntDesign name={ac.icon} size={25} color="#4a89a5" />
              <LabelButton>{ac.title.toUpperCase()} </LabelButton>
            </AreaButton>
          </Content>
        ))}
      </ActionButton>
    </Container>
  );
};

export default Actions;
