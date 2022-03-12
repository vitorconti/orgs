import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Botao from "../../../components/Botao";
import TextFontStyled from "../../../components/TextFontStyled";

type Details = {
  nome: string;
  logoFazenda: any;
  nomeFazenda: string;
  descricao: string;
  preco: string;
  botao: string;
};
export default function Details(props: Details) {
  return (
    <>
      <TextFontStyled style={estilos.nome}>{props.nome}</TextFontStyled>
      <View style={estilos.fazenda}>
        <Image style={estilos.imagemFazenda} source={props.logoFazenda} />
        <TextFontStyled style={estilos.nomeFazenda}>
          {props.nomeFazenda}
        </TextFontStyled>
      </View>
      <TextFontStyled style={estilos.descricao}>
        {props.descricao}
      </TextFontStyled>
      <TextFontStyled style={estilos.preco}>{props.preco}</TextFontStyled>
      <Botao
        textoBotao={props.botao}
        estiloPai={estilos.botao}
        onPress={() => {}}
      />
    </>
  );
}
const estilos = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 28,
    lineHeight: 42,
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  botao: {
    marginTop: 16,
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
