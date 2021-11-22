import React from 'react';


import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { styles } from './styles';

import { Login } from '../../components/Login'
import { Cadastro } from '../../components/Cadastro';
import { RegistroMovimentacao } from '../../components/RegistroMovimentacao';
import { RegistroMeta } from '../../components/RegistroMeta';
import { Inicial } from '../../components/Inicial';
import { Historico } from '../../components/Historico';



export function Home() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <View style={styles.container}>
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="RegistroMovimentacao" component={RegistroMovimentacao} />
                <Stack.Screen name="RegistroMeta" component={RegistroMeta} />
                <Stack.Screen name="Inicial" component={Inicial} />
                <Stack.Screen name="Historico" component={Historico} />
            </Stack.Navigator>
            </View>
        </NavigationContainer>
    );
}