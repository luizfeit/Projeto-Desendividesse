import React, { useState } from 'react';

import { ScrollView, View } from 'react-native';

import { styles, theme } from './styles';

import {
    Button,
    Card,
    Provider as PaperProvider,
    RadioButton,
    TextInput
} from "react-native-paper";

import { Header } from '../Header/header.component';

export function RegistroMovimentacao() {

    const { tipo, setTipo} = useState("1");

    return (
        <PaperProvider theme={theme}>
            <Header title="Movimentação" />
            <ScrollView style={styles.background}>
                <View style={styles.container}>
                    <View>
                        <Card style={styles.borderCard}>
                            <Card.Title title="Nova Movimentação"  />
                            <Card.Content>

                                <TextInput label="Valor"
                                    keyboardType="numeric"
                                    style={styles.cardInput} />

                                <RadioButton.Group
                                   onValueChange={value => setTipo(tipo = value)}
                                    value={tipo}>

                                    <View>
                                    <Text>Crédito</Text>
                                    <RadioButton value="1" />
                                    </View>

                                    <View>
                                    <Text>Débito</Text>
                                    <RadioButton value="2" />
                                    </View>

                                    <View>
                                    <Text>Transferência</Text>
                                    <RadioButton value="3" />
                                    </View>

                                    <View>
                                    <Text>Saque</Text>
                                    <RadioButton value="4" />
                                    </View>

                                </RadioButton.Group>    

                                <TextInput label="Tag"
                                    style={styles.cardInput}
                                    disabled />

                                <TextInput label="Descrição"
                                    style={styles.cardInput} />    

                                <Button mode="contained"
                                    style={styles.cardRegister}>
                                    Salvar
                                </Button>

                                <Button mode="contained"
                                    style={styles.cardRegister}>
                                    Cancelar
                                </Button>

                            </Card.Content>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        </PaperProvider>
    );
}