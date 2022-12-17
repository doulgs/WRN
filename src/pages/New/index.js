import React, { useState } from "react";
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from "react-native";
import Select from "../../components/Select";
import {
  Background,
  Container,
  Input,
  SubmitButton,
  SubmitText,
  Title,
} from "./styles";

export default function New() {
  const [label, setLabel] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState(null);

  const selectedOption = [
    {
      id: "1",
      description: "Receita",
    },
    {
      id: "2",
      description: "Despesa",
    },
  ];

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <SafeAreaView style={{ alignItems: "center" }}>
          <Input
            placeholder="Descrição da Movimentação"
            keyboardType="twitter"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
            valor={label}
            onChangeText={(text) => setLabel(text)}
          />

          <Input
            placeholder="Valor da Movimentação"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
            valor={valor}
            onChangeText={(text) => setValor(text)}
          />

          <Select
            options={selectedOption}
            onChangeSelectedTipo={(description) => setTipo(description)}
            text="Tipo de Movimentação"
          />

          <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}
