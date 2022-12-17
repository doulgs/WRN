import React, { useState } from "react";

import {
  Position,
  Container,
  Icon,
  ModalPop,
  Safe,
  OptionModal,
  TitleModal,
  IconTitle,
} from "./styles";

import { Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ButtonAction = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  const options = [
    {
      title: "Adicionar Movivimentação",
      icon: "calculator",
      action: () => navigation.navigate("New"),
    },
    {
      title: "Editar Info. do cartão",
      icon: "credit-card",
      action: () => alert("Story"),
    },
    {
      title: "Ajuda",
      icon: "help",
      action: () => alert("Story"),
    },
  ];

  return (
    <>
      <Position onPress={() => setIsVisible(!isVisible)}>
        <Icon>
          <MaterialCommunityIcons
            name="credit-card-edit-outline"
            size={24}
            color="#4a89a5"
          />
          <IconTitle>Opções</IconTitle>
        </Icon>
      </Position>

      <ModalPop transparent visible={isVisible}>
        <Safe onPress={() => setIsVisible(false)}>
          <Container>
            {options.map((op, i) => (
              <OptionModal
                key={i}
                onPress={op.action}
                style={{
                  borderBottomWidth: i === options.length - 1 ? 0 : 0.5,
                }}
              >
                <TitleModal>{op.title}</TitleModal>
                <Entypo name={op.icon} size={22} color="#4a89a5" />
              </OptionModal>
            ))}
          </Container>
        </Safe>
      </ModalPop>
    </>
  );
};

export default ButtonAction;
