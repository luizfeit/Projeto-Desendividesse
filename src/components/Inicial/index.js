import React, { useEffect, useState } from 'react';

import { ScrollView, View, Text, Alert } from 'react-native';

import { styles, theme } from './styles';

import {
    Button,
    Card,
    Title,
    Chip,
    Provider as PaperProvider,
    RadioButton,
    TextInput,
    Avatar
} from "react-native-paper";

import Movimentacao from '../../services/database/Movimentacoes';

import { Header } from '../Header/header.component';

export function Inicial({ route, navigation }) {

    const { UserId, OtherParam } = route.params;
    const [salMov, setSalMov] = useState(null);

    useEffect(() => {
        Movimentacao.saldo(UserId)
            .then((valor) => valor['SUM(valor)'])
            .catch(err => alert(err))
    });

    return (
        <PaperProvider theme={theme}>
            <ScrollView style={styles.background}>
                <View style={styles.container}>
                    <View>
                        <Card style={styles.borderCard}>

                            <Card.Title
                                title={`Bem vindo ${OtherParam}`}
                                titleStyle={[styles.cardTitle, styles.userName]} />


                            <Card.Content>
                                <Title style={styles.saldo}>Saldo de Gastos: {salMov}</Title>

                                <Button mode='contained' style={styles.cardLogin}
                                    onPress={() => navigation.navigate('RegistroMovimentacao', { UserId: UserId, OtherParam: OtherParam })}>
                                    Registrar Movimentação
                                </Button>

                                <Button mode='contained' style={styles.cardLogin}
                                    onPress={() => navigation.navigate('RegistroMeta', { UserId: UserId, OtherParam: OtherParam })}>
                                    Registrar Meta
                                </Button>
                            </Card.Content>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}
