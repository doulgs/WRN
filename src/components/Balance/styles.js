import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: -24px;
  margin-left: 14px;
  margin-right: 14px;
  z-index: 99;
`;

export const ContentItem = styled.View`
  background: ${(props) => props.theme.bgBalance};
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 11px;
  padding-bottom: 11px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`;

export const Details = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background: ${(props) => props.theme.bgSubBalance};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 11px;
  padding-bottom: 11px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;

export const TitleDetails = styled.Text`
  font-weight: bold;
`;

export const ItemTitle = styled.Text`
  font-size: 20px;
  color: #bababa;
`;

export const ContentLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CurrencySymbol = styled.Text`
  color: #dadada;
  margin-right: 6px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const BalanceText = styled.Text`
  font-size: 22px;
  color: #2ecc71;
`;

export const ExpensesText = styled.Text`
  font-size: 22px;
  color: #e74c3c;
`;
