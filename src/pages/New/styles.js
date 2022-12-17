import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background: ${(props) => props.theme.background};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#222",
})`
  height: 40px;
  width: 90%;
  background-color: ${(props) => props.theme.FontOutOfFocus};
  margin-top: 30px;
  font-size: 16px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 7px;
  border-width: 0.5px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 90%;
  background-color: ${(props) => props.theme.colors.primary};
  margin-top: 30px;
  border-radius: 7px;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colorFont}; ;
`;
