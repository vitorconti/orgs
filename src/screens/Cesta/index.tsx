import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TextFontStyled from "../../components/TextFontStyled";

import Details from "./components/Details";
import Item from "./components/Item";
import Topo from "./components/Topo";

type Cesta = {
  topo: {
    titulo: string;
  };
  detalhes: {
    nome: string;
    logoFazenda: any;
    nomeFazenda: string;
    descricao: string;
    preco: string;
  };
  itens: {
    titulo: string;
    lista: [
      {
        nome: string;
        imagem: any;
      }
    ];
  };
};
export default function Cesta(props: Cesta) {
  const { lista } = props.itens;
  return (
    <>
      <FlatList
        data={lista}
        renderItem={({ item }) => (
          <Item imagem={item.imagem} nome={item.nome} />
        )}
        keyExtractor={(item) => item.nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...props.topo} />
              <View style={estilos.cesta}>
                <Details {...props.detalhes} />
                <TextFontStyled style={estilos.titulo}>
                  {props.itens.titulo}
                </TextFontStyled>
              </View>
            </>
          );
        }}
      />
    </>
  );
}
const estilos = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
