import styled from "styled-components/native";

export const Position = styled.TouchableOpacity`
  position: absolute;
  top: 145px;
  right: 37px;

  background: ${(props) => props.theme.colors.white};
  padding: 7px;
  border-radius: 8px;
  z-index: 999;
  elevation: 2;
`;

export const Icon = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconTitle = styled.Text`
  padding-left: 5px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`;

export const ModalPop = styled.Modal``;

export const Safe = styled.TouchableOpacity`
  flex: 1;
`;

export const Container = styled.View`
  border-radius: 8px;
  border-color: ${(props) => props.theme.colors.primary};
  border-width: 1px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 0px 10px;
  position: absolute;
  top: 155px;
  right: 37px;
  elevation: 2;
`;

export const OptionModal = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 7px 0px;
  margin: 2px 0px;
  border-bottom-color: ${(props) => props.theme.colors.offBlack}; ;
`;

export const TitleModal = styled.Text`
  margin-right: 10px;
`;
