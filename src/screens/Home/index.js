import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
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
                    <Stack.Screen name="Login"
                        component={Login}
                        options={{ headerShown: false }} />

                    <Stack.Screen name="Cadastro"
                        component={Cadastro}
                        options={{ title: "Cadastre-se", headerStyle: { backgroundColor: '#fac829' } }} />

                    <Stack.Screen name="RegistroMovimentacao"
                        component={RegistroMovimentacao}
                        options={{ title: "Registro de Movimentação", headerStyle: { backgroundColor: '#fac829' } }} />

                    <Stack.Screen name="RegistroMeta"
                        component={RegistroMeta}
                        options={{ title: "Registro de Metas", headerStyle: { backgroundColor: '#fac829' } }} />

                    <Stack.Screen name="Inicial"
                        component={Inicial}
                        options={{ title: "Inicio", headerStyle: { backgroundColor: '#fac829' } }} />

                    <Stack.Screen name="Historico"
                        component={Historico}
                        options={{ title: "Historico", headerStyle: { backgroundColor: '#fac829' } }} />
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    );
}