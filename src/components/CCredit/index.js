import React from "react";

import {
  Container,
  Content,
  Date,
  Icon,
  IconLogo,
  Name,
  Number,
} from "./styles";

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const CCredit = ({ name, NumberCard, date }) => {
  return (
    <Container>
      <Content
        source={require("../../assets/CardWallpaper.png")}
        imageStyle={{ borderRadius: 6 }}
      >
        <Icon>
          <MaterialCommunityIcons
            name="google-podcast"
            size={20}
            color="white"
          />
        </Icon>
        <Name>{name}</Name>
        <Number>{NumberCard}</Number>
        <Date>{date}</Date>

        <IconLogo>
          <Ionicons name="infinite-outline" size={35} color="white" />
        </IconLogo>
      </Content>
    </Container>
  );
};

export default CCredit;
