import styled from "styled-components/native";

export const Container = styled.ScrollView`
  max-height: 84px;
  margin: 18px 14px 14px 14px;
`;
export const Content = styled.View`
  align-items: center;
  margin-right: 32px;
`;
export const ActionButton = styled.View`
  align-items: center;
  margin-right: 32px;
  flex-direction: row;
`;
export const AreaButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.FontOutOfFocus};
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;
export const LabelButton = styled.Text`
  font-size: 14px;
  margin-top: 4px;
  text-align: center;
  color: ${(props) => props.theme.colorFont};
`;
