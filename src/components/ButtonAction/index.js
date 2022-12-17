import React, { useState } from "react";

import {
  Position,
  Container,
  Icon,
  ModalPop,
  Safe,
  OptionModal,
  TitleModal,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ButtonAction = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  const options = [
    {
      title: "Adicionar Movivimentação",
      icon: "cog",
      action: () => navigation.navigate("New"),
    },
    {
      title: "Adicionar Condições",
      icon: "cog",
      action: () => alert("Story"),
    },
    {
      title: "Saidas",
      icon: "cog",
      action: () => alert("Story"),
    },
    {
      title: "Criptomoedas",
      icon: "cog",
      action: () => console.log("Ao Vivo"),
    },
  ];

  return (
    <>
      <Position onPress={() => setIsVisible(!isVisible)}>
        <Icon>
          <Ionicons name="keypad" size={24} color="black" />
        </Icon>
      </Position>

      <ModalPop transparent visible={isVisible}>
        <Safe onPress={() => setIsVisible(false)}>
          <Container>
            {options.map((op, i) => (
              <OptionModal key={i} onPress={op.action}>
                <TitleModal>{op.title}</TitleModal>
                <Ionicons name={op.icon} size={22} color="#000" />
              </OptionModal>
            ))}
          </Container>
        </Safe>
      </ModalPop>
    </>
  );
};

export default ButtonAction;
