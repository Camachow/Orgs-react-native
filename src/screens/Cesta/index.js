import React from 'react'

import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'
import { View, StyleSheet } from 'react-native'

export default function Cesta() {
    return <>
        <Topo/>
        <View style={estilos.cesta}>
            <Detalhes/>
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})