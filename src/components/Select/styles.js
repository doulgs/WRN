import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 40px;
  width: 90%;
  background-color: ${(props) => props.theme.FontOutOfFocus};
  margin-top: 30px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 7px;
  border-width: 0.5px;
`;
export const Texto = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  max-width: 90%;
`;

export const MyModal = styled.Modal``;

export const Header = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  background-color: ${(props) => props.theme.bgHeader};
  flex-direction: row;
  padding: 12px 12px 12px 12px;
  align-items: center;
  border-bottom-width: 1.5px;
  border-color: ${(props) => props.theme.colors.primary};
`;

export const ContentHeader = styled.View`
  width: 15%;
`;

export const TextTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
  font-weight: bold;
  max-width: 90%;
`;

export const List = styled.FlatList``;

export const OptionContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 0.5px;
  border-bottom-color: ${(props) => props.theme.colors.black};
  padding: 10px;
`;

export const OptionTxt = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.black};
`;
