import React from 'react'
import {StyleSheet, View, Image} from 'react-native'
import Texto from '../../../componentes/Texto'

export default function Detalhes() {
    return <>
            <Texto style={estilos.nome}>Cesta de Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image source={require('../../../../assets/logo.png')} style={estilos.imagemFazenda} />
                <Texto style={estilos.nomeFazenda}>Jenny Jack</Texto>
            </View>
            <Texto style={estilos.descricao}>
                Uma cesta com produtos selecionados 
                cuidadosamente da fazenda direto para 
                sua cozinha
            </Texto>
            <Texto style={estilos.preco}>R$40,00</Texto>
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