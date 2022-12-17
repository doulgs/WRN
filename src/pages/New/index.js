import React, { useState } from "react";
import { SafeAreaView, Keyboard, TouchableWithoutFeedback } from "react-native";
import Select from "../../components/Select";
import { SelectList } from "react-native-dropdown-select-list";
import {
  Background,
  Container,
  ContentInput,
  Input,
  SubmitButton,
  SubmitText,
  Title,
} from "./styles";

export default function New() {
  const [label, setLabel] = useState("");
  const [valor, setValor] = useState("");
  const [selected, setSelected] = useState("");
  const [tipo, setTipo] = useState(null);

  const selectedOption = [
    {
      key: "1",
      value: "Receita",
    },
    {
      key: "2",
      value: "Despesa",
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

          <ContentInput>
            <SelectList
              data={selectedOption}
              setSelected={(val) => setSelected(val)}
              save="value"
              placeholder="Tipo da movimentação"
              inputStyles={{ fontSize: 16 }}
              boxStyles={{
                backgroundColor: "rgba(255, 255, 255,0.5)",
                paddingLeft: 12,
              }}
              dropdownStyles={{
                backgroundColor: "rgba(255, 255, 255,0.5)",
              }}
              dropdownItemStyles={{ borderBottomWidth: 0.5 }}
            />
          </ContentInput>

          <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}
