import React from 'react';

import { View } from 'react-native';
import { styles } from './styles';

import { Login } from '../../components/Login'
import { Cadastro } from '../../components/Cadastro';


export function Home() {
    return (
        <View style={styles.container}>
            {/* <Login /> */}
            <Cadastro />
        </View>
    );
}