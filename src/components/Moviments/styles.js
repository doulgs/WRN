import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  margin: 5px 0px;
`;

export const IconContent = styled.View`
  background: #ccc;
  padding: 7px;
  border-radius: 7px;
`;

export const CContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2px;
  padding-top: 20px;
  margin-bottom: 8px;
`;

export const ContentData = styled.View`
  background-color: ${(props) => props.theme.colors.white};
  padding: 3px;
  border-radius: 7px;
  position: absolute;
  right: 42%;
  elevation: 2;
`;

export const Date = styled.Text`
  color: ${(props) => props.theme.bgSubBalance};
  font-size: 12px;
  font-weight: bold;
`;

export const ContentLabel = styled.Text`
  font-weight: bold;
  padding-left: 10px;
  font-size: 16px;
  color: ${(props) => props.theme.bgSubBalance};
`;

export const ContentBalance = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #2ecc17;
  margin-top: 10px;
`;

export const ContentExpense = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #e74e3c;
  margin-top: 10px;
`;

export const Skeleton = styled.Text`
  width: 80px;
  height: 15px;
  background-color: ${(props) => props.theme.bgSkeleton};
  border-radius: 8px;
  margin-top: 10px;
`;
