import React from 'react';

import { View } from 'react-native';
import { styles } from './styles';

import { Login } from '../../components/Login'
import { Cadastro } from '../../components/Cadastro';
import { RegistroMovimentacao } from '../../components/RegistroMovimentacao';
import { RegistroMeta } from '../../components/RegistroMeta';
import { Inicial } from '../../components/Inicial';
import { Historico } from '../../components/Historico';



export function Home() {

    return (
        <View style={styles.container}>
            < Login />
            {/* < Cadastro /> */}
            {/* < RegistroMovimentacao /> */}
            {/* < RegistroMeta /> */}
            {/* < Inicial /> */}
            {/* < Historico /> */}
        </View>
    );
}