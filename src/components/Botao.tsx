import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import TextFontStyled from "./TextFontStyled";

type BotaoGenerico = {
  textoBotao: string;
  estiloPai: any;
  onPress: () => void;
};

export default function Botao(props: BotaoGenerico) {
  return (
    <TouchableOpacity
      style={[estilos.botao, props.estiloPai]}
      onPress={props.onPress}
    >
      <TextFontStyled style={estilos.textoBotao}>
        {props.textoBotao}
      </TextFontStyled>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
