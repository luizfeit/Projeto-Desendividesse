import React from 'react';

import { View } from 'react-native';
import { styles } from './styles';

import { Login } from '../../components/Login'
import { Cadastro } from '../../components/Cadastro';
import { RegistroMovimentacao } from '../../components/RegistroMovimentacao';


export function Home() {

    return (
        <View style={styles.container}>
            {/* <Login /> */}
            {/* <Cadastro /> */}
            <RegistroMovimentacao />
        </View>
    );
}