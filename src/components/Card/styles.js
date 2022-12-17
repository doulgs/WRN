import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  margin: 0px 15px 30px 15px;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  max-height: 150px;
`;
export const Left = styled.View`
  flex: 1;
  padding-top: 70px;
  padding-left: 30px;
`;
export const Right = styled.View`
  flex: 1;
  flex: 1;
  padding-top: 70px;
  padding-left: 30px;
`;
export const Separator = styled.View`
  height: 140px;
  border-width: 0.2px;
  position: absolute;
  left: 50%;
`;
export const Title = styled.Text`
  font-size: 16px;
`;
export const Simbol = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ContainerVisible = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 30px;
  top: 30px;
`;

export const ButtonVisibility = styled.View`
  margin: 0px 5px;
`;
export const TitleVisible = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
