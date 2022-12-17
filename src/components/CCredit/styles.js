import styled from "styled-components/native";

export const Container = styled.View`
  position: absolute;
  top: 110px;
  left: 35px;

  width: 200px;
  height: 110px;

  border-width: 2px;
  border-color: #fff;
  border-radius: 7px;
  z-index: 80;
`;

export const Content = styled.ImageBackground`
  flex: 1;
  flex-direction: column-reverse;
  padding: 10px;
`;

export const Icon = styled.View`
  position: absolute;
  top: 7px;
  right: 10px;
`;
export const IconLogo = styled.View`
  position: absolute;
  bottom: 14px;
  right: 10px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 12px;
  padding-top: 5px;
`;

export const Number = styled.Text`
  font-size: 12px;
  color: #fff;
  padding-top: 5px;
`;

export const Date = styled.Text`
  font-size: 12px;
  color: #fff;
  padding-top: 5px;
`;
