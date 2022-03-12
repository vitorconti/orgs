import React from "react";
import { Image, StyleSheet, View } from "react-native";
import TextFontStyled from "../../../components/TextFontStyled";

type item = {
  nome: string;
  imagem: any;
};
export default function Item(props: any) {
  return (
    <View style={estilos.item}>
      <Image source={props.imagem} style={estilos.imagem} />
      <TextFontStyled style={estilos.nome}>{props.nome}</TextFontStyled>
    </View>
  );
}
const estilos = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  imagem: {
    width: 58,
    height: 58,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});
