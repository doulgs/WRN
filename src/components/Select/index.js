import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Modal,
  FlatList,
  SafeAreaView,
} from "react-native";

import {
  Container,
  ContentHeader,
  Header,
  List,
  MyModal,
  OptionContainer,
  OptionTxt,
  Texto,
  TextTitle,
} from "./styles";

import { Entypo } from "@expo/vector-icons";

const Select = ({ options, onChangeSelect, onChangeSelectedTipo, text }) => {
  const [txt, setTxt] = useState(text);
  const [selected, setSelected] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  function renderOption(item) {
    return (
      <OptionContainer
        onPress={() => {
          // onChangeSelect(item.id);
          onChangeSelectedTipo(item.description);
          setSelected(item.id);
          setTxt(item.description);
          setModalVisible(!modalVisible);
        }}
      >
        <OptionTxt>{item.description}</OptionTxt>
        {selected === item.id && (
          <Entypo name="check" size={18} color="#4efa7b" />
        )}
      </OptionContainer>
    );
  }

  return (
    <>
      <Container onPress={() => setModalVisible(!modalVisible)}>
        <Texto>{txt}</Texto>
        <Entypo name="chevron-down" size={24} color="black" />
      </Container>
      <MyModal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView>
          <Header onPress={() => setModalVisible(!modalVisible)}>
            <ContentHeader>
              <Entypo name="chevron-left" size={27} color="white" />
            </ContentHeader>
            <TextTitle>{text}</TextTitle>
          </Header>
          <List
            data={options || []}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => renderOption(item)}
          />
        </SafeAreaView>
      </MyModal>
    </>
  );
};

export default Select;
