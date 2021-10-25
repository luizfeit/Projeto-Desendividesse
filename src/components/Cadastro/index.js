import React from 'react';

import { ScrollView, View } from 'react-native';

import { styles, theme } from './styles';

import {
    Button,
    Card,
    Provider as PaperProvider,
    TextInput
} from "react-native-paper";

import { Header } from '../Header/header.component';

export function Cadastro() {
    return (
        <PaperProvider theme={theme}>
            <Header title="Cadastro" />
            <ScrollView style={styles.background}>
                <View style={styles.container}>
                    <View>
                        <Card style={styles.borderCard}>
                            <Card.Title title="Registre-se" />
                            <Card.Content>

                                <TextInput label="Nome"
                                    style={styles.cardInput} />

                                <TextInput label="E-mail"
                                    keyboardType="email-address"
                                    style={styles.cardInput} />

                                <TextInput label="Senha"
                                    secureTextEntry={true}
                                    right={<TextInput.Icon name="eye-off-outline" />}
                                    style={styles.cardInput} />

                                <TextInput label="Confirmar Senha"
                                    secureTextEntry={true}
                                    right={<TextInput.Icon name="eye-off-outline" />}
                                    style={styles.cardInput} />

                                <TextInput label="Telefone"
                                    keyboardType="phone-pad"
                                    style={styles.cardInput} />

                                <Button mode="contained"
                                    style={styles.cardRegister}>
                                    Cadastrar
                                </Button>

                            </Card.Content>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}