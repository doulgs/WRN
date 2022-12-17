import styled from "styled-components/native";

import { StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export const Container = styled.View`
  background: ${(props) => props.theme.bgHeader};
  padding-top: ${statusBarHeight}px;
  flex-direction: row;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 44px;
`;
export const Content = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const ContentTitle = styled.View`
  left: -7px;
`;

export const ActionHeader = styled.TouchableOpacity``;

export const CContent = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const ContentText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const ContentButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 44px;
  height: 45px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 22px;
`;
export const ButtonVisibility = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin: 0px 20px;
`;
