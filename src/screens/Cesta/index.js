import React from 'react'

import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'
import { View, StyleSheet } from 'react-native'

export default function Cesta({topo, detalhes} ) {
    return <>
        <Topo {...topo} />
        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})