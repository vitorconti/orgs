import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import TextFontStyled from "../../../components/TextFontStyled";
import topo from "../../../../assets/topo.png";
const width = Dimensions.get("screen").width;

type Topo = {
    titulo: string
}

export default function Topo(props :Topo) {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <TextFontStyled style={estilos.titulo}>{props.titulo}</TextFontStyled>
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
});
