import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.background};
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colorFont};
  font-size: 18px;
  font-weight: bold;
  margin: 14px 14px 0px 14px;
`;

export const Lista = styled.FlatList`
  margin: 0px 14px;
`;
