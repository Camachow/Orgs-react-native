import React from 'react'
import {StyleSheet, View, Image} from 'react-native'
import Texto from '../../../componentes/Texto'

export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco}) {
    return <>
            <Texto style={estilos.nome}>{nome}</Texto>
            <View style={estilos.fazenda}>
                <Image source={logoFazenda} style={estilos.imagemFazenda} />
                <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    fazenda: {
        flexDirection: 'row',
        marginVertical: 12,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: 'MontserratRegular'

    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    descricao: {
        color:"#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: '#2a9f85',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        marginTop: 8,
    },
})