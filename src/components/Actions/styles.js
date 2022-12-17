import styled from "styled-components/native";

export const Container = styled.ScrollView`
  max-height: 84px;
  margin: 0px 0px 0px 14px;
`;
export const Content = styled.View`
  align-items: center;
  margin-right: 15px;
`;
export const ActionButton = styled.View`
  align-items: center;
  margin-right: 32px;
  flex-direction: row;
`;
export const AreaButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.white};
  justify-content: center;
  width: 100px;
  max-width: 100px;
  border-radius: 7px;
  padding: 10px;
`;
export const LabelButton = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.black};
`;
