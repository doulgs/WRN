import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin: 12px 0px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2px;
  margin-bottom: 8px;
`;

export const Date = styled.Text`
  color: ${(props) => props.theme.bgSubBalance};
  font-size: 12px;
  font-weight: bold;
`;

export const ContentLabel = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => props.theme.colorFont};
`;

export const ContentBalance = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #2ecc17;
`;

export const ContentExpense = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #e74e3c;
`;

export const Skeleton = styled.Text`
  width: 80px;
  height: 15px;
  background-color: ${(props) => props.theme.bgSubBalance};
  border-radius: 8px;
`;
