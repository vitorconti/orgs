import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";
import TextFontStyled from "../components/TextFontStyled";

const width = Dimensions.get("screen").width;
export default function Cesta() {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <TextFontStyled style={estilos.titulo}>Detalhe da cesta</TextFontStyled>
      <View style={estilos.cesta}>
        <TextFontStyled style={estilos.nome}>Cesta de Verduras</TextFontStyled>
        <View style={estilos.fazenda}>
          <Image style={estilos.imagemFazenda} source={logo} />
          <TextFontStyled style={estilos.nomeFazenda}>
            Jenny Jack Farm
          </TextFontStyled>
        </View>
        <TextFontStyled style={estilos.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha
        </TextFontStyled>
        <TextFontStyled style={estilos.preco}>R$ 40,00</TextFontStyled>
      </View>
    </>
  );
}
const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 24,
    lineHeight: 32,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
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
});
