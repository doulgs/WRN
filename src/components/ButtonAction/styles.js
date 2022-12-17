import styled from "styled-components/native";

export const Position = styled.TouchableOpacity`
  position: absolute;
  top: 90%;
  //left: 44.5%;
  left: 85%;

  background: #333;
  padding: 10px;
  border-radius: 8px;
  z-index: 999;
`;

export const Icon = styled.View``;

export const ModalPop = styled.Modal``;

export const Safe = styled.TouchableOpacity`
  flex: 1;
`;

export const Container = styled.View`
  border-radius: 8px;
  border-color: #333;
  border-width: 1px;
  background-color: #fff;
  padding: 0px 10px;
  position: absolute;
  bottom: 80px;
  right: 60px;
`;

export const OptionModal = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 7px 0px;
  border-bottom-color: #333;
  border-bottom-width: ${(props) => (props.key === -1 ? "0px" : "0.5px")};
`;

export const TitleModal = styled.Text`
  margin-right: 10px;
`;
