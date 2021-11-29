import React from 'react';

import { ScrollView, View, Text } from 'react-native';

import { styles, theme } from './styles';

import {
    Button,
    Card,
    Chip,
    Provider as PaperProvider,
    RadioButton,
    TextInput
} from "react-native-paper";

import { Header } from '../Header/header.component';

export function Inicial({ route, navigation }) {

    const { UserId, OtherParam } = route.params;

    return (
        <PaperProvider theme={theme}>
            <ScrollView style={styles.background}>
                <View style={styles.container}>
                    <View>
                        <Card style={styles.borderCard}>
                            <Text>UserId: {JSON.stringify(UserId)}</Text>
                            <Text>OtherParam: {JSON.stringify(OtherParam)}</Text>
                            <Button mode='contained' style={styles.cardLogin}
                            onPress={() => navigation.navigate('RegistroMovimentacao', {UserId: JSON.stringify(UserId), OtherParam: JSON.stringify(OtherParam)})}>
                                Registrar Movimentação
                            </Button>
                            <Button mode='contained' style={styles.cardLogin}
                            onPress={() => navigation.navigate('RegistroMeta', {UserId: JSON.stringify(UserId), OtherParam: JSON.stringify(OtherParam)})}>
                                Registrar Meta
                            </Button>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}
