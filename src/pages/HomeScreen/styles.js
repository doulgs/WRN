import styled from "styled-components/native";

import { StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export const Header = styled.View`
  background: ${(props) => props.theme.bgHeader};
  padding-top: ${statusBarHeight + 110}px;
`;
export const Container = styled.View`
  flex: 1;
  background: #f0f0f0;
`;
export const HeaderAction = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  right: 15px;
`;
export const Listagem = styled.FlatList`
  flex: 1;
  background: ${(props) => props.theme.colors.white};
  padding: 0px 15px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  margin-top: 30px;
`;
